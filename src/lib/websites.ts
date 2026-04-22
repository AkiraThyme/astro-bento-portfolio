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
    title: "Portfolio & Bento UI",
    description:
      "Personal site focused on polished UI micro-interactions and performance.",
    href: "/",
    image: "/images/img1.png",
    tags: ["Astro", "UnoCSS", "Animation"],
    codeUrl: "https://github.com/AkiraThyme/astro-bento-portfolio",
    siteUrl: "/",
    featured: true,
  },
  {
    title: "Travel Globe",
    description:
      "Interactive 3D globe experience showing countries I visited.",
    href: "/travel",
    image: "/images/img2.png",
    tags: ["D3", "Canvas", "Data Viz"],
    siteUrl: "/travel",
    featured: true,
  },
  {
    title: "Websites Gallery",
    description:
      "Showcase page for UI snapshots and web work grouped into clean, readable cards.",
    href: "/websites",
    image: "/images/img7.png",
    tags: ["Gallery", "UI", "Responsive"],
    siteUrl: "/websites",
  },
];
