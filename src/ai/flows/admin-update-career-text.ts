'use server';

/**
 * @fileOverview An AI agent for updating career text descriptions.
 *
 * - updateCareerText - A function that updates the career text descriptions.
 * - UpdateCareerTextInput - The input type for the updateCareerText function.
 * - UpdateCareerTextOutput - The return type for the updateCareerText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const UpdateCareerTextInputSchema = z.object({
  careerName: z.string().describe('The name of the career to update.'),
  currentDescription: z.string().describe('The current description of the career.'),
});
export type UpdateCareerTextInput = z.infer<typeof UpdateCareerTextInputSchema>;

const UpdateCareerTextOutputSchema = z.object({
  updatedDescription: z.string().describe('The updated description of the career.'),
});
export type UpdateCareerTextOutput = z.infer<typeof UpdateCareerTextOutputSchema>;

export async function updateCareerText(input: UpdateCareerTextInput): Promise<UpdateCareerTextOutput> {
  return updateCareerTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'updateCareerTextPrompt',
  input: {schema: UpdateCareerTextInputSchema},
  output: {schema: UpdateCareerTextOutputSchema},
  prompt: `You are an expert career counselor. Your task is to improve the description of a given career.

Career Name: {{{careerName}}}

Current Description: {{{currentDescription}}}

Revised Description:`, // Removed triple curly braces
});

const updateCareerTextFlow = ai.defineFlow(
  {
    name: 'updateCareerTextFlow',
    inputSchema: UpdateCareerTextInputSchema,
    outputSchema: UpdateCareerTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
