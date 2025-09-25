'use server';

import {
  generateCodeSnippetsWithExplanation,
  type GenerateCodeSnippetsWithExplanationInput,
  type GenerateCodeSnippetsWithExplanationOutput,
} from '@/ai/flows/generate-code-snippets-with-explanation';

export async function generateCodeSnippetsAction(
  input: GenerateCodeSnippetsWithExplanationInput
): Promise<GenerateCodeSnippetsWithExplanationOutput> {
  return await generateCodeSnippetsWithExplanation(input);
}
