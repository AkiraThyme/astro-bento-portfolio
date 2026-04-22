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
    title: "Antasis Web Based Payroll",
    description:
      "Payroll management platform focused on employee records, attendance, and salary workflows.",
    href: "/websites",
    image: "/images/img1.png",
    tags: ["React", "MySQL"],
    featured: true,
  },
  {
    title: "Customized AI IS Chat bot",
    description:
      "Internal support chatbot with AI-assisted replies, intent routing, and admin-friendly controls.",
    href: "/websites",
    image: "/images/img2.png",
    tags: ["Python", "Laravel", "LLM GPT AI"],
    featured: true,
  },
  {
    title: "Simple CRUD",
    description:
      "Clean CRUD application for daily business data management with straightforward UX and validation.",
    href: "/websites",
    image: "/images/img7.png",
    tags: ["Laravel"],
  },
];
