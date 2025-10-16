'use client';

import { useState, useEffect, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import type { Question, QuizResponse, CareerSuggestion } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';
import { analyzeQuizResponsesAndSuggestCareers } from '@/ai/flows/analyze-quiz-responses-and-suggest-careers';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@/firebase';

interface QuizClientProps {
  questions: Question[];
}

type QuizStatus = 'loading' | 'selecting_stream' | 'in_progress' | 'submitting' | 'completed';

type State = {
  status: QuizStatus;
  stream: 'science' | 'commerce' | 'arts' | null;
  currentQuestionIndex: number;
  answers: QuizResponse[];
  filteredQuestions: Question[];
};

type Action =
  | { type: 'START_QUIZ'; payload: { questions: Question[] } }
  | { type: 'SELECT_STREAM'; payload: { stream: 'science' | 'commerce' | 'arts'; questions: Question[] } }
  | { type: 'ANSWER_QUESTION'; payload: QuizResponse }
  | { type: 'SUBMIT' }
  | { type: 'COMPLETE' };

const initialState: State = {
  status: 'loading',
  stream: null,
  currentQuestionIndex: 0,
  answers: [],
  filteredQuestions: [],
};

function quizReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_QUIZ':
        const streamQuestion = action.payload.questions.find(q => q.category === 'initial');
        return { 
            ...initialState,
            status: 'selecting_stream',
            filteredQuestions: streamQuestion ? [streamQuestion] : []
        };
    case 'SELECT_STREAM':
      const streamQuestions = action.payload.questions.filter(q => q.category === action.payload.stream).slice(0, 15);
      return {
        ...state,
        status: 'in_progress',
        stream: action.payload.stream,
        answers: [
          ...state.answers,
          { questionId: 'q_stream', selectedOption: action.payload.stream }
        ],
        currentQuestionIndex: 0,
        filteredQuestions: streamQuestions,
      };
    case 'ANSWER_QUESTION':
      const isLastQuestion = state.currentQuestionIndex === state.filteredQuestions.length - 1;
      return {
        ...state,
        answers: [...state.answers, action.payload],
        currentQuestionIndex: isLastQuestion ? state.currentQuestionIndex : state.currentQuestionIndex + 1,
        status: isLastQuestion ? 'submitting' : state.status,
      };
    case 'SUBMIT':
        return {...state, status: 'submitting'};
    case 'COMPLETE':
      return { ...state, status: 'completed' };
    default:
      return state;
  }
}

function analyzeAnswers(answers: QuizResponse[], questions: Question[]) {
    const interestMapping: Record<string, string> = {
        analytical: 'Analytical thinking and problem-solving',
        technical: 'Technology and building things',
        creative: 'Creative expression and design',
        caring: 'Helping and caring for others',
        business: 'Business strategy and management',
        humanities: 'Understanding human culture and society',
        social: 'Interacting with and understanding people'
    };

    const interestCounts: Record<string, number> = {};
    const strengths: Set<string> = new Set();

    answers.forEach(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        const option = question?.options.find(o => o.value === answer.selectedOption);
        if (option) {
            const [interest, strength] = option.value.split('_');
            if (interest) {
                interestCounts[interest] = (interestCounts[interest] || 0) + 1;
            }
            if (strength) {
                strengths.add(strength);
            }
        }
    });

    const sortedInterests = Object.entries(interestCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([key]) => interestMapping[key] || key);

    const studentInterests = sortedInterests.length > 0 ? sortedInterests.join(', ') + '.' : 'A wide range of interests.';
    const studentStrengths = strengths.size > 0 ? Array.from(strengths).join(', ') + '.' : 'Diverse set of skills.';

    return { studentInterests, studentStrengths };
}


export function QuizClient({ questions }: QuizClientProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useUser();
  
  useEffect(() => {
    dispatch({ type: 'START_QUIZ', payload: { questions } });
  }, [questions]);

  useEffect(() => {
    if (state.status === 'submitting') {
      const submitAnswers = async () => {
        try {
          const { studentInterests, studentStrengths } = analyzeAnswers(state.answers, questions);

          const suggestions: CareerSuggestion[] = await analyzeQuizResponsesAndSuggestCareers({ 
            quizResponses: state.answers,
            studentInterests,
            studentStrengths
          });
          
          localStorage.setItem('careerSuggestions', JSON.stringify(suggestions));
          dispatch({ type: 'COMPLETE' });
          router.push('/results');

        } catch (error) {
          toast({
            variant: "destructive",
            title: "Analysis Failed",
            description: "Could not get career suggestions. Please try again.",
          });
          dispatch({ type: 'START_QUIZ', payload: { questions } });
        }
      };
      submitAnswers();
    }
  }, [state.status, state.answers, router, toast, user, questions]);

  const handleStreamSelect = (stream: 'science' | 'commerce' | 'arts') => {
    dispatch({ type: 'SELECT_STREAM', payload: { stream, questions } });
  };
  
  const handleAnswerSelect = (response: QuizResponse) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: response });
  };

  if (state.status === 'loading') {
    return <Card><CardContent className="p-6 text-center"><Loader2 className="h-8 w-8 animate-spin mx-auto" /></CardContent></Card>;
  }
  
  if (state.status === 'submitting') {
    return (
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Analyzing your results...</CardTitle>
          <CardDescription>Our AI is crafting your personalized career report. Please wait a moment.</CardDescription>
        </CardHeader>
        <CardContent>
          <Loader2 className="h-12 w-12 animate-spin text-accent mx-auto" />
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = state.filteredQuestions[state.currentQuestionIndex];
  if (!currentQuestion) {
     return <Card><CardContent className="p-6 text-center">No questions available for this stream.</CardContent></Card>;
  }

  const progress = state.status === 'in_progress' ? ((state.currentQuestionIndex) / state.filteredQuestions.length) * 100 : 0;
  const questionNumber = state.status === 'in_progress' ? state.currentQuestionIndex + 1 : 1;
  const totalQuestions = state.status === 'in_progress' ? state.filteredQuestions.length : 1;

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        {state.status === 'in_progress' && <Progress value={progress} className="mb-4 h-2" />}
        <CardTitle className="font-headline text-2xl">
          {state.status === 'selecting_stream' ? 'Let\'s Get Started' : `Question ${questionNumber} of ${totalQuestions}`}
        </CardTitle>
        <CardDescription>{state.status === 'selecting_stream' ? 'First, help us understand your background.' : 'Choose the option that best describes you.'}</CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={state.currentQuestionIndex + (state.stream || '')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-8 text-2xl font-semibold text-foreground">{currentQuestion.text}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {currentQuestion.options.map((option) => (
                <Button
                  key={option.value}
                  variant="outline"
                  className="h-auto min-h-[4rem] whitespace-normal justify-start p-4 text-left text-base"
                  onClick={() => {
                    if (state.status === 'selecting_stream') {
                      handleStreamSelect(option.value as 'science' | 'commerce' | 'arts');
                    } else {
                      handleAnswerSelect({ questionId: currentQuestion.id, selectedOption: option.value });
                    }
                  }}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
