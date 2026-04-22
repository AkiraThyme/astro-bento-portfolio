export interface WebsiteProject {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
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
    featured: true,
  },
  {
    title: "Travel Globe",
    description:
      "Interactive 3D globe experience showing countries I visited.",
    href: "/travel",
    image: "/images/img2.png",
    tags: ["D3", "Canvas", "Data Viz"],
    featured: true,
  },
  {
    title: "Clean Dashboard",
    description:
      "Admin-focused layout crafted for readability and efficient workflows.",
    href: "#",
    image: "/images/img3.png",
    tags: ["Dashboard", "UX", "Frontend"],
  },
  {
    title: "Business Landing",
    description:
      "Conversion-friendly landing page with responsive sections and clear CTAs.",
    href: "#",
    image: "/images/img4.png",
    tags: ["Marketing", "Responsive", "SEO"],
  },
  {
    title: "SaaS Product Site",
    description:
      "Product storytelling with structured content and smooth transitions.",
    href: "#",
    image: "/images/img5.png",
    tags: ["SaaS", "Content", "Branding"],
  },
  {
    title: "E-commerce Module",
    description: "Feature section for product browsing and checkout-oriented flows.",
    href: "#",
    image: "/images/img6.png",
    tags: ["Commerce", "UI", "Optimization"],
  },
];
