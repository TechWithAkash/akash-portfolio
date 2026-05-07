// lib/constants.js — Single source of truth for all portfolio content

export const PERSONAL = {
  name: "Akash Vishwakarma",
  role: "Full-Stack Engineer & AI Integration Specialist",
  tagline: "I build production-ready MERN applications with intelligent features — from MongoDB schemas to LangChain pipelines.",
  greeting: "Hi, I'm",
  email: "vishwakarmaakashav17@gmail.com",
  location: "Thane, Mumbai — Open to Remote & Relocation",
  availability: "Open to Opportunities — Available Immediately",
  responseTime: "I typically respond within 24 hours.",
  githubUrl: "https://github.com/TechWithAkash",
  linkedinUrl: "https://linkedin.com/in/akashvishwakarma2004",
  liveProjectUrl: "https://www.mywealthwise.in",
  resumeUrl: "/resume.pdf",
};

export const ABOUT = {
  paragraphs: [
    "I'm a Computer Engineering student at SIES Graduate School of Technology, Navi Mumbai (CGPA: 9.0), with hands-on production experience building full-stack applications that real users actually use.",
    "I specialize in the MERN stack and AI-integrated development — I've shipped WealthWise, a live financial planning app serving 50+ active users, and built RAG-based AI systems using LangChain and LangGraph long before they became buzzwords in job descriptions.",
    "Beyond the code, I've competed at the national level — reaching the Grand Finals of Smart India Hackathon 2025 (Top 5 from 500+ teams) and winning two first-place hackathon titles. I'm driven by building things that are both technically sound and genuinely useful.",
    "Currently seeking internship and full-time SDE opportunities where I can contribute to a high-quality engineering team and keep shipping.",
  ],
  stats: [
    { icon: "🎓", label: "B.E. CSE @ SIES GST" },
    { icon: "⚡", label: "9.0 CGPA" },
    { icon: "🚀", label: "50+ Live Users" },
    { icon: "🏆", label: "3× Hackathon Winner" },
  ],
};

export const SKILLS = {
  Frontend: {
    icon: "🖥️",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "ShadCN-UI", "Responsive Design"],
  },
  Backend: {
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Flask", "FastAPI", "Python"],
  },
  Databases: {
    icon: "🗄️",
    skills: ["MongoDB", "Schema Design", "Query Optimization", "MySQL", "SQLite"],
  },
  "AI / LLM": {
    icon: "🤖",
    skills: ["LangChain", "LangGraph", "RAG Architecture", "OpenAI API", "Gemini API", "Pinecone", "ChromaDB", "HuggingFace Embeddings", "Prompt Engineering"],
  },
  "Tools & DevOps": {
    icon: "🛠️",
    skills: ["Git", "GitHub", "Docker", "Postman", "Google OAuth", "CI/CD Workflows"],
  },
  "Core CS": {
    icon: "🧠",
    skills: ["Data Structures & Algorithms", "OOP", "System Design", "Database Design"],
  },
};

export const PROJECTS = [
  {
    id: "wealthwise",
    title: "WealthWise",
    tagline: "AI Financial Planning Platform",
    description:
      "A full-stack financial web app that helps users track expenses, set goals, and receive AI-powered budget recommendations — built and shipped to real users.",
    metrics: ["50+ active users", "99.9% uptime", "10 Indian languages"],
    contributions: [
      "Architected full MERN stack from scratch (Next.js + Node.js + MongoDB)",
      "Integrated Gemini AI API for personalised financial recommendations",
      "Built secure Google OAuth + OTP authentication system",
      "Added multilingual support for 10 Indian languages (+60% accessibility)",
      "Designed scalable MongoDB schemas and reusable React component library",
    ],
    stack: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Tailwind CSS"],
    liveUrl: "https://www.mywealthwise.in",
    githubUrl: "https://github.com/akashvishwakarma",
    status: "live",
    featured: true,
  },
  {
    id: "ai-agent",
    title: "AI Agent — Chat-with-Data",
    tagline: "Production-Grade RAG System",
    description:
      "A production-grade RAG (Retrieval-Augmented Generation) system that answers natural language queries over custom datasets with semantic search and context-aware responses.",
    metrics: ["End-to-end RAG pipeline", "Multi-step reasoning", "REST API exposed"],
    contributions: [
      "Built end-to-end RAG pipeline: ingestion → chunking → embedding → retrieval",
      "Integrated LangGraph for multi-step reasoning and workflow orchestration",
      "Used Pinecone + ChromaDB for vector database retrieval",
      "Applied prompt engineering to reduce hallucinations",
      "Exposed full system via REST APIs for real-world integration",
    ],
    stack: ["LangChain", "LangGraph", "Node.js", "Pinecone", "ChromaDB", "OpenAI API", "Gemini API"],
    liveUrl: null,
    githubUrl: "https://github.com/akashvishwakarma",
    status: "dev",
    featured: false,
  },
  {
    id: "praman-ai",
    title: "PRAMAN.AI",
    tagline: "Climate Displacement Intelligence System",
    description:
      "A real-time climate displacement tracking and risk assessment system built under 24-hour hackathon conditions. Won 1st place at TECH ZEPHYR 2026.",
    metrics: ["1st Place — CodeByte 2.0", "24-hour build", "Real-time tracking"],
    contributions: [
      "Built real-time climate displacement tracking system",
      "Developed risk assessment algorithms under hackathon constraints",
      "Delivered full working prototype in 24 hours",
    ],
    stack: ["React.js", "Node.js", "Python", "FastAPI", "MongoDB"],
    liveUrl: null,
    githubUrl: "https://github.com/akashvishwakarma",
    status: "dev",
    award: "🏆 1st Place — CodeByte 2.0 · TECH ZEPHYR 2026",
    featured: false,
  },
  {
    id: "memewarzz",
    title: "Memewarzz",
    tagline: "Production Social Media Platform",
    description:
      "A production MERN stack social media platform built and deployed as part of a 4-engineer agile team during internship at AIBI Street Pvt. Ltd.",
    metrics: ["+35% user engagement", "-40% query latency", "10+ REST endpoints"],
    contributions: [
      "Contributed to Next.js + Node.js + MongoDB architecture",
      "Optimised UI and component architecture → +35% user engagement",
      "Engineered MongoDB indexing strategies → -40% query response time",
      "Developed 10+ RESTful API endpoints with validation and rate limiting",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "React.js", "Git"],
    liveUrl: null,
    githubUrl: "https://github.com/akashvishwakarma",
    status: "dev",
    note: "Built during internship at AIBI Street Pvt. Ltd.",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    id: "aibi",
    role: "Full-Stack Developer Intern",
    company: "AIBI Street Pvt. Ltd.",
    location: "Remote",
    duration: "Jan 2024 – Aug 2024",
    period: "8 months",
    bullets: [
      "Built and deployed Memewarzz — production MERN platform boosting engagement by 35%",
      "Engineered MongoDB schemas with advanced indexing → 40% query time reduction",
      "Developed 10+ RESTful API endpoints (validation, error handling, rate limiting) → 99.9% uptime",
      "Collaborated in 4-engineer agile team with peer code reviews and Git/CI-CD workflows",
    ],
  },
  {
    id: "sumago",
    role: "Software Development Intern",
    company: "Sumago Infotech Pvt. Ltd.",
    location: "On-site",
    duration: "July 2023 – Aug 2023",
    period: "2 months",
    bullets: [
      "Completed intensive programme on LMS architecture, SDLC, and full-stack workflows",
      "Improved code quality by 25% via systematic testing and debugging under senior mentorship",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.E. in Computer Engineering",
    grade: "CGPA: 9.0",
    institution: "SIES Graduate School of Technology, Navi Mumbai",
    duration: "2024 – Present",
    expected: "Expected: 2027",
  },
  {
    degree: "Diploma in Computer Engineering",
    grade: "90%",
    institution: "Government Polytechnic, Thane",
    duration: "2022 – 2024",
  },
];

export const ACHIEVEMENTS = [
  {
    id: "codebyte",
    icon: "🥇",
    title: "1st Place — CodeByte 2.0",
    event: "TECH ZEPHYR 2026 Hackathon (24 hours)",
    description: "Built PRAMAN.AI — climate displacement intelligence system",
    highlight: true,
  },
  {
    id: "pitchcraft",
    icon: "🥇",
    title: "1st Place — PitchCraft 2025",
    event: "E-Cell SIESGST Entrepreneurship Competition",
    description: "Pitched WealthWise among 50+ competing teams",
    highlight: true,
  },
  {
    id: "sih",
    icon: "🏆",
    title: "Grand Finalist — Smart India Hackathon 2025",
    event: "Top 5 Nationwide from 500+ teams",
    description: "Built crowdsourced ocean hazard platform under Ministry of Earth Sciences",
    highlight: true,
  },
  {
    id: "techstar",
    icon: "⭐",
    title: "Technical Star Award",
    event: "SIES GST (AY 2025–26)",
    description: "Recognised for exemplary academic and technical excellence",
    highlight: false,
  },
  {
    id: "eureka",
    icon: "🚀",
    title: "Eureka! 2025 Pre-Zonal — IIT Bombay",
    event: "IIT Bombay Entrepreneurship Cell",
    description: "Shortlisted to pitch WealthWise before startup mentors and industry judges",
    highlight: false,
  },
  {
    id: "anveshana",
    icon: "🔬",
    title: "Anveshana Science & Engineering Fair 2025",
    event: "National Science Fair",
    description: "Selected Top 40 from 1,300+ national entries",
    highlight: false,
  },
];

export const NAV_LINKS = [
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const TERMINAL_LINES = [
  { type: "comment", text: "// Initializing core engineering systems..." },
  { type: "plain", text: "import { MERNStack } from '@akash/architecture';" },
  { type: "plain", text: "import { AIEngine } from '@akash/intelligence';" },
  { type: "blank", text: "" },
  { type: "keyword", text: "async function bootSequence() {" },
  { type: "plain", text: "  await MERNStack.deploy({ scalability: 'maximum' });" },
  { type: "plain", text: "  await AIEngine.initialize({ pipeline: 'RAG' });" },
  { type: "plain", text: "  return { status: 'Online', uptime: '99.9%' };" },
  { type: "plain", text: "}" },
  { type: "blank", text: "" },
  { type: "comment", text: "// Systems ready. Awaiting deployment instructions." },
];
