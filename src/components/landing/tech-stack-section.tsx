import { SectionHeading } from './section-heading';
import { cn } from '@/lib/utils';

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Shadcn/UI', icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-16 px-8 bg-muted/20">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="Our Technology Stack"
          subtitle="We use the best and latest technologies to build high-quality, scalable solutions."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-card flex flex-col items-center justify-center gap-4 p-4 bg-card/50 rounded-2xl border border-transparent transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_hsla(var(--primary),0.2)]"
              style={{ animation: `drop-in 1s ease-out ${index * 100}ms both` }}
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain" />
              <p className="font-semibold text-center text-foreground">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
       <style jsx>{`
        @keyframes drop-in {
          0% {
            opacity: 0;
            transform: translateY(-100px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateY(10px) scale(1.05);
          }
          80% {
            transform: translateY(-5px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
