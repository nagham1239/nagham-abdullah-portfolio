export const PLAYER = {
  name: "Nagham Abdullah",
  title: "Frontend Developer & UI/UX Enthusiast",
  email: "naghamabdullah04@gmail.com",
  linkedin: "#",
  github: "#",
  xpLevel: 3,
  xpLabel: "UI/UX LEVEL 03",
  health: 92,
};

export const NAV_LINKS = [
  { id: "hero", label: "Start" },
  { id: "about", label: "Profile" },
  { id: "skills", label: "Inventory" },
  { id: "projects", label: "Missions" },
  { id: "experience", label: "Levels" },
  { id: "achievements", label: "Trophies" },
  { id: "contact", label: "Portal" },
];

export const ABOUT = {
  intro:
    "A frontend developer who treats every interface like a level to master — blending clean code, thoughtful UI/UX, responsive layouts, and interactive experiences into modern web applications built through teamwork and collaboration.",
  focus: [
    "Frontend Development",
    "UI/UX Design",
    "Responsive Interfaces",
    "Interactive Experiences",
  ],
  mission:
    "Crafting immersive, accessible web experiences — from dashboards and landing pages to polished product flows that feel intuitive on every screen.",
  stats: [
    { label: "Role", value: "Frontend Dev" },
    { label: "Class", value: "UI/UX Mage" },
    { label: "Status", value: "Available" },
    { label: "Location", value: "Lebanon" },
  ],
};

export type SkillRarity = "common" | "rare" | "epic" | "legendary";

export interface Skill {
  name: string;
  rarity: SkillRarity;
  level: number;
  icon: string;
}

export const SKILLS: Skill[] = [
  { name: "React", rarity: "legendary", level: 92, icon: "⚛️" },
  { name: "Next.js", rarity: "legendary", level: 90, icon: "▲" },
  { name: "TypeScript", rarity: "epic", level: 88, icon: "TS" },
  { name: "JavaScript", rarity: "epic", level: 90, icon: "JS" },
  { name: "Tailwind CSS", rarity: "epic", level: 91, icon: "🌊" },
  { name: "HTML", rarity: "rare", level: 95, icon: "⟨⟩" },
  { name: "CSS", rarity: "rare", level: 94, icon: "🎨" },
  { name: "Figma", rarity: "rare", level: 87, icon: "◈" },
  { name: "Git/GitHub", rarity: "common", level: 88, icon: "⎇" },
  { name: "Supabase", rarity: "common", level: 82, icon: "⚡" },
];

export const RARITY_STYLES: Record<
  SkillRarity,
  { label: string; border: string; glow: string; bg: string }
> = {
  common: {
    label: "Common",
    border: "border-slate-400",
    glow: "shadow-[0_0_20px_rgba(148,163,184,0.3)]",
    bg: "from-slate-600/20 to-slate-800/40",
  },
  rare: {
    label: "Rare",
    border: "border-cyan-400",
    glow: "shadow-[0_0_24px_rgba(34,211,238,0.35)]",
    bg: "from-cyan-500/15 to-blue-900/30",
  },
  epic: {
    label: "Epic",
    border: "border-purple-400",
    glow: "shadow-[0_0_28px_rgba(168,85,247,0.4)]",
    bg: "from-purple-500/20 to-indigo-900/35",
  },
  legendary: {
    label: "Legendary",
    border: "border-pink-400",
    glow: "shadow-[0_0_32px_rgba(244,114,182,0.45)]",
    bg: "from-pink-500/25 to-amber-900/30",
  },
};

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  bossChallenge: string;
  demoUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    id: "urm-enroll",
    title: "URM Enroll",
    description:
      "URM Enroll / URM Nexus — a student-partner opportunity platform connecting applicants with universities and organizations.",
    features: [
      "Admin, Student & Partner dashboards",
      "Authentication & notifications",
      "API integrations",
      "Responsive design",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    bossChallenge:
      "Building the full platform UI while integrating frontend flows with APIs and keeping the experience consistent across roles.",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-pink-500/30 via-purple-600/20 to-cyan-500/20",
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    description:
      "Admin dashboard for URM Enroll / URM Nexus — a command-center panel for managing users, workflows, and platform operations.",
    features: [
      "Real-time metrics HUD",
      "Filterable data grids",
      "Workflow management UI",
      "Export & bulk actions",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    bossChallenge:
      "Rendering dense admin data smoothly while keeping filter and navigation interactions fast across the dashboard.",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-500/25 via-blue-600/20 to-purple-500/25",
  },
  {
    id: "student-dashboard",
    title: "Student Dashboard",
    description:
      "Student dashboard within URM Nexus — an engaging portal for tracking opportunities, applications, and platform activity.",
    features: [
      "Progress XP bars",
      "Opportunity cards",
      "Notification center",
      "Mobile-first layout",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Figma"],
    bossChallenge:
      "Designing a student-facing layout that remains scannable and delightful on mobile screens.",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-green-400/20 via-emerald-600/15 to-cyan-500/20",
  },
  {
    id: "smart-matching",
    title: "Smart Matching UI",
    description:
      "Smart matching interface for URM Nexus — connecting students and partners through preference filters and guided result flows.",
    features: [
      "Card stack interactions",
      "Preference filters",
      "Match score visualization",
      "Smooth page transitions",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    bossChallenge:
      "Making smart matching feel clear and responsive while handling complex pairing logic on the frontend.",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500/30 via-pink-500/20 to-rose-500/15",
  },
  {
    id: "billing-system",
    title: "Billing System",
    description:
      "Billing system for URM Nexus with payment tracking, plan controls, and Stripe integration flows.",
    features: [
      "Invoice builder",
      "Payment status tracking",
      "Plan comparison UI",
      "Stripe integration",
    ],
    stack: ["Next.js", "TypeScript", "Stripe Integration", "Tailwind CSS"],
    bossChallenge:
      "Integrating Stripe payment flows while keeping billing screens simple, trustworthy, and easy to follow.",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-amber-400/20 via-orange-500/15 to-pink-500/20",
  },
  {
    id: "landing-redesign",
    title: "Landing Page Redesign",
    description:
      "Public pages and landing experiences across projects — including URM Nexus, Toters Food Delivery, and Gaza Organization Platform.",
    features: [
      "Scroll-triggered reveals",
      "Hero sections",
      "Conversion-focused CTAs",
      "Responsive landing flows",
    ],
    stack: ["Next.js", "Tailwind CSS", "Figma", "Responsive Design"],
    bossChallenge:
      "Balancing bold visual design with fast, responsive landing pages that communicate each product clearly.",
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-400/25 via-violet-500/20 to-pink-500/25",
  },
];

export interface ExperienceNode {
  level: number;
  title: string;
  description: string;
  xp: number;
  unlocked: boolean;
}

export const EXPERIENCE: ExperienceNode[] = [
  {
    level: 1,
    title: "Learning HTML/CSS",
    description:
      "Mastered the foundations — semantic HTML, CSS, responsive layouts, and accessible interface patterns.",
    xp: 100,
    unlocked: true,
  },
  {
    level: 2,
    title: "React Journey",
    description:
      "2024 – 2025: Scratch Programming Instructor at CO-DE Program & BrightChamps — taught children programming while strengthening React and interactive frontend skills.",
    xp: 250,
    unlocked: true,
  },
  {
    level: 3,
    title: "Next.js Development",
    description:
      "June – July 2025: Full Stack Developer Training at Ogero — built admin console frontend, tested backend APIs, worked with JWT authentication and PostgreSQL.",
    xp: 400,
    unlocked: true,
  },
  {
    level: 4,
    title: "Frontend Team Leadership",
    description:
      "Dec 2025 – Present: Frontend Developer & Team Lead at URM Enroll / URM Nexus — built full website UI, developed dashboards, integrated APIs, and coordinated frontend work across the team.",
    xp: 600,
    unlocked: true,
  },
  {
    level: 5,
    title: "UI/UX Design Improvements",
    description:
      "Improved UI/UX and workflows across URM Nexus, UNRWA Edu, Candle Studio, and other projects — prototyping in Figma and shipping polished, responsive interfaces.",
    xp: 800,
    unlocked: true,
  },
];

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "pixel-perfect",
    title: "Pixel Perfect Builder",
    description: "Shipped interfaces matching design specs down to the last pixel.",
    icon: "🎯",
    unlocked: true,
  },
  {
    id: "responsive",
    title: "Responsive Design Master",
    description: "Built mobile-first layouts across URM Nexus, Toters, and Gaza Organization Platform.",
    icon: "📱",
    unlocked: true,
  },
  {
    id: "bug-survivor",
    title: "Bug Survivor",
    description: "Debugged frontend and API integration issues across dashboards and live workflows.",
    icon: "🛡️",
    unlocked: true,
  },
  {
    id: "ui-wizard",
    title: "UI Wizard",
    description: "Transformed product needs into polished dashboard, landing, and interaction designs.",
    icon: "✨",
    unlocked: true,
  },
  {
    id: "performance",
    title: "Performance Optimizer",
    description: "Focused on smooth navigation, reusable components, and efficient frontend delivery.",
    icon: "⚡",
    unlocked: true,
  },
  {
    id: "accessibility",
    title: "Accessibility Champion",
    description: "Built inclusive interfaces with accessibility and usability in mind.",
    icon: "♿",
    unlocked: true,
  },
];
