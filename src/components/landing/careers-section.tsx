import React from 'react';
import { SectionHeading } from './section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Feather, TrendingUp, Brush, Server, Bot, Megaphone } from 'lucide-react';

const jobOpenings = [
  {
    title: 'Frontend Developer',
    description:
      "We're looking for talented developers who can build beautiful, user-friendly interfaces. Your specific framework isn't important. What matters is your skill, creativity, and basic English + prompting abilities.",
    icon: <Brush />,
  },
  {
    title: 'Backend Developer',
    description:
      'We need skilled engineers to build the rock-solid foundation of our apps. We value talent and a security-first mindset over any specific language. Good communication (English) and prompting skills are key.',
    icon: <Server />,
  },
  {
    title: 'AI Prompt Engineer',
    description:
      "Are you great at talking to AI? We're looking for someone who can craft the perfect prompts to get the best results. Your creativity and communication skills are what's most important here.",
    icon: <Bot />,
  },
  {
    title: 'Sales & Marketing',
    description:
      'We need a creative marketeer to spread the word about App kadaii. Your role will be to create engaging content, manage social media, and develop strategies to attract new clients.',
    icon: <Megaphone />,
  }
];

const companyPerks = [
    {
        icon: <TrendingUp />,
        title: "Startup Growth",
        description: "As an early member of our startup, you'll have a massive impact and grow with us. We may not have big-company perks, but we offer a front-row seat to building something great."
    },
    {
        icon: <Feather />,
        title: "Remote First",
        description: "Work from anywhere in the world. We trust you to do your best work, wherever you are."
    },
    {
        icon: <Feather />,
        title: "Flexible Hours",
        description: "We value work-life balance. Set a schedule that works for you and your lifestyle."
    },
     {
        icon: <Feather />,
        title: "Creative Freedom",
        description: "Your ideas matter. We foster a collaborative environment where you can make a real impact."
    }
]

export function CareersSection() {
  return (
    <section id="careers" className="py-16 px-8">
      <div className="container max-w-5xl mx-auto">
        <SectionHeading
          title="Join Our Team"
          subtitle="We're looking for passionate builders, innovators, and creative thinkers to help us craft the future of applications."
        />

        <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-10 text-primary">Current Openings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
                <Card key={index} className="bg-card/50 border border-primary/20 backdrop-blur-lg flex flex-col">
                <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                            {job.icon}
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground">
                            {job.title}
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-6 flex-grow">{job.description}</p>
                    <Button asChild className="w-full cta-btn cta-secondary mt-auto">
                    <a href="/apply">Apply Now</a>
                    </Button>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
        
        <div className="mt-24">
             <h3 className="text-3xl font-bold text-center mb-10 text-primary">Why Work With Us?</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyPerks.map((perk, index) => (
                    <div key={index} className="perk-card text-center p-6 bg-card/40 rounded-2xl border border-primary/10 transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:-translate-y-2">
                        <div className='w-10 h-10 mx-auto mb-4 text-primary'>{perk.icon}</div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">{perk.title}</h4>
                        <p className="text-sm text-muted-foreground">{perk.description}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
}
