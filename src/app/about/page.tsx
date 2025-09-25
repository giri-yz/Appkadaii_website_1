import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    bio: 'Visionary leader with a passion for innovation and excellence.',
  },
  {
    name: 'Bob Williams',
    role: 'Lead Developer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    bio: 'Expert in crafting scalable and robust application architectures.',
  },
  {
    name: 'Charlie Brown',
    role: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    bio: 'Creates beautiful and intuitive user experiences that delight users.',
  },
  {
    name: 'Diana Prince',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a',
    bio: 'Ensures projects are delivered on time and exceed expectations.',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible, embracing new technologies and creative solutions.',
  },
  {
    title: 'Customer Centricity',
    description: 'Our clients are at the heart of everything we do. We build partnerships based on trust and mutual success.',
  },
  {
    title: 'Quality',
    description: 'We are committed to delivering high-quality, robust, and reliable applications that stand the test of time.',
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty, building lasting relationships with our clients and partners.',
  }
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages[0];
  return (
    <main className="flex-1 overflow-auto p-4 md:p-8">
      <PageHeader
        title="About AppShack"
        description="Pioneering the future of application development and AI solutions."
      />

      <div className="mt-8 grid gap-12">
        <section id="our-story">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="font-headline text-3xl font-bold">Our Story</h2>
                <p className="mt-4 text-muted-foreground">
                  Founded in 2020, AppShack was born from a desire to bridge the gap between brilliant ideas and market-ready applications. We saw a need for a partner who could not only write code but also understand business goals and leverage cutting-edge technology to achieve them.
                </p>
                <p className="mt-4 text-muted-foreground">
                  From our humble beginnings, we've grown into a dynamic team of developers, designers, and AI experts dedicated to turning our clients' visions into reality.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                {aboutImage && <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />}
              </div>
            </div>
          </Card>
        </section>

        <section id="our-values">
            <div className="text-center mb-8">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Core Values</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">The principles that guide our work and our relationships.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                    <div key={value.title} className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                            <CheckCircle className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">{value.title}</h3>
                        <p className="mt-2 text-muted-foreground text-sm">{value.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section id="meet-the-team">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet the Team</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">The passionate individuals behind AppShack's success.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="flex flex-col items-center pt-6">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}