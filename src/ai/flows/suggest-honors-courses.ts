
'use server';

/**
 * @fileOverview An AI-powered advisor for suggesting B.Tech Honors courses.
 * 
 * - suggestHonorsCourses - A function that suggests courses based on student input.
 * - SuggestHonorsCoursesInput - The input type for the function.
 * - HonorsCourseSuggestion - The output type for each suggested course.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { honorsCourses } from '@/lib/honors-courses-data';

const SuggestHonorsCoursesInputSchema = z.object({
  stream: z.string().describe('The student\'s primary engineering stream (e.g., Computer Science & Engineering).'),
  interests: z.string().describe('A free-text description of the student\'s interests, passions, and career goals.'),
});
export type SuggestHonorsCoursesInput = z.infer<typeof SuggestHonorsCoursesInputSchema>;

const HonorsCourseSuggestionSchema = z.object({
  title: z.string().describe('The title of the suggested course.'),
  description: z.string().describe('A short, compelling reason why this course is a good fit for the student.'),
  credits: z.number().describe('The credit value of the course.'),
});
export type HonorsCourseSuggestion = z.infer<typeof HonorsCourseSuggestionSchema>;

const SuggestHonorsCoursesOutputSchema = z.array(HonorsCourseSuggestionSchema);
export type SuggestHonorsCoursesOutput = z.infer<typeof SuggestHonorsCoursesOutputSchema>;

export async function suggestHonorsCourses(input: SuggestHonorsCoursesInput): Promise<SuggestHonorsCoursesOutput> {
  return suggestHonorsCoursesFlow(input);
}

const PromptInputSchema = z.object({
    stream: z.string(),
    interests: z.string(),
    courseData: z.string(),
});

const prompt = ai.definePrompt(
  {
    name: 'suggestHonorsCoursesPrompt',
    input: { schema: PromptInputSchema },
    prompt: `You are an expert academic advisor for B.Tech students in India. Your task is to recommend a set of Honors courses.

    Important Rule: The course must not be a subject already covered or forming part of the student's regular B.E./B.Tech. curriculum. If there is a similar course, the Honors version must be at a higher academic level than the one in their core degree.

    The credit system is as follows: 4-week courses are 1 credit, 8-week courses are 2 credits, and 12-week courses are 3 credits.

    Student Details:
    - Stream: {{{stream}}}
    - Interests in specialized areas: {{{interests}}}
    
    Available Courses (JSON format):
    {{{courseData}}}

    Based on the student's stream and their selected interest areas, select a combination of around 8-10 relevant courses from the provided list. The student will choose from your suggestions. For each recommendation, provide a compelling, one-sentence description explaining WHY it's a good fit for the student's specific interests.
    
    Return your response as a JSON array of course suggestions. Each object in the array MUST include "title", "description", and "credits".
    `,
  },
);

const suggestHonorsCoursesFlow = ai.defineFlow(
  {
    name: 'suggestHonorsCoursesFlow',
    inputSchema: SuggestHonorsCoursesInputSchema,
    outputSchema: SuggestHonorsCoursesOutputSchema,
  },
  async ({ stream, interests }) => {
    // Filter courses based on the provided interest streams, which are more specific now.
    const interestList = interests.split(',').map(i => i.trim());
    const relevantCourses = honorsCourses.filter(c => interestList.includes(c.stream));
    
    const courseDataForPrompt = relevantCourses.map(c => ({ 
        title: c.title, 
        description: c.description, 
        credits: c.credits,
        weeks: c.weeks,
    }));

    const maxRetries = 3;
    let attempt = 0;
    let delay = 500;

    while (attempt < maxRetries) {
      try {
        const response = await prompt({
            stream,
            interests,
            courseData: JSON.stringify(courseDataForPrompt),
        });

        const rawText = response.text;
        const jsonMatch = rawText.match(/```json\n([\s\S]*?)\n```/);
        const jsonString = jsonMatch ? jsonMatch[1] : rawText;

        if (!jsonString) {
          return [];
        }

        const parsedOutput = JSON.parse(jsonString);
        return SuggestHonorsCoursesOutputSchema.parse(parsedOutput);

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
