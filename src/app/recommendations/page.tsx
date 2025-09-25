'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { AppRecommendationsOutput } from '@/ai/flows/app-recommendation-from-goals';
import { getAppRecommendationsAction } from './actions';
import { PageHeader } from '@/components/page-header';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
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
import { Badge } from '@/components/ui/badge';
import { Bot, Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  userGoals: z
    .string()
    .min(10, 'Please describe your goals in at least 10 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] =
    useState<AppRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userGoals: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await getAppRecommendationsAction(values);
      setRecommendations(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description:
          'Failed to get recommendations. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex-1 overflow-auto p-4 md:p-8">
      <PageHeader
        title="AI App Recommendations"
        description="Describe your project goals, and our AI will suggest the best development stacks for you."
      />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Your Project Goals</CardTitle>
              <CardDescription>
                What do you want to build? Be as descriptive as possible.
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
                    name="userGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'A social media app for pet owners with a photo feed and event scheduling...'"
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
                    Generate Recommendations
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
                  Our AI is thinking...
                </p>
              </div>
            </div>
          )}

          {!isLoading && !recommendations && (
            <div className="flex h-full items-center justify-center rounded-lg border border-dashed">
              <div className="text-center">
                <Bot className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">
                  Your recommendations will appear here.
                </p>
              </div>
            </div>
          )}

          {recommendations && (
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold">
                Our Suggestions
              </h2>
              {recommendations.recommendations.map((rec, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{rec.optionName}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {rec.tools.map((tool) => (
                        <Badge key={tool} variant="secondary">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="mb-2 font-semibold">Reasoning</h3>
                    <p className="text-sm text-muted-foreground">
                      {rec.reasoning}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
