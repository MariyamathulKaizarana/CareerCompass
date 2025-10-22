import { AppShell } from '@/components/AppShell';
import { QuizClient } from '@/components/quiz/QuizClient';
import { quizQuestions } from '@/lib/quiz-data';

export default function QuizPage() {
  return (
    <AppShell>
      <div className="mx-auto w-full max-w-4xl">
        <QuizClient questions={quizQuestions} />
      </div>
    </AppShell>
  );
}
