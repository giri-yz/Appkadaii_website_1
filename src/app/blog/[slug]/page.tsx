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

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === params.slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      // In a real app, you might fetch from a server here.
      // If still not found, trigger a 404.
      notFound();
    }
  }, [params.slug]);

  if (!post) {
    // You can return a loading skeleton here
    return (
      <>
        <Particles />
        <div className="global-bg"></div>
        <Header />
        <main className="py-16 px-8 pt-32">
          <div className="container max-w-3xl mx-auto text-center">Loading post...</div>
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
        <div className="container max-w-3xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-primary mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
          <Card className="bg-card/50 border border-primary/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary leading-tight">
                {post.title}
              </CardTitle>
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-invert max-w-none text-foreground/90 prose-p:leading-relaxed prose-headings:text-foreground prose-strong:text-primary"
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
