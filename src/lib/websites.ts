export interface WebsiteProject {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
  codeUrl?: string;
  siteUrl?: string;
  featured?: boolean;
}

export const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    title: "DropLog",
    description:
      "DropLog is a modern micro journaling app built for speed, simplicity, and self-awareness. Log your thoughts in seconds, track your moods over time, and discover patterns in your daily life — all without creating an account or relying on the cloud.",
    href: "/websites",
    image: "/images/Img15.png",
    tags: ["Vue 3", "TypeScript", "Pinia", "CapacitorJS", "IndexedDB"],
    siteUrl: "https://drop-log.netlify.app/",
    featured: true,
  },
  {
    title: "FlowState",
    description:
      "FlowState is a developer productivity web app designed for deep work, combining task management, focus session tracking, blocker logging, quick notes, and real-time persistence in one keyboard-first workflow.",
    href: "/websites",
    image: "/images/Img16.png",
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Supabase",
      "Google OAuth",
      "Netlify",
      "Zod",
    ],
    siteUrl: "https://devflowstate.netlify.app/",
    featured: true,
  },
  {
    title: "Antasis Web Based Payroll",
    description:
      "Payroll management platform with role-based workflows and streamlined employee records.",
    href: "/websites",
    image: "/images/img1.png",
    tags: ["React", "MySQL"],
    featured: true,
  },
  {
    title: "Customized AI IS Chat bot",
    description:
      "Business-ready assistant built for internal support, response automation, and knowledge lookup.",
    href: "/websites",
    image: "/images/img5.png",
    tags: ["Python", "Laravel", "LLM GPT AI"],
    featured: true,
  },
  {
    title: "Simple CRUD",
    description:
      "Clean CRUD application focused on practical forms, records management, and maintainable backend logic.",
    href: "/websites",
    image: "/images/img7.png",
    tags: ["Laravel"],
    featured: true,
  },
  {
    title: "Simple Weather",
    description:
      "A lightweight weather web app that delivers current conditions and quick forecasts through a clean, responsive interface designed for fast everyday checking.",
    href: "/websites",
    image: "/images/Img13.jpg",
    tags: ["Nuxt", "Tailwind CSS", "SCSS", "Weather API"],
    siteUrl: "https://nuxt-weather-dashboard.vercel.app/",
    featured: true,
  },
  {
    title: "QueryWeave",
    description:
      "QueryWeave is a lightweight Django toolkit for building reusable, ORM-powered reports with filtering, grouping, aggregations, and export support.",
    href: "/websites",
    image: "/images/img18.jpg",
    tags: ["Python", "Django", "PyTest"],
    codeUrl: "https://github.com/AkiraThyme/query-weave",
    siteUrl: "https://akirathyme.github.io/query-weave/",
    featured: true,
  },
];
