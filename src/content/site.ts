// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO CHANGE EVERYTHING ON THE SITE.
//  - Update strings to change copy.
//  - Add a project: copy a `{ … }` block inside `projects` and edit it.
//  - Hide a link: leave its value as an empty string "".
//  - Hide a whole section: empty its array (e.g. `skills: []`).
// ─────────────────────────────────────────────────────────────

export const site = {
  // ─── basics ───────────────────────────────────────────────
  name: "Yash Raj Gupta",
  role: "Software Development Engineer",
  location: "Bengaluru, India",

  // small status line under role; set to "" to hide the dot + line
  status: "Open to opportunities",

  // browser tab + meta description
  meta: {
    title: "Yash Raj Gupta — Software Development Engineer",
    description:
      "Software engineer passionate about fintech, data engineering, and AI-powered systems. Currently building scalable payment infrastructure at Juspay.",
  },

  // ─── intro ────────────────────────────────────────────────
  // each string becomes a paragraph
  intro: [
    "Software engineer passionate about fintech, data engineering, and AI-powered systems.",
    "Experienced in Python, FastAPI, React, Docker, PostgreSQL, and AWS — currently building scalable payment infrastructure at Juspay.",
    "Always exploring new ways to merge clean code, automation, and intelligent design to solve real problems.",
  ],

  // ─── links ────────────────────────────────────────────────
  // leave any value as "" to hide that link
  links: {
    email: "yashraj.guptadev@gmail.com",
    github: "https://github.com/yash-raj-gupta",
    linkedin: "https://www.linkedin.com/in/yash-raj-gupta/",
    twitter: "",
    resume: "/resume.pdf", // drop the file at public/resume.pdf to enable
  },

  // ─── experience ───────────────────────────────────────────
  // newest first
  experience: [
    {
      company: "Juspay",
      role: "Associate Software Development Engineer",
      period: "Jul 2025 — Present",
      summary:
        "Building scalable payment infrastructure with Rescript, Python, and PostgreSQL.",
    },
    {
      company: "Juspay",
      role: "Software Development Engineer Intern",
      period: "Jan 2025 — Jun 2025",
      summary:
        "Worked on payment services in Rescript and PostgreSQL. Returned full-time after the internship.",
    },
    {
      company: "Siemens",
      role: "Technology Intern",
      period: "Oct 2024 — Jan 2025",
      summary:
        "Built frontend features with Angular and Bootstrap.",
    },
    {
      company: "Incanus Technologies (Newton School)",
      role: "Technical Program Intern",
      period: "Jun 2024 — Aug 2024",
      summary:
        "Built academic content with React, Node.js, and MongoDB for 500+ users; authored an integration manual that cut team onboarding time by 30%.",
    },
    {
      company: "Ransh Innovations",
      role: "Web Developer Intern",
      period: "Dec 2023 — May 2024",
      summary:
        "Built an English-vocabulary learning platform with React, Node, Express, and Firebase; supported 1,000+ active users in the first three months.",
    },
  ],

  // ─── projects ─────────────────────────────────────────────
  projects: [
    {
      name: "Auditor",
      description:
        "AI-powered PDF analyzer with real-time Q&A. SaaS platform with Stripe billing.",
      tech: ["Next.js 14", "tRPC", "Prisma", "OpenAI", "Stripe"],
      href: "", // ← TODO: add repo or live URL
      year: "2024",
    },
    {
      name: "Scientia",
      description:
        "LMS portal with video streaming via Mux. Postgres + Prisma backend serving 100+ users.",
      tech: ["Next.js 14", "Prisma", "PostgreSQL", "Mux"],
      href: "", // ← TODO: add repo or live URL
      year: "2024",
    },
    {
      name: "Amicus",
      description:
        "Realtime chat app with GitHub auth. 500+ concurrent users via Redis and Pusher.",
      tech: ["Next.js 14", "Redis", "Pusher", "NextAuth"],
      href: "", // ← TODO: add repo or live URL
      year: "2023",
    },
  ],

  // ─── education ────────────────────────────────────────────
  education: [
    {
      school: "National Institute of Technology, Meghalaya",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2021 — 2025",
      detail: "CGPA: 9.97",
    },
  ],

  // ─── skills (set to [] to hide the section) ───────────────
  skills: [
    "Python",
    "FastAPI",
    "TypeScript",
    "Rescript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "ClickHouse",
    "Redis",
    "Docker",
    "AWS",
    "Git",
  ],

  // ─── achievements (set to [] to hide the section) ─────────
  achievements: [
    "Gold medalist — top of B.Tech CSE batch (2021–25), NIT Meghalaya.",
    "18th rank in CodeRush Coding Challenge by AlgoUniversity.",
    "Microsoft Technology Associate certified in Python.",
  ],
};

export type Site = typeof site;
