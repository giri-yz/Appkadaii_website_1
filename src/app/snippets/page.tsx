'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { GenerateCodeSnippetsWithExplanationOutput } from '@/ai/flows/generate-code-snippets-with-explanation';
import { generateCodeSnippetsAction } from './actions';
import { PageHeader } from '@/components/page-header';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, Wand2, FileCode2, Info, GitBranch } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/code-block';

const formSchema = z.object({
  featureDescription: z
    .string()
    .min(10, 'Please describe the feature in at least 10 characters.'),
  programmingLanguage: z.string().min(1, 'Please select a language.'),
});

type FormValues = z.infer<typeof formSchema>;

const languages = ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'Rust'];

export default function SnippetsPage() {
  const [result, setResult] =
    useState<GenerateCodeSnippetsWithExplanationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      featureDescription: '',
      programmingLanguage: 'TypeScript',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await generateCodeSnippetsAction(values);
      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description:
          'Failed to generate code snippet. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex-1 overflow-auto p-4 md:p-8">
      <PageHeader
        title="AI Code Snippets"
        description="Describe a feature, and our AI will write the code, explain it, and suggest alternatives."
      />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Feature Details</CardTitle>
              <CardDescription>
                What code do you need help with?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="programmingLanguage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Language</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a language" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {languages.map((lang) => (
                              <SelectItem key={lang} value={lang}>
                                {lang}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="featureDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Feature Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'A function to fetch data from an API and handle errors...'"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Generate Snippet
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          {isLoading && (
            <div className="flex h-full items-center justify-center rounded-lg border border-dashed">
              <div className="text-center">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                <p className="mt-4 text-muted-foreground">
                  AI is writing your code...
                </p>
              </div>
            </div>
          )}

          {!isLoading && !result && (
            <div className="flex h-full items-center justify-center rounded-lg border border-dashed">
              <div className="text-center">
                <FileCode2 className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">
                  Your generated code will appear here.
                </p>
              </div>
            </div>
          )}

          {result && (
            <Tabs defaultValue="snippet">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="snippet"><FileCode2 className="mr-2 h-4 w-4"/>Snippet</TabsTrigger>
                <TabsTrigger value="explanation"><Info className="mr-2 h-4 w-4"/>Explanation</TabsTrigger>
                <TabsTrigger value="alternatives"><GitBranch className="mr-2 h-4 w-4"/>Alternatives</TabsTrigger>
              </TabsList>
              <TabsContent value="snippet" className="mt-4">
                <CodeBlock code={result.codeSnippet} />
              </TabsContent>
              <TabsContent value="explanation" className="mt-4">
                <Card>
                  <CardContent className="prose prose-sm dark:prose-invert max-w-none p-6 text-sm">
                    <p>{result.explanation}</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="alternatives" className="mt-4">
                <Card>
                   <CardContent className="prose prose-sm dark:prose-invert max-w-none p-6 text-sm">
                    <p>{result.alternatives}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </main>
  );
}
