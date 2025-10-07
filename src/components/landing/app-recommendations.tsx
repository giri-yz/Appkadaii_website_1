'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const COOLDOWN_SECONDS = 60;

export function AppRecommendations() {
  const [userGoals, setUserGoals] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => {
        setCooldown(cooldown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userGoals.trim() || isLoading || cooldown > 0) return;
    setIsLoading(true);
    setCooldown(COOLDOWN_SECONDS); // Start cooldown
    router.push(`/recommendations?goals=${encodeURIComponent(userGoals)}`);
    // Note: We don't reset isLoading here as the user is navigated away.
    // If they come back, the cooldown will be in effect.
  };

  const isButtonDisabled = isLoading || !userGoals.trim() || cooldown > 0;

  return (
    <section id="recommendations" className="py-16 px-8">
      <div className="container max-w-4xl mx-auto">
        <Card className="bg-card/50 border border-primary/20 backdrop-blur-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <BrainCircuit className="w-10 h-10 text-primary" />
              <CardTitle className="text-3xl font-bold text-foreground">
                Get AI-Powered App Recommendations
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Describe your business idea or app concept, and our AI will
              generate a list of features and technologies to get you started.
            </p>
            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="e.g., A social networking app for chefs to share recipes and techniques"
                value={userGoals}
                onChange={(e) => setUserGoals(e.target.value)}
                className="mb-4 bg-transparent text-foreground"
                rows={4}
                disabled={isLoading || cooldown > 0}
              />
              <Button
                type="submit"
                className="cta-btn cta-primary w-full"
                disabled={isButtonDisabled}
              >
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isLoading
                  ? 'Generating...'
                  : cooldown > 0
                  ? `Please wait ${cooldown}s`
                  : 'Generate Ideas'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
