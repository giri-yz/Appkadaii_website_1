'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAppRecommendationsAction } from '@/app/recommendations/actions';
import type { AppRecommendationsOutput } from '@/ai/flows/app-recommendation-from-goals';
import { SectionHeading } from './section-heading';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lightbulb, BrainCircuit } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

function RecommendationsLoading() {
  return (
    <div className="mt-12 text-center">
      <div className="flex justify-center items-center gap-4 mb-8">
        <BrainCircuit className="w-12 h-12 text-primary animate-pulse" />
        <h3 className="text-2xl font-semibold text-foreground">
          Our AI is crafting your app concept...
        </h3>
      </div>
      <p className="text-lg text-muted-foreground mb-12">
        This can take a few seconds. Great ideas take time!
      </p>
      <div className="space-y-8 animate-pulse">
        <Card className="bg-card">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 mb-2 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5 mx-auto" />
          </CardHeader>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <Skeleton className="h-6 w-1/3 mb-4" />
          </CardHeader>
          <CardContent className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4">
                <Skeleton className="h-6 w-6 rounded-full" />
                <div className="w-full space-y-2">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function AppRecommendationsResult() {
  const searchParams = useSearchParams();
  const goals = searchParams.get('goals');
  const [recommendations, setRecommendations] =
    useState<AppRecommendationsOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (goals) {
      setLoading(true);
      getAppRecommendationsAction({ userGoals: goals }).then((result) => {
        setRecommendations(result);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [goals]);

  return (
    <section id="result" className="py-16 px-8">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          title="AI-Generated App Concept"
          subtitle={goals ? `Based on your idea: "${goals}"` : 'Your AI concept will appear here.'}
        />

        {loading ? (
          <RecommendationsLoading />
        ) : recommendations ? (
          <div className="mt-12 space-y-8 animate-in fade-in-50 duration-500">
            <Card className="bg-card/50 border border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  {recommendations.suggestedAppName}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                  {recommendations.appSummary}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Suggested Features
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {recommendations.suggestedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">
                        {feature.featureName}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Ready to build?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/90 mb-6 max-w-2xl mx-auto">
                  {recommendations.nextStep}
                </p>
                <Button asChild className="cta-btn cta-primary">
                  <a href="/contact">Let's Talk</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">No idea submitted. Go back to the homepage to get your AI-powered app recommendations!</p>
          </div>
        )}
      </div>
    </section>
  );
}
