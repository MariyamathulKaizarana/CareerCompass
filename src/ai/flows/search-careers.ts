'use server';

/**
 * @fileOverview An AI-powered search flow for careers.
 *
 * - searchCareers - A function that searches for careers based on a query.
 * - SearchCareersInput - The input type for the searchCareers function.
 * - SearchCareersOutput - The return type for the searchCareers function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { careers } from '@/lib/career-data';

const SearchResultSchema = z.object({
  type: z.enum(['Career', 'Course', 'Exam']).describe('The type of search result.'),
  title: z.string().describe('The title of the search result.'),
  slug: z.string().describe('The URL slug for the result.'),
  context: z.string().describe('A brief, relevant context for the search result.'),
});

const SearchCareersInputSchema = z.object({
  query: z.string().describe('The user\'s search query.'),
});
export type SearchCareersInput = z.infer<typeof SearchCareersInputSchema>;

const SearchCareersOutputSchema = z.array(SearchResultSchema);
export type SearchCareersOutput = z.infer<typeof SearchCareersOutputSchema>;

export async function searchCareers(input: SearchCareersInput): Promise<SearchCareersOutput> {
  return searchCareersFlow(input);
}

const allCourses = [...new Set(careers.flatMap((c) => c.courses))];
const allExams = [...new Set(careers.flatMap(c => c.exams || []))];

const PromptInputSchema = z.object({
    query: z.string(),
    careerData: z.string(),
    courseData: z.string(),
    examData: z.string(),
});

const prompt = ai.definePrompt(
  {
    name: 'searchCareersPrompt',
    input: { schema: PromptInputSchema },
    output: { schema: SearchCareersOutputSchema },
    prompt: `You are a career search engine assistant. Your task is to search through the provided career, course, and exam data to find relevant results for the user's query.

    Return up to 10 results. Prioritize careers, but include courses and exams if they are a strong match.

    User Query: {{{query}}}

    Available Careers (JSON):
    {{{careerData}}}

    Available Courses (JSON):
    {{{courseData}}}

    Available Exams (JSON):
    {{{examData}}}

    For each result, provide the type, title, slug, and a short context.
    - For careers, the context should be the career description.
    - For courses, the slug is always '/courses' and the context is 'Recommended for various careers.'.
    - For exams, the slug is always '/careers' and the context is 'Competitive entrance exam.'.
    `,
  },
);

const searchCareersFlow = ai.defineFlow(
  {
    name: 'searchCareersFlow',
    inputSchema: SearchCareersInputSchema,
    outputSchema: SearchCareersOutputSchema,
  },
  async ({ query }) => {

    const careerDataForPrompt = careers.map(c => ({ 
        title: c.title, 
        description: c.description, 
        skills: c.skills,
        slug: `/careers/${c.slug}`
    }));
    
    const maxRetries = 3;
    let attempt = 0;
    let delay = 1000; // start with 1 second

    while (attempt < maxRetries) {
        try {
            const { output } = await prompt({
                query,
                careerData: JSON.stringify(careerDataForPrompt),
                courseData: JSON.stringify(allCourses),
                examData: JSON.stringify(allExams),
            });
            return output ?? [];
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
    throw new Error('Failed to get search results after multiple retries.');
  }
);
