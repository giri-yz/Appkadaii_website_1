'use client';

import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';
import { SectionHeading } from '@/components/landing/section-heading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { blogPosts, type BlogPost } from '@/lib/blog-posts';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function BlogPostItem({ post }: { post: BlogPost }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(new Date(post.date).toLocaleDateString());
  }, [post.date]);

  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <Card className="bg-card/50 border border-primary/20 backdrop-blur-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            {post.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground pt-2">
            {post.summary}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}


export default function BlogPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <section id="blog-listing" className="py-16 px-8 pt-32">
          <div className="container max-w-4xl mx-auto">
            <SectionHeading
              title="Our Blog"
              subtitle="Insights, tutorials, and thoughts on web development and AI."
            />
            <div className="mt-12 grid grid-cols-1 gap-8">
              {blogPosts.map((post) => (
                <BlogPostItem key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
