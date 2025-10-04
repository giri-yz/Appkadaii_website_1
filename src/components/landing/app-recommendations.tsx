'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AppRecommendations() {
  const [userGoals, setUserGoals] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userGoals.trim() || isLoading) return;
    setIsLoading(true);
    router.push(`/recommendations?goals=${encodeURIComponent(userGoals)}`);
  };

  return (
    <section id="recommendations" className="py-16 px-8">
      <div className="container max-w-4xl mx-auto">
        <Card className="bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <BrainCircuit className="w-10 h-10 text-primary" />
              <CardTitle className="text-3xl font-bold text-white">
                Get AI-Powered App Recommendations
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-[rgba(255,255,255,0.8)] mb-6">
              Describe your business idea or app concept, and our AI will
              generate a list of features and technologies to get you started.
            </p>
            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="e.g., A social networking app for chefs to share recipes and techniques"
                value={userGoals}
                onChange={(e) => setUserGoals(e.target.value)}
                className="mb-4 bg-transparent text-white"
                rows={4}
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="cta-btn cta-primary w-full"
                disabled={isLoading || !userGoals.trim()}
              >
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isLoading ? 'Generating...' : 'Generate Ideas'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
