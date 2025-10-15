
'use client';

import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts, type BlogPost } from '@/lib/blog-posts';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === params.slug);
    if (foundPost) {
      setPost(foundPost);
      setFormattedDate(new Date(foundPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    } else {
      notFound();
    }
  }, [params.slug]);

  if (!post) {
    return (
      <>
        <Particles />
        <div className="global-bg"></div>
        <Header />
        <main className="py-16 px-8 pt-32">
          <div className="container max-w-4xl mx-auto text-center">Loading post...</div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Particles />
      <div className="global-bg"></div>
      <Header />
      <main className="py-16 px-8 pt-32">
        <div className="container max-w-4xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-primary mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
          <Card className="bg-card/50 border border-primary/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary leading-tight mb-4">
                {post.title}
              </CardTitle>
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-invert max-w-none text-foreground/90 prose-p:leading-relaxed prose-h2:text-2xl prose-h2:font-bold prose-h2:text-primary prose-h2:mt-10 prose-h2:mb-4 prose-strong:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
