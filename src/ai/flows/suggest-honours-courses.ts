
'use server';

/**
 * @fileOverview An AI-powered advisor for suggesting B.Tech Honours courses.
 * 
 * - suggestHonoursCourses - A function that suggests courses based on student input.
 * - SuggestHonoursCoursesInput - The input type for the function.
 * - HonoursCourseSuggestion - The output type for each suggested course.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { honoursCourses } from '@/lib/honours-courses-data';

const SuggestHonoursCoursesInputSchema = z.object({
  stream: z.string().describe('The student\'s primary engineering stream (e.g., Computer Science & Engineering).'),
  creditBudget: z.number().describe('The total number of credits the student wants to take.'),
  interests: z.string().describe('A free-text description of the student\'s interests, passions, and career goals.'),
});
export type SuggestHonoursCoursesInput = z.infer<typeof SuggestHonoursCoursesInputSchema>;

const HonoursCourseSuggestionSchema = z.object({
  title: z.string().describe('The title of the suggested course.'),
  description: z.string().describe('A short, compelling reason why this course is a good fit for the student.'),
  credits: z.number().describe('The credit value of the course.'),
});
export type HonoursCourseSuggestion = z.infer<typeof HonoursCourseSuggestionSchema>;

const SuggestHonoursCoursesOutputSchema = z.array(HonoursCourseSuggestionSchema);
export type SuggestHonoursCoursesOutput = z.infer<typeof SuggestHonoursCoursesOutputSchema>;

export async function suggestHonoursCourses(input: SuggestHonoursCoursesInput): Promise<SuggestHonoursCoursesOutput> {
  return suggestHonoursCoursesFlow(input);
}

const PromptInputSchema = z.object({
    stream: z.string(),
    creditBudget: z.number(),
    interests: z.string(),
    courseData: z.string(),
});

const prompt = ai.definePrompt(
  {
    name: 'suggestHonoursCoursesPrompt',
    input: { schema: PromptInputSchema },
    output: { schema: SuggestHonoursCoursesOutputSchema },
    prompt: `You are an expert academic advisor for B.Tech students in India. Your task is to recommend a set of Honours courses.

    Student Details:
    - Stream: {{{stream}}}
    - Credit Budget: {{{creditBudget}}}
    - Interests: {{{interests}}}
    
    Available Courses (JSON format):
    {{{courseData}}}

    Based on the student's stream and interests, select a combination of 3-5 relevant courses from the provided list. The total credits for your suggested courses should ideally be close to, but not exceed, the student's credit budget. For each recommendation, provide a compelling, one-sentence description explaining WHY it's a good fit for the student's specific interests.
    `,
  },
);

const suggestHonoursCoursesFlow = ai.defineFlow(
  {
    name: 'suggestHonoursCoursesFlow',
    inputSchema: SuggestHonoursCoursesInputSchema,
    outputSchema: SuggestHonoursCoursesOutputSchema,
  },
  async ({ stream, creditBudget, interests }) => {

    const relevantCourses = honoursCourses.filter(c => c.stream === stream);
    
    const courseDataForPrompt = relevantCourses.map(c => ({ 
        title: c.title, 
        description: c.description, 
        credits: c.credits
    }));

    const { output } = await prompt({
        stream,
        creditBudget,
        interests,
        courseData: JSON.stringify(courseDataForPrompt),
    });

    return output ?? [];
  }
);
