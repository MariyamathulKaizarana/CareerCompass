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

type State = {
  status: 'loading' | 'active' | 'submitting' | 'completed';
  currentQuestionIndex: number;
  answers: QuizResponse[];
  timeLeft: number;
};

type Action =
  | { type: 'START_QUIZ' }
  | { type: 'ANSWER_QUESTION'; payload: QuizResponse }
  | { type: 'TICK' }
  | { type: 'SUBMIT' }
  | { type: 'COMPLETE' };

const TIMER_SECONDS = 15;
const TOTAL_QUESTIONS = 10;

const initialState: State = {
  status: 'loading',
  currentQuestionIndex: 0,
  answers: [],
  timeLeft: TIMER_SECONDS,
};

function quizReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_QUIZ':
      return { ...initialState, status: 'active' };
    case 'TICK':
      if (state.timeLeft > 0) {
        return { ...state, timeLeft: state.timeLeft - 1 };
      }
      // Time's up, move to next question
      if (state.currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          timeLeft: TIMER_SECONDS,
        };
      }
      return { ...state, status: 'submitting' };
    case 'ANSWER_QUESTION':
      const isLastQuestion = state.currentQuestionIndex === TOTAL_QUESTIONS - 1;
      return {
        ...state,
        answers: [...state.answers, action.payload],
        currentQuestionIndex: isLastQuestion ? state.currentQuestionIndex : state.currentQuestionIndex + 1,
        timeLeft: isLastQuestion ? state.timeLeft : TIMER_SECONDS,
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

export function QuizClient({ questions }: QuizClientProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useUser();
  
  useEffect(() => {
    dispatch({ type: 'START_QUIZ' });
  }, []);

  useEffect(() => {
    if (state.status !== 'active') return;

    const timer = setInterval(() => {
      dispatch({ type: 'TICK' });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.status, state.timeLeft, state.currentQuestionIndex]);

  useEffect(() => {
    if (state.status === 'submitting') {
      const submitAnswers = async () => {
        try {
          // This is a placeholder for student interests and strengths.
          // In a real app, this might come from a profile or a pre-quiz form.
          const studentInterests = "Likes technology and creative problem solving.";
          const studentStrengths = "Analytical thinking and teamwork.";

          const suggestions: CareerSuggestion[] = await analyzeQuizResponsesAndSuggestCareers({ 
            quizResponses: state.answers,
            studentInterests,
            studentStrengths
          });
          
          // Store results in localStorage to pass to the results page
          localStorage.setItem('careerSuggestions', JSON.stringify(suggestions));
          dispatch({ type: 'COMPLETE' });
          router.push('/results');

        } catch (error) {
          toast({
            variant: "destructive",
            title: "Analysis Failed",
            description: "Could not get career suggestions. Please try again.",
          });
          dispatch({ type: 'START_QUIZ' }); // Reset quiz
        }
      };
      submitAnswers();
    }
  }, [state.status, state.answers, router, toast, user]);

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

  const currentQuestion = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex) / questions.length) * 100;

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <Progress value={progress} className="mb-4 h-2" />
        <CardTitle className="font-headline text-2xl">
          Question {state.currentQuestionIndex + 1} of {questions.length}
        </CardTitle>
        <div className="flex items-center justify-between">
          <CardDescription>Choose the option that best describes you.</CardDescription>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-lg font-bold text-primary">
            {state.timeLeft}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={state.currentQuestionIndex}
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
                  onClick={() => dispatch({ type: 'ANSWER_QUESTION', payload: { questionId: currentQuestion.id, selectedOption: option.value } })}
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
