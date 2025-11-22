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

const SalarySchema = z.object({
    fresher: z.string().describe('Salary range for a fresher (0-2 years experience).'),
    midLevel: z.string().describe('Salary range for a mid-level professional (3-7 years experience).'),
    senior: z.string().describe('Salary range for a senior-level professional (8+ years experience).'),
});

const CareerSuggestionSchema = z.object({
  careerPath: z.string().describe('The suggested career path.'),
  description: z.string().describe('A short description of the career path.'),
  requiredSkills: z.array(z.string()).describe('List of required skills for the career.'),
  requiredCourses: z.array(z.string()).describe('List of required courses for the career.'),
  careerRoadmap: z.string().describe('The career roadmap (education -> internships -> job roles).'),
  averageSalary: SalarySchema.describe('An object containing salary ranges for different experience levels in Indian Rupees (INR), formatted as "₹X-Y LPA".'),
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
  prompt: `You are an AI career counselor for students in India. Analyze the student's quiz responses to suggest suitable career paths.

The quiz responses are provided as a JSON array. Each object in the array contains a 'questionId' and the 'selectedOption' which represents the user's answer. The 'selectedOption' value is a composite string like 'interest_strength' (e.g., 'analytical_problemsolving', 'caring_humanbody'). Use these values to understand the user's inclinations. For example, 'analytical' is an interest, and 'problemsolving' is a strength.

Consider the student's interests and strengths as summarized below.

Quiz Responses:
{{{quizResponses}}}

Student Interests: {{{studentInterests}}}
Student Strengths: {{{studentStrengths}}}

Based on this, suggest 2-3 most suitable career paths with detailed information. Your suggestions should be directly influenced by the patterns in the quiz answers. For example, a student who consistently chooses 'analytical' and 'technical' options might be a good fit for Software Developer or Data Scientist, while a student choosing 'caring' and 'humanbody' is a better fit for Doctor or Physiotherapist.

For each suggestion, you MUST include all of the following fields: "careerPath", "description", "requiredSkills", "requiredCourses", "careerRoadmap", "averageSalary", and "futureScope".

**CRITICAL FORMATTING RULES**:
- The "requiredSkills" and "requiredCourses" fields MUST be JSON arrays of strings.
- The "averageSalary" field MUST be a JSON object with three keys: "fresher", "midLevel", and "senior". Each key should have a string value formatted as "₹X-Y LPA" (e.g., "₹8-12 LPA").

Format your response as a JSON array of career suggestions.
`,
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
    let delay = 1000; // start with 1 second

    while (attempt < maxRetries) {
      try {
        const response = await prompt({
          ...input,
          quizResponses: JSON.stringify(input.quizResponses),
        });
        
        const rawText = response.text;
        const jsonMatch = rawText.match(/```json\n([\s\S]*?)\n```/);
        const jsonString = jsonMatch ? jsonMatch[1] : rawText;

        const parsedOutput = JSON.parse(jsonString);
        return AnalyzeQuizResponsesOutputSchema.parse(parsedOutput);

      } catch (error: any) {
        if (error.message.includes('503') && attempt < maxRetries - 1) {
          console.warn(`Attempt ${attempt + 1} failed with 503 error. Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2; // exponential backoff
          attempt++;
        } else {
          // For other errors or if max retries are reached, throw the error
          console.error(`Failed after ${attempt + 1} attempts.`);
          throw error;
        }
      }
    }
    // This part should ideally not be reached, but is here for type safety
    throw new Error('Failed to get career suggestions after multiple retries.');
  }
);
