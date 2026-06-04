export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "Flutter", level: 95, icon: "SiFlutter", color: "#54C5F8" },
  { name: "Dart", level: 92, icon: "SiDart", color: "#00B4AB" },
  { name: "Firebase", level: 88, icon: "SiFirebase", color: "#FFCA28" },
  { name: "State Management", level: 90, icon: "SiRedux", color: "#764ABC" },
  { name: "REST API", level: 85, icon: "SiPostman", color: "#FF6C37" },
  { name: "Git & GitHub", level: 88, icon: "SiGit", color: "#F05032" },
];

export const techBadges = [
  "Flutter", "Dart", "Firebase", "REST API", "Provider",
  "GetX", "Bloc", "Riverpod", "Git", "GitHub",
  "Android", "iOS", "Node.js", "React",
];

export const services = [
  {
    title: "Flutter App Development",
    description: "Cross-platform mobile apps with a single codebase. Beautiful UI, native performance on Android & iOS.",
    icon: "SiFlutter",
    color: "#54C5F8",
  },
  {
    title: "Android App Development",
    description: "Native-quality Android applications optimized for performance, stability and Play Store deployment.",
    icon: "SiAndroid",
    color: "#3DDC84",
  },
  {
    title: "iOS App Development",
    description: "Polished iOS experiences following Apple Human Interface Guidelines and App Store standards.",
    icon: "SiApple",
    color: "#A2AAAD",
  },
  {
    title: "Firebase Integration",
    description: "Authentication, Firestore, Storage, Push Notifications, Analytics and more — seamlessly integrated.",
    icon: "SiFirebase",
    color: "#FFCA28",
  },
  {
    title: "API Integration",
    description: "Connect your app to any REST or GraphQL API. Clean architecture with proper error handling.",
    icon: "SiPostman",
    color: "#FF6C37",
  },
  {
    title: "App Maintenance & Bug Fixing",
    description: "Keep your app healthy. Performance audits, crash fixes, dependency updates, and ongoing support.",
    icon: "MdBugReport",
    color: "#EF4444",
  },
  {
    title: "UI from Figma to Flutter",
    description: "Pixel-perfect Flutter UI implementation from Figma or any design file with smooth animations.",
    icon: "SiFigma",
    color: "#F24E1E",
  },
];

export const projects = [
  {
    title: "ShopEase — E-Commerce App",
    description: "Full-featured e-commerce app with product catalog, cart, Stripe payments, order tracking, and admin panel.",
    tags: ["Flutter", "Firebase", "API", "GetX"],
    image: null,
    category: ["Flutter", "Firebase", "API"],
    github: "https://github.com/tejashpatel",
    demo: null,
    color: "#3b82f6",
  },
  {
    title: "FitTrack — Fitness Tracker",
    description: "Workout planner with progress tracking, custom routines, health stats, and Google Fit integration.",
    tags: ["Flutter", "Firebase", "Riverpod"],
    image: null,
    category: ["Flutter", "Firebase"],
    github: "https://github.com/tejashpatel",
    demo: null,
    color: "#8b5cf6",
  },
  {
    title: "ChatSphere — Messaging App",
    description: "Real-time chat with end-to-end encryption, media sharing, group channels, and push notifications.",
    tags: ["Flutter", "Firebase", "Bloc"],
    image: null,
    category: ["Flutter", "Firebase"],
    github: "https://github.com/tejashpatel",
    demo: null,
    color: "#00f5d4",
  },
  {
    title: "NewsFlow — News Aggregator",
    description: "Personalized news app consuming NewsAPI with category filters, bookmarks, and offline reading.",
    tags: ["Flutter", "API", "Provider"],
    image: null,
    category: ["Flutter", "API"],
    github: "https://github.com/tejashpatel",
    demo: null,
    color: "#f59e0b",
  },
  {
    title: "TaskMaster — Project Management",
    description: "Team task manager with real-time sync, file attachments, notifications, and role-based access.",
    tags: ["Flutter", "Firebase", "API"],
    image: null,
    category: ["Flutter", "Firebase", "API"],
    github: "https://github.com/tejashpatel",
    demo: null,
    color: "#10b981",
  },
  {
    title: "FoodNow — Food Delivery",
    description: "On-demand food delivery app with live order tracking, restaurant discovery, and payment gateway.",
    tags: ["Flutter", "API", "GetX"],
    image: null,
    category: ["Flutter", "API"],
    github: "https://github.com/tejashpatel",
    demo: null,
    color: "#ef4444",
  },
];

export const experience = [
  {
    role: "Senior Flutter Developer",
    company: "TechNova Solutions",
    duration: "Jan 2023 – Present",
    type: "Full-time",
    responsibilities: [
      "Lead development of 3 production Flutter apps with 50k+ combined downloads",
      "Architected clean code structure using Bloc + Clean Architecture pattern",
      "Integrated Firebase Auth, Firestore, Cloud Functions and Push Notifications",
      "Mentored 2 junior developers and conducted weekly code reviews",
      "Reduced app crash rate by 40% through systematic debugging and testing",
    ],
  },
  {
    role: "Flutter Developer",
    company: "AppCraft Studio",
    duration: "Jun 2021 – Dec 2022",
    type: "Full-time",
    responsibilities: [
      "Built 6+ cross-platform Flutter apps for international clients",
      "Implemented complex UI designs from Figma with pixel-perfect accuracy",
      "Integrated REST APIs, payment gateways (Stripe, Razorpay), and maps",
      "Managed app deployment to Google Play Store and Apple App Store",
      "Collaborated in Agile teams using Jira, Git, and CI/CD pipelines",
    ],
  },
  {
    role: "Junior Mobile Developer",
    company: "Freelance",
    duration: "Jan 2020 – May 2021",
    type: "Freelance",
    responsibilities: [
      "Developed 10+ Flutter projects for startups and small businesses",
      "Learned Flutter ecosystem deeply — state management, animations, testing",
      "Built strong client relationships with clear communication and timely delivery",
      "Created reusable widget libraries to speed up development workflows",
    ],
  },
];

export const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, StartupX India",
    avatar: "AM",
    rating: 5,
    text: "Tejash delivered our e-commerce app ahead of schedule. The code quality is exceptional and the UI is exactly what we envisioned. Highly recommend for any serious Flutter project.",
    color: "#3b82f6",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager, FitLife UK",
    avatar: "SW",
    rating: 5,
    text: "Outstanding work on our fitness tracking app. Tejash understood our requirements perfectly, implemented complex features cleanly, and was always responsive. Will hire again.",
    color: "#8b5cf6",
  },
  {
    name: "Rahul Sharma",
    role: "Co-founder, TaskFlow",
    avatar: "RS",
    rating: 5,
    text: "Professional, communicative, and technically excellent. Our project management app has zero crashes in production. Tejash's clean architecture made future updates a breeze.",
    color: "#00f5d4",
  },
  {
    name: "Emily Chen",
    role: "CTO, DeliverFast",
    avatar: "EC",
    rating: 5,
    text: "We needed a complex delivery app in 2 months. Tejash delivered a pixel-perfect, performant app with live tracking, payments, and notifications. Incredible execution.",
    color: "#f59e0b",
  },
];

export const whyHireMe = [
  {
    title: "Clean Architecture",
    description: "SOLID principles, separation of concerns, and testable code that scales as your business grows.",
    icon: "MdArchitecture",
    color: "#3b82f6",
  },
  {
    title: "Scalable Code",
    description: "Production-ready patterns using Bloc, Clean Architecture, and modular design for long-term maintainability.",
    icon: "MdCode",
    color: "#8b5cf6",
  },
  {
    title: "Fast Delivery",
    description: "Agile development with daily updates. I ship faster without compromising quality or testing.",
    icon: "MdRocketLaunch",
    color: "#00f5d4",
  },
  {
    title: "Clear Communication",
    description: "Daily progress updates, proactive problem reporting, and transparent timelines. No surprises.",
    icon: "MdChat",
    color: "#f59e0b",
  },
  {
    title: "App Store Expertise",
    description: "Full deployment experience on both Google Play Store and Apple App Store — from setup to approval.",
    icon: "MdStorefront",
    color: "#10b981",
  },
  {
    title: "Post-Launch Support",
    description: "I don't disappear after delivery. Bug fixes, updates, and improvements included post-launch.",
    icon: "MdSupportAgent",
    color: "#ef4444",
  },
];
