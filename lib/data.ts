export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  type: "full-time" | "freelance" | "contract";
}

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "FinVault Dashboard",
    description: "Real-time financial analytics platform with AI-driven insights and predictive modeling.",
    longDescription: "A comprehensive fintech dashboard built with Next.js and D3.js, featuring real-time market data, portfolio tracking, AI-powered investment recommendations, and automated reporting. Handles millions of data points with sub-100ms response times.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "TypeScript", "D3.js", "Prisma", "PostgreSQL", "Redis"],
    links: { live: "#", github: "#" },
    featured: true,
    year: "2024",
  },
  {
    id: "ecommerce-platform",
    title: "Luminary Store",
    description: "Next-gen e-commerce experience with immersive 3D product visualization and AR try-on.",
    longDescription: "An e-commerce platform reimagined from the ground up. Features WebGL-powered 3D product viewers, AR try-on capabilities, AI-driven personalization, and a headless CMS architecture. Built with Three.js, Shopify API, and Next.js App Router.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    tags: ["React", "Three.js", "Shopify API", "Framer Motion", "GSAP"],
    links: { live: "#", github: "#" },
    featured: true,
    year: "2024",
  },
  {
    id: "ai-writer",
    title: "Prose AI",
    description: "Collaborative writing tool powered by LLMs with real-time co-editing and version history.",
    longDescription: "A powerful AI writing assistant that helps teams collaborate in real-time. Features streaming AI responses, conflict-free replicated data types (CRDTs) for collaboration, rich text editing, and an intuitive prompt management system.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    tags: ["Next.js", "OpenAI API", "WebSockets", "Tiptap", "Supabase"],
    links: { live: "#", github: "#" },
    featured: true,
    year: "2023",
  },
  {
    id: "design-system",
    title: "Nucleus Design System",
    description: "Comprehensive design system with 60+ components, dark mode, and accessibility baked in.",
    longDescription: "A production-ready design system powering multiple products. Includes 60+ headless components with full keyboard navigation, WCAG 2.1 AA compliance, automatic dark mode, comprehensive Storybook documentation, and Figma component library.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS"],
    links: { live: "#", github: "#" },
    featured: false,
    year: "2023",
  },
  {
    id: "health-tracker",
    title: "PulseTrack Health",
    description: "Health & fitness tracking app with wearable integration and personalized coaching.",
    longDescription: "A full-stack health platform integrating with Apple Health, Garmin, and Fitbit. Features biometric tracking, AI coaching, meal planning, and beautiful data visualizations. Built with a React Native frontend and Go microservices backend.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["React Native", "Go", "GraphQL", "TimescaleDB", "ML Kit"],
    links: { live: "#", github: "#" },
    featured: false,
    year: "2023",
  },
  {
    id: "devtool",
    title: "Orbit DevTools",
    description: "VS Code extension for visualizing component trees and state flow in React applications.",
    longDescription: "A VS Code extension that adds superpowers to React development. Visualize component hierarchies, track state changes in real-time, detect performance bottlenecks, and get AI-powered suggestions for optimization. 20k+ installs on the marketplace.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    tags: ["TypeScript", "VS Code API", "React", "Tree-sitter", "WebGL"],
    links: { live: "#", github: "#" },
    featured: false,
    year: "2022",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 92, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript / JavaScript", level: 88, category: "frontend" },
  { name: "HTML5 & CSS3", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "NestJS", level: 85, category: "backend" },
  { name: "RESTful APIs", level: 90, category: "backend" },
  { name: "SQL Databases", level: 82, category: "backend" },
  { name: "NoSQL (MongoDB)", level: 80, category: "backend" },
  // Tools
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "AWS Cloud", level: 75, category: "tools" },
  { name: "Performance Optimization", level: 82, category: "tools" },
  // Design
  { name: "Responsive Design", level: 90, category: "design" },
  { name: "UI Implementation", level: 85, category: "design" },
];

export const experiences: Experience[] = [
  {
    id: "global-software-solutions",
    role: "Full Stack Developer",
    company: "Global Software Solutions",
    period: "Apr 2022 – Present",
    description: "Building scalable, responsive web applications end to end in Tirunelveli, Tamil Nadu — from front-end interfaces in React and Next.js to back-end services in NestJS and Node.js.",
    highlights: [
      "Develop responsive web applications with React and Next.js",
      "Design and implement RESTful APIs with NestJS and Node.js",
      "Manage SQL and NoSQL databases for production applications",
      "Optimize application performance for seamless user experiences",
    ],
    type: "full-time",
  },
];

export const stats = [
  { value: "4+", label: "Years of Experience" },
  // { value: "50+", label: "Projects Shipped" },
  { value: "3+", label: "Happy Clients" },
  // { value: "3M+", label: "Users Impacted" },
];
