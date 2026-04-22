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
