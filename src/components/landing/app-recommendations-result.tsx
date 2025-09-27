'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  getAppRecommendationsAction,
  AppRecommendationsOutput,
} from '@/app/recommendations/actions';
import { SectionHeading } from './section-heading';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lightbulb } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

export function AppRecommendationsResult() {
  const searchParams = useSearchParams();
  const goals = searchParams.get('goals');
  const [recommendations, setRecommendations] =
    useState<AppRecommendationsOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (goals) {
      getAppRecommendationsAction({ userGoals: goals }).then((result) => {
        setRecommendations(result);
        setLoading(false);
      });
    }
  }, [goals]);

  return (
    <section id="result" className="py-16 px-8">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          title="AI-Generated App Concept"
          subtitle={`Based on your idea: "${goals}"`}
        />

        {loading ? (
          <div className="mt-12 space-y-8">
            <Card className="bg-card">
              <CardHeader>
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </CardHeader>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <Skeleton className="h-6 w-1/3 mb-4" />
              </CardHeader>
              <CardContent className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-5 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </CardContent>
            </Card>
             <Card className="bg-card">
              <CardHeader>
                <Skeleton className="h-6 w-1/4 mb-2" />
              </CardHeader>
              <CardContent>
                 <Skeleton className="h-4 w-full mb-2" />
                 <Skeleton className="h-4 w-4/5 mb-4" />
                 <Skeleton className="h-10 w-1/3" />
              </CardContent>
            </Card>
          </div>
        ) : (
          recommendations && (
            <div className="mt-12 space-y-8">
              <Card className="bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)]">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">
                    {recommendations.suggestedAppName}
                  </CardTitle>
                  <CardDescription className="text-lg text-[rgba(255,255,255,0.8)] pt-2">
                    {recommendations.appSummary}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl font-bold text-white">
                      Suggested Features
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {recommendations.suggestedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg text-white">
                          {feature.featureName}
                        </h4>
                        <p className="text-[rgba(255,255,255,0.8)]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="text-center bg-gradient-to-br from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)] p-8">
                 <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Ready to build?</CardTitle>
                 </CardHeader>
                 <CardContent>

                  <p className="text-lg text-[rgba(255,255,255,0.9)] mb-6 max-w-2xl mx-auto">
                    {recommendations.nextStep}
                  </p>
                  <Button asChild className="cta-btn cta-primary">
                    <a href="/contact">Let's Talk</a>
                  </Button>
                 </CardContent>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
}
