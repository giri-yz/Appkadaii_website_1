'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  AppRecommendationsOutput,
  getAppRecommendationsAction,
} from '@/app/recommendations/actions';
import { SectionHeading } from './section-heading';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket } from 'lucide-react';
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
          title="AI Recommendations"
          subtitle={`Based on your goal: "${goals}"`}
        />

        {loading ? (
           <div className="mt-12 grid gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card">
                <CardHeader>
                  <Skeleton className="h-8 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-4/5" />
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-8">
            {recommendations?.recommendations.map((rec, index) => (
              <Card
                key={index}
                className="bg-card border-border transition-all duration-300 hover:border-primary hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)]"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl font-bold text-white">
                      {rec.optionName}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {rec.reasoning}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {rec.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="border-primary/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
