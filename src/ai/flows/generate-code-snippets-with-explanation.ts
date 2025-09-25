'use server';
/**
 * @fileOverview An AI assistant that generates code snippets for common app features,
 *  along with explanations of potential drawbacks and better-performing alternatives.
 *
 * - generateCodeSnippetsWithExplanation - A function that handles the code snippet generation process.
 * - GenerateCodeSnippetsWithExplanationInput - The input type for the generateCodeSnippetsWithExplanation function.
 * - GenerateCodeSnippetsWithExplanationOutput - The return type for the generateCodeSnippetsWithExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCodeSnippetsWithExplanationInputSchema = z.object({
  featureDescription: z
    .string()
    .describe('The description of the app feature for which code snippet is needed.'),
  programmingLanguage: z
    .string()
    .describe('The programming language for the code snippet, e.g., JavaScript, Python, etc.'),
});
export type GenerateCodeSnippetsWithExplanationInput = z.infer<typeof GenerateCodeSnippetsWithExplanationInputSchema>;

const GenerateCodeSnippetsWithExplanationOutputSchema = z.object({
  codeSnippet: z.string().describe('The generated code snippet for the described feature.'),
  explanation: z.string().describe('Explanation of the code snippet, including potential drawbacks.'),
  alternatives: z.string().describe('Better-performing alternatives to the generated code snippet.'),
});
export type GenerateCodeSnippetsWithExplanationOutput = z.infer<typeof GenerateCodeSnippetsWithExplanationOutputSchema>;

export async function generateCodeSnippetsWithExplanation(
  input: GenerateCodeSnippetsWithExplanationInput
): Promise<GenerateCodeSnippetsWithExplanationOutput> {
  return generateCodeSnippetsWithExplanationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCodeSnippetsWithExplanationPrompt',
  input: {schema: GenerateCodeSnippetsWithExplanationInputSchema},
  output: {schema: GenerateCodeSnippetsWithExplanationOutputSchema},
  prompt: `You are an AI assistant that generates code snippets for common app features.

  Given the description of the app feature and the programming language, generate a code snippet for it.
  Also, provide an explanation of the code snippet, including potential drawbacks.
  Finally, suggest better-performing alternatives to the generated code snippet.

  Feature Description: {{{featureDescription}}}
  Programming Language: {{{programmingLanguage}}}
  `,
});

const generateCodeSnippetsWithExplanationFlow = ai.defineFlow(
  {
    name: 'generateCodeSnippetsWithExplanationFlow',
    inputSchema: GenerateCodeSnippetsWithExplanationInputSchema,
    outputSchema: GenerateCodeSnippetsWithExplanationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
