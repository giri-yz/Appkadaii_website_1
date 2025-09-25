import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  ArrowRight,
  Bot,
  BookOpen,
  FileCode2,
  Library,
  BookText,
  ShieldCheck,
  Cpu,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    title: 'AI Recommendations',
    description:
      'Get AI-powered suggestions for your app development stack based on your goals.',
    href: '/recommendations',
    icon: <Bot className="h-8 w-8 text-primary" />,
  },
  {
    title: 'AI Code Snippets',
    description:
      'Generate code for common features with explanations and performance tips.',
    href: '/snippets',
    icon: <FileCode2 className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Dev Guides',
    description:
      'Curated tutorials for IDEs and frameworks like React Native, Vue, and Angular.',
    href: '/guides',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Component Library',
    description:
      'A library of reusable UI components to facilitate rapid prototyping.',
    href: '/components-library',
    icon: <Library className="h-8 w-8 text-primary" />,
  },
  {
    title: 'API Docs',
    description: 'Explore and integrate our AI APIs to extend functionality.',
    href: '/api-docs',
    icon: <BookText className="h-8 w-8 text-primary" />,
  },
];

const services = [
  {
    title: 'App Development',
    description:
      'Build stunning mobile and web applications with modern frameworks. From concept to deployment, we handle the entire development lifecycle.',
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
  },
  {
    title: 'AI Solutions',
    description:
      'Harness the power of artificial intelligence for your business. Custom AI models, machine learning pipelines, and intelligent automation.',
    icon: <Cpu className="h-8 w-8 text-accent" />,
  },
  {
    title: 'Hybrid Magic',
    description:
      'Combine the best of both worlds with AI-powered applications. Smart features, predictive analytics, and intuitive user experiences.',
    icon: <Zap className="h-8 w-8 text-accent" />,
  },
];

const portfolioItems = PlaceHolderImages.slice(0, 4);

export default function Home() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="flex flex-col gap-8 p-4 md:gap-12 md:p-8">
        <div className="relative isolate overflow-hidden rounded-lg border bg-card p-8 py-20 text-center shadow-lg">
          <div className="pointer-events-none absolute -top-40 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />

          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Your Ideal Shop for <span className="text-primary">Applications</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            We turn your ideas into apps, AI, or both—fast. Explore our tools
            and start building today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/recommendations">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/guides">Learn More</Link>
            </Button>
          </div>
        </div>

        <section id="features">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
                    <Link href={feature.href}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="services">
           <div className="text-center mb-8">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">What We Offer</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">From mobile apps to AI solutions, we deliver cutting-edge technology tailored to your vision</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="text-center p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="mb-4 rounded-lg bg-accent/10 p-4 border border-accent/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
        </section>

        <section id="portfolio">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Work</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Showcasing innovative solutions across industries</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item) => (
               <Card key={item.id} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={item.imageUrl}
                  alt={item.description}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="font-bold text-lg text-white">{item.description}</h3>
                </div>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
