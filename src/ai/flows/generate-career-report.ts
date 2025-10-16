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

const GenerateCareerReportOutputSchema = z.object({
  description: z.string().describe('A short description of the career path.'),
  requiredSkills: z.string().describe('The required skills for the career path.'),
  courses: z.string().describe('The courses required for the career path.'),
  careerRoadmap: z
    .string()
    .describe('The career roadmap, including education, internships, and job roles.'),
  averageSalary: z.string().describe('The average salary for the career path.'),
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
  output: {schema: GenerateCareerReportOutputSchema},
  prompt: `You are an expert career counselor. Generate a detailed career report for the career path: {{{careerPath}}}. The user has the following interests: {{{interests}}}. Include the following sections:

Description: A short description of the career path.
Required Skills: The required skills for the career path.
Courses: The courses required for the career path.
Career Roadmap: The career roadmap, including education, internships, and job roles.
Average Salary: The average salary for the career path.
Future Scope: The future scope of the career path.

Format each section clearly and concisely.
`,
});

const generateCareerReportFlow = ai.defineFlow(
  {
    name: 'generateCareerReportFlow',
    inputSchema: GenerateCareerReportInputSchema,
    outputSchema: GenerateCareerReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
