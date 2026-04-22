export interface WebsiteProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  siteUrl?: string;
  featured?: boolean;
}

export const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    title: "Jerold Portfolio",
    description:
      "Personal bento portfolio focused on clean UI, animation, and performance-first frontend engineering.",
    image: "/images/img1.png",
    tags: ["Astro", "UnoCSS", "Motion"],
    githubUrl: "https://github.com/AkiraThyme/astro-bento-portfolio",
    siteUrl: "https://jerold-portfolio.netlify.app",
    featured: true,
  },
  {
    title: "Travel Globe",
    description:
      "Interactive globe experience to showcase visited countries with smooth rendering and simple UX.",
    image: "/images/img2.png",
    tags: ["D3", "Canvas", "Visualization"],
    siteUrl: "https://jerold-portfolio.netlify.app/travel",
    featured: true,
  },
  {
    title: "Admin Dashboard UI",
    description:
      "Dashboard concept tailored for business operations with data readability and responsive layouts.",
    image: "/images/img3.png",
    tags: ["Dashboard", "Responsive", "UX"],
  },
];
