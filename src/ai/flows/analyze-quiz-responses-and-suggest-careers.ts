'use server';
/**
 * @fileOverview Analyzes quiz responses and suggests suitable career paths.
 *
 * - analyzeQuizResponsesAndSuggestCareers - A function that analyzes quiz responses and suggests career paths.
 * - QuizResponse - The type for individual quiz response.
 * - CareerSuggestion - The return type for the suggested career paths.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuizResponseSchema = z.object({
  questionId: z.string(),
  selectedOption: z.string(),
});
export type QuizResponse = z.infer<typeof QuizResponseSchema>;

const CareerSuggestionSchema = z.object({
  careerPath: z.string().describe('The suggested career path.'),
  description: z.string().describe('A short description of the career path.'),
  requiredSkills: z.array(z.string()).describe('List of required skills for the career.'),
  requiredCourses: z.array(z.string()).describe('List of required courses for the career.'),
  careerRoadmap: z.string().describe('The career roadmap (education -> internships -> job roles).'),
  averageSalary: z.string().describe('The average salary for this career path in Indian Rupees (INR), formatted as "₹X-Y LPA".'),
  futureScope: z.string().describe('The future scope and outlook for this career.'),
});
export type CareerSuggestion = z.infer<typeof CareerSuggestionSchema>;

const AnalyzeQuizResponsesInputSchema = z.object({
  quizResponses: z.array(QuizResponseSchema).describe('The array of quiz responses from the user.'),
  studentInterests: z.string().describe('A summary of the student interests.'),
  studentStrengths: z.string().describe('A summary of the student strengths.'),
});
export type AnalyzeQuizResponsesInput = z.infer<typeof AnalyzeQuizResponsesInputSchema>;

const AnalyzeQuizResponsesOutputSchema = z.array(CareerSuggestionSchema);
export type AnalyzeQuizResponsesOutput = z.infer<typeof AnalyzeQuizResponsesOutputSchema>;

export async function analyzeQuizResponsesAndSuggestCareers(
  input: AnalyzeQuizResponsesInput
): Promise<AnalyzeQuizResponsesOutput> {
  return analyzeQuizResponsesAndSuggestCareersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeQuizResponsesPrompt',
  input: {schema: AnalyzeQuizResponsesInputSchema},
  output: {schema: AnalyzeQuizResponsesOutputSchema},
  prompt: `You are an AI career counselor for students in India. Analyze the student's quiz responses to suggest suitable career paths.

Consider the student's interests and strengths.

Quiz Responses: {{{quizResponses}}}
Student Interests: {{{studentInterests}}}
Student Strengths: {{{studentStrengths}}}

Suggest 2-3 most suitable career paths with detailed information.

Format your response as a JSON array of career suggestions.

Each career suggestion should include:
- careerPath: The suggested career path.
- description: A short description of the career path.
- requiredSkills: List of required skills for the career.
- requiredCourses: List of required courses for the career.
- careerRoadmap: The career roadmap (education -> internships -> job roles).
- averageSalary: The average salary for this career path in Indian Rupees (INR), formatted as "₹X-Y LPA". For example: "₹8-12 LPA".
- futureScope: The future scope and outlook for this career.`,
});

const analyzeQuizResponsesAndSuggestCareersFlow = ai.defineFlow(
  {
    name: 'analyzeQuizResponsesAndSuggestCareersFlow',
    inputSchema: AnalyzeQuizResponsesInputSchema,
    outputSchema: AnalyzeQuizResponsesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
