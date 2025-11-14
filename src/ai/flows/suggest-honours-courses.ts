
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
    interests: z.string(),
    courseData: z.string(),
});

const prompt = ai.definePrompt(
  {
    name: 'suggestHonoursCoursesPrompt',
    input: { schema: PromptInputSchema },
    output: { schema: SuggestHonoursCoursesOutputSchema },
    prompt: `You are an expert academic advisor for B.Tech students in India. Your task is to recommend a set of Honours courses.

    Important Rule: The course must not be a subject already covered or forming part of the student's regular B.E./B.Tech. curriculum. If there is a similar course, the Honours version must be at a higher academic level than the one in their core degree.

    The credit system is as follows: 4-week courses are 1 credit, 8-week courses are 2 credits, and 12-week courses are 3 credits.

    Student Details:
    - Stream: {{{stream}}}
    - Interests in specialized areas: {{{interests}}}
    
    Available Courses (JSON format):
    {{{courseData}}}

    Based on the student's stream and their selected interest areas, select a combination of around 8-10 relevant courses from the provided list. The student will choose from your suggestions. For each recommendation, provide a compelling, one-sentence description explaining WHY it's a good fit for the student's specific interests.
    `,
  },
);

const suggestHonoursCoursesFlow = ai.defineFlow(
  {
    name: 'suggestHonoursCoursesFlow',
    inputSchema: SuggestHonoursCoursesInputSchema,
    outputSchema: SuggestHonoursCoursesOutputSchema,
  },
  async ({ stream, interests }) => {
    // Filter courses based on the provided interest streams, which are more specific now.
    const interestList = interests.split(',').map(i => i.trim());
    const relevantCourses = honoursCourses.filter(c => interestList.includes(c.stream));
    
    const courseDataForPrompt = relevantCourses.map(c => ({ 
        title: c.title, 
        description: c.description, 
        credits: c.credits,
        weeks: c.weeks,
    }));

    const maxRetries = 3;
    let attempt = 0;
    let delay = 1000;

    while (attempt < maxRetries) {
      try {
        const { output } = await prompt({
            stream,
            interests,
            courseData: JSON.stringify(courseDataForPrompt),
        });
        return output ?? [];
      } catch (error: any) {
        if (error.message.includes('503') && attempt < maxRetries - 1) {
          console.warn(`Attempt ${attempt + 1} failed with 503 error. Retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2; // exponential backoff
          attempt++;
        } else {
          console.error(`Failed after ${attempt + 1} attempts.`);
          throw error;
        }
      }
    }
    
    // This should not be reached if the loop exits successfully
    throw new Error('Failed to get course suggestions after multiple retries.');
  }
);
