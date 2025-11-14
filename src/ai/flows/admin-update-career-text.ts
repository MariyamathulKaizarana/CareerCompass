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
  prompt: `You are an expert career counselor. Your task is to improve the description of a given career. The description should be engaging, concise, and give a clear overview of the role.

Career Name: {{{careerName}}}

Current Description: {{{currentDescription}}}

Rewrite the description to be more professional and appealing to students exploring career options.

Return your response as a JSON object with the key "updatedDescription".
`,
});

const updateCareerTextFlow = ai.defineFlow(
  {
    name: 'updateCareerTextFlow',
    inputSchema: UpdateCareerTextInputSchema,
    outputSchema: UpdateCareerTextOutputSchema,
  },
  async input => {
    const response = await prompt(input);
    const rawText = response.text;
    
    // Sometimes the model returns markdown with the JSON. We need to extract the JSON.
    const jsonMatch = rawText.match(/```json\n([\s\S]*?)\n```/);
    const jsonString = jsonMatch ? jsonMatch[1] : rawText;

    try {
        const parsedOutput = JSON.parse(jsonString);
        return UpdateCareerTextOutputSchema.parse(parsedOutput);
    } catch (e) {
        console.error("Failed to parse AI output:", e);
        throw new Error("AI returned an invalid format.");
    }
  }
);
