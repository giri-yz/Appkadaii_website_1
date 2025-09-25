import { PageHeader } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Cpu, Zap, Smartphone, Code, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: 'Custom App Development',
    description:
      'We build stunning, high-performance web and mobile applications tailored to your specific business needs. From concept to deployment, we handle the entire development lifecycle, ensuring a product that is both scalable and user-friendly.',
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    points: ['Web & Mobile Apps', 'Scalable Architecture', 'Intuitive UI/UX Design', 'Agile Development Process']
  },
  {
    title: 'AI & Machine Learning Solutions',
    description:
      'Harness the power of artificial intelligence to unlock new possibilities. We develop custom AI models, implement machine learning pipelines, and create intelligent automation to give your business a competitive edge.',
    icon: <Cpu className="h-10 w-10 text-primary" />,
    points: ['Custom Model Development', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
  },
  {
    title: 'AI-Powered Applications',
    description:
      'Combine the best of both worlds with applications that think. We integrate smart features, predictive analytics, and personalized user experiences to create truly innovative and engaging products.',
    icon: <Zap className="h-10 w-10 text-primary" />,
    points: ['Smart Feature Integration', 'Personalization Engines', 'AI-Driven UX', 'Automated Workflows']
  },
  {
    title: 'Technology Consulting',
    description:
      'Navigate the complex technology landscape with confidence. Our experts provide strategic guidance on technology stacks, architecture, and AI integration to ensure your project is set up for success.',
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    points: ['Stack Recommendations', 'Architectural Review', 'AI Strategy', 'Performance Optimization']
  }
];

export default function ServicesPage() {
  const heroImage = PlaceHolderImages[1];
  return (
    <main className="flex-1 overflow-auto">
      <div className="relative h-64 md:h-80">
        {heroImage && <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />}
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative flex h-full flex-col items-center justify-center p-4 text-center">
            <PageHeader
                title="Our Services"
                description="Delivering cutting-edge technology solutions tailored to your vision."
            />
        </div>
      </div>
      
      <div className="p-4 md:p-8">
        <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
                <Card key={service.title} className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className={`grid md:grid-cols-5 gap-4 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`flex flex-col justify-center items-center text-center p-8 bg-primary/5 border-b md:border-b-0 ${index % 2 === 1 ? 'md:order-2 md:border-l' : 'md:border-r'}`}>
                            {service.icon}
                            <h3 className="font-headline mt-4 text-xl font-bold">{service.title}</h3>
                        </div>
                        <div className="md:col-span-4 p-8">
                            <p className="text-muted-foreground">{service.description}</p>
                            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                                {service.points.map(point => (
                                    <li key={point} className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </main>
  );
}