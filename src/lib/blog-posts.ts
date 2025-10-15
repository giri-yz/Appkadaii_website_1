export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-nextjs-is-awesome',
    title: 'Why Next.js is a Game-Changer for Web Development',
    summary: 'Discover the powerful features of Next.js and why we use it to build high-performance applications for our clients.',
    author: 'G. Karthick',
    date: '2024-07-28',
    content: `
      <p>Next.js has rapidly become one of the most popular React frameworks, and for good reason. At App kadaii, it's a cornerstone of our tech stack, allowing us to build incredibly fast, SEO-friendly, and scalable applications.</p>
      <h3 class="text-2xl font-bold mt-6 mb-4 text-primary">Server-Side Rendering (SSR) and Static Site Generation (SSG)</h3>
      <p>One of the standout features of Next.js is its hybrid rendering capabilities. We can choose to render pages on the server for dynamic content (SSR) or build them at compile time for static content (SSG). This flexibility means we can optimize for performance and SEO on a page-by-page basis.</p>
      <h3 class="text-2xl font-bold mt-6 mb-4 text-primary">AI Integration with Vercel and Genkit</h3>
      <p>The entire App kadaii website was built with the help of AI, using Google's Genkit and deployed on Vercel. This powerful combination allows for rapid prototyping and iteration. Genkit provides the tools to build AI-powered features, while Vercel offers the perfect platform for deploying and scaling Next.js applications with serverless functions.</p>
    `,
  },
  {
    slug: 'introduction-to-genkit',
    title: 'Building AI-Powered Apps with Genkit',
    summary: 'A brief introduction to Google\'s Genkit and how it simplifies the process of creating and deploying AI-driven features.',
    author: 'App Kadaii Team',
    date: '2024-07-27',
    content: `
      <p>Generative AI is transforming how we build applications. Google's Genkit is an open-source framework designed to help developers build production-ready AI-powered features with ease.</p>
      <h3 class="text-2xl font-bold mt-6 mb-4 text-primary">Key Features of Genkit</h3>
      <ul>
        <li class="mb-2 ml-4 list-disc"><strong>Flows:</strong> Define and orchestrate complex AI logic.</li>
        <li class="mb-2 ml-4 list-disc"><strong>Model Garden:</strong> Easily swap between different AI models (like Gemini).</li>
        <li class="mb-2 ml-4 list-disc"><strong>Built-in Tooling:</strong> Comes with tools for logging, monitoring, and debugging.</li>
      </ul>
      <p class="mt-4">This website itself uses Genkit to power the "App Recommendations" feature on the homepage. By describing an idea, you're triggering a Genkit flow that uses an AI model to generate a custom app concept. It's a simple example of how Genkit can be integrated into a Next.js application to provide powerful, dynamic functionality.</p>
    `,
  },
];
