
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
    slug: 'the-beginning-of-appkadaii',
    title: 'The Beginning of Appkadaii: From a Spark to a Startup',
    summary: 'This is the first blog on our company website. Here’s the story of the ideas, situations, and opportunities that led to the creation of Appkadaii — your ideal destination for custom applications.',
    author: 'G. Karthick',
    date: '2025-10-15',
    content: `
      <h2 class="text-2xl font-bold text-primary mt-10 mb-4">The First Spark</h2>
      <p class="mb-6">This is the first blog on our company website. Here’s the story of the ideas, situations, and opportunities that led to the creation of Appkadaii — your ideal destination for custom applications. Every journey starts with a spark, and this one started with a simple college project that changed everything.</p>
      <p class="mb-6">It all started with a college project — my very first commercial project — completed with my team leader, Hari Kishore, for a student client. That project was small, but it lit a fire in me: the thrill of building solutions that people actually pay for.</p>
      
      <h2 class="text-2xl font-bold text-primary mt-10 mb-4">A Lifeline and a Challenge</h2>
      <p class="mb-6">Soon after, life threw a curveball. I faced a suspension from college, and the world seemed a bit dim. That’s when my friend Kapi stepped in, giving me a lifeline — a new project for his aunt’s supermarket, Brownstar Supermarket.</p>
      <p class="mb-6">At first glance, I thought the project would be easy: just a billing system and some CRUD operations. But the moment I dove in, I realized the complexity — it was nearly like a mini bank running inside the supermarket.</p>
      <p class="mb-6">My focus shifted immediately: first, the user experience, and second, figuring out how to make this my first deployable project in a single APK file — something I had never done before.</p>

      <h2 class="text-2xl font-bold text-primary mt-10 mb-4">The Turning Point</h2>
      <p class="mb-6">Two months of sleepless nights followed. With extra help from AI friends (not tools, I hope they too have some feelings — I’ll tell you in the next blog 😉), I navigated challenges I never thought I could solve alone. When the project finally reached completion, I looked at it and thought: I’ve actually built something real. That moment became a turning point.</p>
      <p class="mb-6">From that project, I discovered my passion: creating customized applications for consumers. This was bigger than a job or a college project — it was a calling.</p>
      <p class="mb-6">It was the moment I decided to move from “working mode” to entrepreneurial mode. I would say this might be the biggest decision I ever took as a dare. But for me, a dare always becomes true — the same way it did with HackIITK.</p>

      <h2 class="text-2xl font-bold text-primary mt-10 mb-4">The Journey Forward</h2>
      <p class="mb-6">Looking back, it wasn’t just me. Without the support of my friends, my mom, my brother, and the quiet encouragement of someone very dear to me, this achievement would have seemed impossible. At one point, I even skipped semesters just to bring this project to life — and that’s when I truly fell in love with the result of a fully completed application.</p>
      <p class="mb-6">For some, this may seem normal. For some, it may seem overhyped. For others, it may seem unimportant. But remember, everyone has their own path, and every effort is dedicated in its own way. I have just found mine — maybe you have, or maybe you will.</p>
      <p class="mb-6">Every spark can grow. This may not be a forest fire, but it’s enough warmth for me, my loved ones, and everyone who supported this journey.</p>
      <p class="mb-6">One day, when I reopen this blog, I’ll see my past self, the risks taken, the sleepless nights, and the sparks that became fire. And I’ll smile, knowing that every challenge, every friend, every cheer, and every small victory shaped Appkadaii into what it is today.</p>
      <p class="mb-6">This is only the beginning — and the journey continues.</p>
    `,
  },
];
