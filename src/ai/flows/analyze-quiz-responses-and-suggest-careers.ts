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

const PromptInputSchema = z.object({
    quizResponses: z.string().describe('A JSON string of the quiz responses from the user.'),
    studentInterests: z.string().describe('A summary of the student interests.'),
    studentStrengths: z.string().describe('A summary of the student strengths.'),
});


const prompt = ai.definePrompt({
  name: 'analyzeQuizResponsesPrompt',
  input: {schema: PromptInputSchema},
  output: {schema: AnalyzeQuizResponsesOutputSchema},
  prompt: `You are an AI career counselor for students in India. Analyze the student's quiz responses to suggest suitable career paths.

The quiz responses are provided as a JSON array. Each object in the array contains a 'questionId' and the 'selectedOption' which represents the user's answer. The 'selectedOption' value is a composite string like 'interest_strength' (e.g., 'analytical_problemsolving'). Use these values to understand the user's inclinations.

Consider the student's interests and strengths as summarized below.

Quiz Responses:
{{{quizResponses}}}

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
  async (input) => {
    const maxRetries = 3;
    let attempt = 0;
    while (attempt < maxRetries) {
      try {
        const { output } = await prompt({
          ...input,
          quizResponses: JSON.stringify(input.quizResponses),
        });
        return output!;
      } catch (e: any) {
        attempt++;
        if (attempt >= maxRetries || !e.message?.includes('503')) {
          // If it's the last attempt or not a 503 error, re-throw.
          throw e;
        }
        // Wait for a short period before retrying (e.g., exponential backoff)
        const delay = Math.pow(2, attempt) * 1000; // 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    // This part should be unreachable, but it satisfies TypeScript's need for a return path.
    throw new Error('Failed to get career suggestions after multiple retries.');
  }
);
