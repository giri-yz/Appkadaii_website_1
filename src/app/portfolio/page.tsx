import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PortfolioPage() {
  return (
    <main className="flex-1 overflow-auto p-4 md:p-8">
      <PageHeader
        title="Our Portfolio"
        description="A showcase of our successful projects and innovative solutions."
      />
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PlaceHolderImages.map((item) => (
          <Card key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={item.imageHint}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-headline text-xl font-bold text-white">{item.description}</h3>
              <p className="text-sm text-white/80 mt-1">Web & AI Integration</p>
            </div>
          </Card>
        ))}
        {PlaceHolderImages.slice(0, 2).map((item, index) => (
          <Card key={`${item.id}-${index}`} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={item.imageUrl.replace('seed/1','seed/5').replace('seed/2','seed/6')}
                alt={item.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={item.imageHint}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-headline text-xl font-bold text-white">{item.description} V2</h3>
              <p className="text-sm text-white/80 mt-1">Mobile App</p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}