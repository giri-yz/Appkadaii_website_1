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

const AppRecommendationsOutputSchema = z.object({
  suggestedAppName: z.string().describe("A creative and catchy name for the app concept."),
  appSummary: z.string().describe("A brief, engaging summary of the core app concept and its value proposition."),
  suggestedFeatures: z.array(z.object({
    featureName: z.string().describe("The name of the feature."),
    description: z.string().describe("A user-focused description of what the feature does and why it's valuable."),
  })).describe("A list of key features that would make the app successful."),
  nextStep: z.string().describe("A concluding paragraph encouraging the user to contact 'App kadaii' to discuss building the app with these features."),
});


export type AppRecommendationsOutput = z.infer<typeof AppRecommendationsOutputSchema>;

export async function getAppRecommendations(input: AppRecommendationsInput): Promise<AppRecommendationsOutput> {
  return appRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'appRecommendationPrompt',
  input: {schema: AppRecommendationsInputSchema},
  output: {schema: AppRecommendationsOutputSchema},
  prompt: `You are a creative product strategist for a software development agency called "App kadaii". A potential client has submitted their app idea. Your goal is to get them excited about their idea and encourage them to work with your company.

Instead of providing technical details, you will brainstorm high-level product features for their app.

Your response must conform to the JSON schema, and should be engaging, creative, and customer-focused.

- Give the app a creative name.
- Write a short, exciting summary of the app concept.
- Suggest 3-4 key features, explaining what they do from a user's perspective.
- End with a strong "Next Step" that tells the user to contact "App kadaii" to bring their vision to life.

User's Idea: {{{userGoals}}}`,
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
