'use server';

import {
  getAppRecommendations,
  type AppRecommendationsInput,
  type AppRecommendationsOutput,
} from '@/ai/flows/app-recommendation-from-goals';

export async function getAppRecommendationsAction(
  input: AppRecommendationsInput
): Promise<AppRecommendationsOutput> {
  return await getAppRecommendations(input);
}
