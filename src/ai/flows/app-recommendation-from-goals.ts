// 'use server'
'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing AI-powered app development recommendations based on user goals.
 *
 * - `getAppRecommendations` -  A function that takes user goals as input and returns AI-powered app development recommendations.
 * - `AppRecommendationsInput` - The input type for the `getAppRecommendations` function, representing the user's stated goals.
 * - `AppRecommendationsOutput` - The output type for the `getAppRecommendations` function, providing a list of app development recommendations with tools and reasoning.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AppRecommendationsInputSchema = z.object({
  userGoals: z
    .string()
    .describe("The user's stated goals for their application development project."),
});
export type AppRecommendationsInput = z.infer<typeof AppRecommendationsInputSchema>;

const AppRecommendationSchema = z.object({
  optionName: z.string().describe('The name of the app development option.'),
  tools: z.array(z.string()).describe('A list of specific development tools needed for this option.'),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind recommending these tools, including their benefits and how they help achieve the user goals.'
    ),
});

const AppRecommendationsOutputSchema = z.object({
  recommendations: z.array(AppRecommendationSchema).describe('A list of app development recommendations.'),
});

export type AppRecommendationsOutput = z.infer<typeof AppRecommendationsOutputSchema>;

export async function getAppRecommendations(input: AppRecommendationsInput): Promise<AppRecommendationsOutput> {
  return appRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'appRecommendationPrompt',
  input: {schema: AppRecommendationsInputSchema},
  output: {schema: AppRecommendationsOutputSchema},
  prompt: `You are an AI-powered app development expert. A user will provide their goals for an app development project, and you will provide a list of app development options with the specific development tools they need and the reasoning behind them.  The response must conform to the JSON schema {{$outputSchema}}.

User Goals: {{{userGoals}}}`,
});

const appRecommendationFlow = ai.defineFlow(
  {
    name: 'appRecommendationFlow',
    inputSchema: AppRecommendationsInputSchema,
    outputSchema: AppRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
