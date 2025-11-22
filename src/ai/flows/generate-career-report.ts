'use server';

/**
 * @fileOverview Generates a personalized career report for a given career path.
 *
 * - generateCareerReport - A function that generates the career report.
 * - GenerateCareerReportInput - The input type for the generateCareerReport function.
 * - GenerateCareerReportOutput - The return type for the generateCareerReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCareerReportInputSchema = z.object({
  careerPath: z.string().describe('The career path to generate a report for.'),
  interests: z.string().describe('The interests of the user.'),
});
export type GenerateCareerReportInput = z.infer<typeof GenerateCareerReportInputSchema>;

const SalarySchema = z.object({
    fresher: z.string().describe('Salary range for a fresher (0-2 years experience).'),
    midLevel: z.string().describe('Salary range for a mid-level professional (3-7 years experience).'),
    senior: z.string().describe('Salary range for a senior-level professional (8+ years experience).'),
});


const GenerateCareerReportOutputSchema = z.object({
  description: z.string().describe('A short description of the career path.'),
  requiredSkills: z.array(z.string()).describe('An array of required skills for the career path.'),
  courses: z.array(z.string()).describe('An array of courses required for the career path.'),
  careerRoadmap: z
    .string()
    .describe('The career roadmap, including education, internships, and job roles.'),
  averageSalary: SalarySchema.describe('An object containing salary ranges for different experience levels in Indian Rupees (INR), formatted as "₹X-Y LPA".'),
  futureScope: z.string().describe('The future scope of the career path.'),
});
export type GenerateCareerReportOutput = z.infer<typeof GenerateCareerReportOutputSchema>;

export async function generateCareerReport(
  input: GenerateCareerReportInput
): Promise<GenerateCareerReportOutput> {
  return generateCareerReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCareerReportPrompt',
  input: {schema: GenerateCareerReportInputSchema},
  prompt: `You are an expert career counselor for students in India. Generate a detailed career report for the career path: {{{careerPath}}}. The user has the following interests: {{{interests}}}. Include the following sections:

Description: A short description of the career path.
Required Skills: The required skills for the career path.
Courses: The courses required for the career path.
Career Roadmap: The career roadmap, including education, internships, and job roles.
Average Salary: The average salary for the career path in Indian Rupees (INR).
Future Scope: The future scope of the career path.

**CRITICAL FORMATTING RULES**:
- The "requiredSkills" and "courses" fields MUST be JSON arrays of strings.
- The "careerRoadmap" field MUST be a single string formatted with markdown for readability.
- The "averageSalary" field MUST be a JSON object with three keys: "fresher", "midLevel", and "senior". Each key should have a string value formatted as "₹X-Y LPA" (e.g., "₹8-12 LPA").

Return your response as a single JSON object with keys: "description", "requiredSkills", "courses", "careerRoadmap", "averageSalary", "futureScope".
`,
});

const generateCareerReportFlow = ai.defineFlow(
  {
    name: 'generateCareerReportFlow',
    inputSchema: GenerateCareerReportInputSchema,
    outputSchema: GenerateCareerReportOutputSchema,
  },
  async (input) => {
    const maxRetries = 3;
    let attempt = 0;
    let delay = 1000; // start with 1 second

    while (attempt < maxRetries) {
      try {
        const response = await prompt(input);
        
        const rawText = response.text;
        const jsonMatch = rawText.match(/```json\n([\s\S]*?)\n```/);
        const jsonString = jsonMatch ? jsonMatch[1] : rawText;

        const parsedOutput = JSON.parse(jsonString);
        return GenerateCareerReportOutputSchema.parse(parsedOutput);

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
    throw new Error('Failed to generate career report after multiple retries.');
  }
);
