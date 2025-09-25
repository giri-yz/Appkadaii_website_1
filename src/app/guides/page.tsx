import { PageHeader } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Framer, Laptop, Workflow } from 'lucide-react';

const ideGuides = [
  {
    title: 'VSCode for Web Dev',
    description: 'Optimize your Visual Studio Code for modern web development.',
    icon: <Laptop className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Sublime Text Power User',
    description:
      'Tips and tricks to become a power user of Sublime Text editor.',
    icon: <Laptop className="h-8 w-8 text-primary" />,
  },
  {
    title: 'JetBrains IDEs for Python',
    description: 'Setup PyCharm and other JetBrains tools for Python projects.',
    icon: <Laptop className="h-8 w-8 text-primary" />,
  },
];

const frameworkTutorials = [
  {
    title: 'React Native from Scratch',
    description:
      'Build your first cross-platform mobile app with React Native.',
    icon: <Framer className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Vue.js Essentials',
    description:
      'A comprehensive guide to the core concepts of Vue.js framework.',
    icon: <Framer className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Angular Best Practices',
    description:
      'Learn about architecture and best practices for large-scale Angular apps.',
    icon: <Framer className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Svelte for Beginners',
    description: 'Get started with the Svelte compiler for faster web apps.',
    icon: <Framer className="h-8 w-8 text-primary" />,
  },
];

export default function GuidesPage() {
  return (
    <main className="flex-1 overflow-auto p-4 md:p-8">
      <PageHeader
        title="Developer Guides"
        description="Curated tutorials and best practices for tools and frameworks."
      />
      <Tabs defaultValue="frameworks" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="frameworks"><Framer className="mr-2 h-4 w-4" />Frameworks</TabsTrigger>
          <TabsTrigger value="ides"><Laptop className="mr-2 h-4 w-4" />IDE Setup</TabsTrigger>
        </TabsList>
        <TabsContent value="frameworks" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {frameworkTutorials.map((guide) => (
              <Card key={guide.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  {guide.icon}
                  <CardTitle>{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{guide.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ides" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ideGuides.map((guide) => (
              <Card key={guide.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  {guide.icon}
                  <CardTitle>{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{guide.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
