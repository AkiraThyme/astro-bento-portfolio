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
];
