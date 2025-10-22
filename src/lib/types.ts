import type { User as FirebaseUser } from 'firebase/auth';

export interface User extends FirebaseUser {}

export interface Career {
  id: string;
  slug: string;
  title: string;
  stream: string;
  description: string;
  longDescription: string;
  skills: string[];
  courses: string[];
  exams?: string[];
  topColleges?: string[];
  admissionProcess?: string;
  roadmap: string;
  avgSalary: string;
  futureScope: string;
}

export interface Question {
  id: string;
  text: string;
  options: { text: string; value: string }[];
  category: 'initial' | 'science' | 'commerce' | 'arts';
}

export interface QuizResponse {
  questionId: string;
  selectedOption: string;
}

export interface CareerSuggestion {
  careerPath: string;
  description: string;
  requiredSkills: string[];
  requiredCourses: string[];
  careerRoadmap: string;
  averageSalary: string;
  futureScope: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
  category: 'Admissions' | 'Exams' | 'Policy' | 'Careers';
}

export interface Scholarship {
    id: string;
    title: string;
    provider: string;
    eligibility: string;
    deadline: string;
    url: string;
}


export type ActivityItem = {
  viewedAt: string;
} & (
  | { type: 'news'; item: NewsItem }
  | { type: 'scholarship'; item: Scholarship }
  | { type: 'career'; item: { id: string; title: string; slug: string } }
  | { type: 'quiz'; item: { suggestions: CareerSuggestion[] } }
);

// This is the old type, we are replacing it with ActivityItem
export interface HistoryItem {
  type: 'news' | 'scholarship';
  item: NewsItem | Scholarship;
  viewedAt: string;
}
