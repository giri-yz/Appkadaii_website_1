import { CodeBlock } from '@/components/code-block';
import { PageHeader } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const appRecInput = `{
  "userGoals": "A social media app for pet owners with a photo feed and event scheduling."
}`;
const appRecOutput = `{
  "recommendations": [
    {
      "optionName": "Mobile-First with React Native & Firebase",
      "tools": ["React Native", "Expo", "Firebase (Auth, Firestore, Storage)", "Genkit AI"],
      "reasoning": "Excellent for cross-platform development (iOS/Android) from a single codebase. Firebase provides a scalable backend for user management, database, and file storage. Genkit can power AI features like a pet-friendly location finder."
    }
  ]
}`;

const snippetInput = `{
  "featureDescription": "A function to fetch data from an API and handle errors",
  "programmingLanguage": "TypeScript"
}`;
const snippetOutput = `{
  "codeSnippet": "async function fetchData(url) { ... }",
  "explanation": "This function uses the 'fetch' API to make a network request...",
  "alternatives": "For more complex scenarios, consider using libraries like 'axios' which offers features like request cancellation and automatic JSON parsing."
}`;

export default function ApiDocsPage() {
  return (
    <main className="flex-1 overflow-auto p-4 md:p-8">
      <PageHeader
        title="API Documentation"
        description="Integrate our AI capabilities directly into your projects."
      />
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>App Recommendations Flow</CardTitle>
                <CardDescription className="mt-1">
                  getAppRecommendations(input: AppRecommendationsInput)
                </CardDescription>
              </div>
              <Badge variant="outline">POST</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This flow takes a description of user goals and returns a list of
              recommended development stacks, including tools and reasoning.
            </p>
            <div>
              <h3 className="mb-2 font-semibold">Example Request:</h3>
              <CodeBlock code={appRecInput} />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Example Response:</h3>
              <CodeBlock code={appRecOutput} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Code Snippet Flow</CardTitle>
                <CardDescription className="mt-1">
                  generateCodeSnippetsWithExplanation(input:
                  GenerateCodeSnippetsWithExplanationInput)
                </CardDescription>
              </div>
              <Badge variant="outline">POST</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This flow generates a code snippet for a given feature description
              and programming language. It also provides an explanation and suggests
              better-performing alternatives.
            </p>
            <div>
              <h3 className="mb-2 font-semibold">Example Request:</h3>
              <CodeBlock code={snippetInput} />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Example Response:</h3>
              <CodeBlock code={snippetOutput} />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
