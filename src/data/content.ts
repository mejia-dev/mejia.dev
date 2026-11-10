import imgSubgoal from "../assets/projects/subgoal.webp";
import imgRR from "../assets/projects/rhythmrunner.webp";
import imgWansc from "../assets/projects/WhatsApp-Notification-Sound-Changer.webp";

export const email: string = ["aaron", "mejia.dev"].join("@");

export const sections = [
  { id: "hello", label: "Hello" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const intro = {
  greeting: "Hey, I'm Aaron!",
  tagline: "Security-focused full-stack developer",
  paragraphs: [
    "I build software that saves people time: integrations, automation platforms, internal tools, and the occasional browser extension when something bugs me enough.",
    "Before I wrote code full-time, I spent years in IT support, sysadmin roles, and training technicians and running an internship program. It gave me a front-row seat to how people actually use software, and I've seen enough good and bad software to know what works and what doesn't.",
  ],
};

export type HatIcon = "build" | "secure" | "teach";

export interface Hat {
  icon: HatIcon;
  title: string;
  text: string;
}

export const hats: Hat[] = [
  {
    icon: "build",
    title: "Build",
    text: "Full-stack apps in C#/.NET, TypeScript, and Python. Lately, SaaS integrations, automation platforms, and the CI/CD pipelines that ship them.",
  },
  {
    icon: "secure",
    title: "Secure",
    text: "Security reviews, secure-by-default coding practices, and tooling that helps security teams respond faster. CompTIA Security+ certified.",
  },
  {
    icon: "teach",
    title: "Teach & Write",
    text: "Code reviews, mentoring, documentation, and training. I like taking complicated technical things and making them make sense.",
  },
];

export interface Job {
  title: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: Job[] = [
  {
    title: "Integrations Developer",
    org: "SaaS communications platform",
    period: "2026 - now",
    points: [
      "Leading the development and modernization of a SaaS integrations platform.",
      "Building new integrations, and extending existing ones, with CRM, PSA, and other business tools.",
      "Running code reviews to keep quality high and to mentor fellow developers.",
      "Owning security reviews and secure coding practices across the team.",
    ],
  },
  {
    title: "Lead Developer",
    org: "IT services company",
    period: "2024 - 2026",
    points: [
      "Started the company's software development department from scratch, including the standards and processes it runs on.",
      "Designed and built an automation and integration platform, plus its CI/CD pipeline, that took repetitive manual work off people's to-do lists.",
      "Found and fixed security issues in the old corporate website, then architected, secured, and shipped its replacement.",
      "Built incident-response scripts and utilities for the cybersecurity department to shorten the path from alert to resolution.",
      "Brought agentic AI into the development workflow with agents tailored to specific repositories.",
      "Pulled data straight from CRM databases into reports that helped leadership make informed decisions.",
    ],
  },
  {
    title: "Software Developer",
    org: "B2B software company",
    period: "2024",
    points: [
      "Rebuilt the product's automated test suite in xUnit and Selenium, and owned tests for every new feature.",
      "Set up a quality-control process for completed tickets to catch defects before release.",
      "Helped the product owner plan and prioritize sprints, and edited end-user guides for clarity.",
    ],
  },
  {
    title: "Senior IT Technician · Training & Documentation Manager",
    org: "IT services company",
    period: "2019 - 2023",
    points: [
      "Handled complex technical escalations from Tier 1 and Tier 2 technicians.",
      "Led a team covering helpdesk, network and cloud infrastructure, identity, and security for a large client.",
      "Served as point person for a company-wide VoIP migration: planning, documentation, and training.",
      "Hired, trained, and mentored summer interns, with every full-time intern hired into a support role.",
      "Pitched process improvements to leadership and formalized several of them into standard procedures.",
    ],
  },
];

export const education = [
  { title: "Certificate in Web & Mobile Development", org: "Epicodus", period: "2024" },
  { title: "AAS in Computer Support", org: "Clark College", period: "2019" },
];

export const certifications: string[] = ["CompTIA Security+", "CompTIA Project+", "CompTIA A+"];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "Python", "Java", "PHP", "SQL", "KQL"],
  },
  {
    group: "Frameworks",
    items: ["ASP.NET Core", "Entity Framework", "React", "React Native", "Node.js", "Django", "Flask", "xUnit + Selenium"],
  },
  {
    group: "Platforms & tools",
    items: ["Azure", "Entra ID", "Git & GitHub", "CI/CD", "WordPress", "Browser extensions", "Claude & Codex"],
  },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface FeaturedProject {
  title: string;
  blurb: string;
  badge?: string;
  desc: string;
  image: string;
  imageAlt: string;
  techs: string[];
  links: ProjectLink[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "subgoal.gg",
    blurb: "SaaS app for streamers",
    desc: "I noticed Twitch streamers didn't have a great way to track and share their subscriber goals, so I built one. Streamers can set milestones, show their community a live progress dashboard, and run subathon events without writing any code.",
    image: imgSubgoal,
    imageAlt: "subgoal.gg landing page reading \"Your Twitch Growth Visualized\"",
    techs: ["ASP.NET Core MVC", "C#", "Twitch OIDC", "Stripe", "Security headers"],
    links: [{ label: "Visit subgoal.gg", href: "https://subgoal.gg" }],
  },
  {
    title: "Rhythm Runner",
    blurb: "Procedurally generated music platformer",
    desc: "Upload a song and run through a level generated from its audio data. Everything is written from scratch in TypeScript: no game engine, no libraries, no AI help. The hard part was rendering frequency data as a side-scroller and syncing obstacles to audio spikes in real time, all inside a 120-hour build window.",
    image: imgRR,
    imageAlt: "Rhythm Runner title screen with a robot running over an audio waveform",
    techs: ["TypeScript", "Web Audio API", "Canvas", "React"],
    links: [
      { label: "Play it", href: "https://rhythmrunner.io" },
      { label: "GitHub", href: "https://github.com/mejia-dev/rhythmrunner" },
    ],
  },
  {
    title: "WhatsApp Notification Sound Changer",
    blurb: "Chrome extension",
    badge: "2,000+ installs",
    desc: "I got tired of WhatsApp's default notification sound blending in with everything else, so I reverse-engineered the web app and built an extension that lets you pick your own.",
    image: imgWansc,
    imageAlt: "WhatsApp Notification Sound Changer extension popup",
    techs: ["JavaScript", "Chrome Extension APIs", "Reverse engineering"],
    links: [
      { label: "Chrome Web Store", href: "https://mejia.dev/wansc" },
      { label: "GitHub", href: "https://mejia.dev/gh/wansc" },
    ],
  },
];

export interface SmallProject {
  title: string;
  desc: string;
  links: ProjectLink[];
}

export const otherProjects: SmallProject[] = [
  {
    title: "Messenger Web App Upgrades",
    desc: "Chrome extension adding custom notification sounds, Escape-to-close chats, and unread badges to Messenger.",
    links: [
      { label: "Store", href: "https://mejia.dev/mwau" },
      { label: "GitHub", href: "https://mejia.dev/gh/mwau" },
    ],
  },
  {
    title: "GIF → ASCII",
    desc: "A small Python desktop app that turns GIF keyframes into ASCII art you can play back in a terminal.",
    links: [{ label: "GitHub", href: "https://github.com/mejia-dev/ExtractGIFFramesToText" }],
  },
  {
    title: "Pierre's Nightmare",
    desc: "A Unity survival game made by four devs in four days. How long can you last against an army of pastries?",
    links: [{ label: "GitHub", href: "https://github.com/mejia-dev/PierresNightmare" }],
  },
];

export const links = {
  github: "https://github.com/mejia-dev",
  coffee: "https://mejia.dev/coffee",
  photographer: "https://dellinzhang.com/",
};