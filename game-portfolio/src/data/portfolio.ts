/* ------------------------------------------------------------------ *
 * Portfolio content. Every fact here is verified against the CV, the
 * repositories, or a public production URL. Nothing is invented.
 *
 * Copy rule: strongest point first, 3–5 points maximum per entry.
 * ------------------------------------------------------------------ */

export const PLAYER = {
  name: "Nagham Abdullah",
  title: "Frontend & Full-Stack Developer · UI/UX Designer",
  classes: ["Frontend", "Full-Stack", "UI/UX Design", "Team Lead"],
  email: "naghamabdullah04@gmail.com",
  linkedin: "https://www.linkedin.com/in/nagham-abdullah/",
  github: "https://github.com/nagham1239",
  xpLevel: 4,
  xpLabel: "FRONTEND LEVEL 04",
  xpPercent: 86,
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
    "I design products in Figma and build them in React and Next.js — then ship them to real users. Two platforms live in production, one more in progress.",
  focus: ["Frontend", "Full-Stack", "UI/UX Design", "Team Leadership"],
  mission:
    "Building Coursity — an EdTech tutoring marketplace for Lebanon with a live virtual classroom and an AI Study Hub, in three languages.",
  stats: [
    { label: "Role", value: "Frontend / Full-Stack" },
    { label: "Class", value: "UI/UX Designer" },
    { label: "Status", value: "Open to work" },
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
  { name: "Supabase", rarity: "epic", level: 84, icon: "⚡" },
  { name: "Figma", rarity: "rare", level: 87, icon: "◈" },
  { name: "HTML / CSS", rarity: "rare", level: 94, icon: "⟨⟩" },
  { name: "Node.js / Express", rarity: "rare", level: 78, icon: "⬢" },
  { name: "PostgreSQL", rarity: "common", level: 76, icon: "🗄️" },
  { name: "Git / GitHub", rarity: "common", level: 88, icon: "⎇" },
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

/* ------------------------------------ missions ----------------------------------- */

export type ProjectStatus = "live" | "building";

export interface Project {
  id: string;
  title: string;
  /** One-line product framing shown under the title. */
  tagline: string;
  description: string;
  /** What I built — strongest first, 4 max. */
  features: string[];
  stack: string[];
  bossChallenge: string;
  status: ProjectStatus;
  statusLabel: string;
  year: string;
  role: string;
  /** Real screenshot of the deployed product. */
  image: string;
  imageAlt: string;
  mobileImage?: string;
  logo?: string;
  demoUrl?: string;
  demoLabel?: string;
  /** Only ever set for PUBLIC repositories. */
  githubUrl?: string;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    id: "urm-enroll",
    title: "URM Enroll",
    tagline: "Student enrolment & partner platform",
    description:
      "A live platform connecting applicants with universities and partner organisations — three role experiences on one application workflow, plus the public site.",
    features: [
      "Led the frontend team through delivery",
      "Built Admin, Partner & Applicant dashboards",
      "Shipped application workflows and notifications",
      "Designed and built the full public website UI",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    bossChallenge:
      "Holding one design system together across three very different role experiences — while coordinating the team and integrating live APIs.",
    status: "live",
    statusLabel: "LIVE",
    year: "2025 – 2026",
    role: "Frontend Developer & Team Lead",
    image: "/projects/urm-enroll-desktop.jpg",
    imageAlt: "URM Enroll production website homepage",
    mobileImage: "/projects/urm-enroll-mobile.jpg",
    demoUrl: "https://enrollurm.com",
    demoLabel: "Visit enrollurm.com",
    gradient: "from-cyan-500/25 via-blue-600/20 to-purple-500/25",
  },
  {
    id: "inzaghi",
    title: "Inzaghi Cell Server",
    tagline: "Mobile software services marketplace",
    description:
      "An international marketplace for mobile software services — public catalogue, customer wallet and orders, and an admin operations console behind it.",
    features: [
      "Service catalogue and ordering experience",
      "Customer accounts, credit wallet and orders",
      "Admin console with controlled pricing",
      "Trilingual EN/AR/DE UI with full RTL",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    bossChallenge:
      "Building the provider integration as a swappable adapter, so the customer product could ship while the real provider API was still pending.",
    status: "live",
    statusLabel: "LIVE",
    year: "2025",
    role: "Full-Stack Developer",
    image: "/projects/inzaghi-desktop.jpg",
    imageAlt: "Inzaghi Cell Server production website homepage",
    mobileImage: "/projects/inzaghi-mobile.jpg",
    logo: "/projects/inzaghi-logo.png",
    demoUrl: "https://inzaghicellserver.com",
    demoLabel: "Visit inzaghicellserver.com",
    gradient: "from-amber-400/25 via-orange-500/20 to-pink-500/20",
  },
  {
    id: "coursity",
    title: "Coursity",
    tagline: "School tutoring marketplace for Lebanon",
    description:
      "An EdTech marketplace matching students with verified teachers across the Lebanese, French, American and IB curricula.",
    features: [
      "Curriculum-aware teacher discovery & booking",
      "Real-time virtual classroom on LiveKit",
      "AI Study Hub: summaries, key points, quizzes",
      "Trilingual EN/AR/FR with full RTL",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "LiveKit"],
    bossChallenge:
      "Four role experiences and a live classroom on one codebase, in three languages including right-to-left Arabic.",
    status: "building",
    statusLabel: "IN DEVELOPMENT",
    year: "2026 – present",
    role: "Product Developer — design & build",
    image: "/projects/coursity-desktop.jpg",
    imageAlt: "Coursity tutoring marketplace homepage, in development",
    logo: "/projects/coursity-logo.png",
    gradient: "from-pink-500/25 via-rose-500/20 to-purple-600/25",
  },
];

/* ------------------------------- design work ------------------------------------ *
 * UI/UX work that lives in Figma, not in a repository. Previews are
 * captured from the actual published Figma files.
 * -------------------------------------------------------------------------------- */

export interface DesignProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  /** What the design work covered — 3 max. */
  deliverables: string[];
  tools: string[];
  image: string;
  imageAlt: string;
  figmaUrl: string;
  accent: string;
}

export const DESIGN_WORK: DesignProject[] = [
  {
    id: 'nutriscan',
    title: 'NutriScan',
    tagline: 'Nutrition tracking app — mobile & admin',
    description:
      'End-to-end product design for a food-scanning nutrition app: onboarding, home and tracking screens for users, plus a full admin console.',
    deliverables: [
      'Mobile app screens: onboarding, home, tracking',
      'Admin console layouts and data views',
      'Consistent component and colour system',
    ],
    tools: ['Figma', 'UI Design', 'Prototyping'],
    image: '/projects/nutriscan-design.jpg',
    imageAlt: 'NutriScan app and admin screens designed in Figma',
    figmaUrl:
      'https://www.figma.com/design/Z0RCWG8cMeVjQYwvG1yEdd/FYP?node-id=0-1&t=HUiprxOhZ5d6zSkS-1',
    accent: '#4ade80',
  },
  {
    id: 'serenity',
    title: 'Serenity',
    tagline: 'Candle e-commerce homepage',
    description:
      'A warm, editorial homepage design for a candle brand — hero, product collections, story sections and footer, built on one type and colour system.',
    deliverables: [
      'Full homepage layout, hero to footer',
      'Product collection and story sections',
      'Brand-led type, colour and spacing system',
    ],
    tools: ['Figma', 'UI/UX', 'Branding'],
    image: '/projects/serenity-design.jpg',
    imageAlt: 'Serenity candle shop homepage designed in Figma',
    figmaUrl:
      'https://www.figma.com/design/cX7c7Ou6Rl8Af47WQ6hxQW/HomePage?node-id=0-1&t=jKteTH71W9fZHwEd-1',
    accent: '#f472b6',
  },
];

/* ------------------------------------- levels ------------------------------------ */

export interface ExperienceNode {
  level: number;
  company: string;
  role: string;
  kind: string;
  period: string;
  location: string;
  /** The headline achievement — one line. */
  description: string;
  /** Supporting detail, strongest first, 4 max. */
  highlights: string[];
  stack: string[];
  xp: number;
  unlocked: boolean;
  current?: boolean;
  link?: { href: string; label: string };
}

export const EXPERIENCE: ExperienceNode[] = [
  {
    level: 1,
    company: "CO-DE & BrightChamps",
    role: "Programming Tutor",
    kind: "Teaching",
    period: "2024 – 2025",
    location: "Hybrid",
    description: "Taught children to code, and learned to explain technical ideas simply.",
    highlights: [
      "Taught Scratch programming online to young learners",
      "Built creativity and problem-solving through guided projects",
    ],
    stack: ["Scratch", "Teaching"],
    xp: 200,
    unlocked: true,
  },
  {
    level: 2,
    company: "OGERO",
    role: "Full Stack Developer",
    kind: "Professional training",
    period: "Jun – Jul 2025",
    location: "Remote",
    description: "Shipped internal tooling across the full stack, from admin UI to database.",
    highlights: [
      "Built the Admin Console frontend in React",
      "Developed backend APIs with Node.js, Express and PostgreSQL",
      "Implemented a secure login API using JWT",
      "Tested and validated API endpoints with the team",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    xp: 400,
    unlocked: true,
  },
  {
    level: 3,
    company: "UNRWA DigitalHub",
    role: "Front-End Development Training",
    kind: "Training",
    period: "Oct – Dec 2025",
    location: "Beirut, Lebanon",
    description: "Built responsive React and Next.js apps under real Agile delivery practices.",
    highlights: [
      "Developed and maintained responsive apps in React and Next.js",
      "Worked in Agile sprints with Jira and retrospectives",
      "Applied SOLID principles and core design patterns",
    ],
    stack: ["React", "Next.js", "Agile / Jira", "UI/UX"],
    xp: 600,
    unlocked: true,
  },
  {
    level: 4,
    company: "URM Enroll",
    role: "Frontend Developer & Team Lead",
    kind: "Professional",
    period: "Dec 2025 – Jul 2026",
    location: "Remote",
    description:
      "Led the frontend team and owned the UI of a live enrolment platform end to end.",
    highlights: [
      "Led frontend delivery — coordinated tasks, reviewed implementations, set standards",
      "Designed and built the full website UI: public pages plus Admin, Partner and Applicant dashboards",
      "Shipped application workflows and notifications, and improved UI/UX across the platform",
      "Integrated the frontend with backend APIs and maintained quality through release",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    xp: 900,
    unlocked: true,
    current: true,
    link: { href: "https://enrollurm.com", label: "enrollurm.com" },
  },
];

/* ---------------------------------- education ------------------------------------ */

export const EDUCATION = [
  {
    school: "Rafik Al Hariri University",
    detail: "Computer Science — Web Development, UI Design, React",
    period: "Oct 2022 – Jul 2025",
  },
  {
    school: "UNRWA DigitalHub",
    detail: "Front-End Development Training — React, Next.js, Agile, UX/UI",
    period: "Oct – Dec 2025",
  },
];

/* ---------------------------------- trophies ------------------------------------- */

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "shipped-production",
    title: "Shipped to Production",
    description: "Two platforms live: URM Enroll and Inzaghi Cell Server.",
    icon: "🚀",
    unlocked: true,
  },
  {
    id: "team-lead",
    title: "Team Lead",
    description: "Led frontend delivery, reviews and standards at URM Enroll.",
    icon: "🧭",
    unlocked: true,
  },
  {
    id: "full-stack",
    title: "Full-Stack Run",
    description: "React frontends plus Node/Express APIs on PostgreSQL at OGERO.",
    icon: "⚙️",
    unlocked: true,
  },
  {
    id: "multilingual",
    title: "Multilingual Interfaces",
    description: "Shipped EN/AR/DE and EN/AR/FR products with full RTL support.",
    icon: "🌍",
    unlocked: true,
  },
  {
    id: "designer-dev",
    title: "Designer & Developer",
    description: "Figma flows and high-fidelity screens, built pixel-accurately.",
    icon: "🎨",
    unlocked: true,
  },
  {
    id: "certified",
    title: "Certified",
    description: "OGERO Full Stack · CISCO Networking (4 levels) · Nawaya · CO-DE.",
    icon: "🏅",
    unlocked: true,
  },
];
