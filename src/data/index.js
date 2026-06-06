export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "Flutter", level: 88, icon: "SiFlutter", color: "#54C5F8" },
  { name: "Dart", level: 85, icon: "SiDart", color: "#00B4AB" },
  { name: "MySQL", level: 70, icon: "SiMysql", color: "#4479A1" },
  { name: "PHP / Laravel", level: 65, icon: "SiLaravel", color: "#FF2D20" },
  { name: "REST API", level: 80, icon: "SiPostman", color: "#FF6C37" },
  { name: "Git & GitHub", level: 75, icon: "SiGit", color: "#F05032" },
  { name: "Firebase", level: 88, icon: "SiFirebase", color: "#FFCA28" },
  { name: "State Management", level: 90, icon: "SiRedux", color: "#764ABC" },
  { name: "Provider", level: 85, icon: "SiPostman", color: "#FF6C37" },
  { name: "Git & GitHub", level: 88, icon: "SiGit", color: "#F05032" },
];

export const techBadges = [
  "Flutter", "Dart", "Hive", "REST API", "Provider",
  "MySQL", "PHP", "Laravel", "Git", "GitHub",
  "Android Studio", "Java", ".NET", "VB.NET", "Twig",
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
    title: "Firebase Integration",
    description: "Authentication, Firestore, Storage, Push Notifications, Analytics and more — seamlessly integrated.",
    icon: "SiFirebase",
    color: "#FFCA28",
  },
  {
    title: "REST API Integration",
    description: "Connect your app to any REST API with clean architecture, proper error handling and offline support.",
    icon: "SiPostman",
    color: "#FF6C37",
  },
  {
    title: "UI from Figma to Flutter",
    description: "Pixel-perfect Flutter UI implementation from Figma or any design file with smooth animations.",
    icon: "SiFigma",
    color: "#F24E1E",
  },
  {
    title: "App Maintenance & Bug Fixing",
    description: "Performance audits, crash fixes, dependency updates, and ongoing support for your Flutter app.",
    icon: "MdBugReport",
    color: "#EF4444",
  },
];

export const projects = [
  {
    title: "Kitchen Hive — Cloud Kitchen",
    description:
      "A user-friendly food ordering platform connecting customers with independent kitchen store owners. Features customized ordering, scheduled pick-ups, store browsing, recipe discovery, and an admin dashboard to manage users, store approvals, menu listings, and order tracking.",
    tags: ["Flutter", "Dart", "REST API", "Provider"],
    image: null,
    category: ["Flutter", "API"],
    github: "https://github.com/tejptl29",
    demo: null,
    color: "#FF6C37",
  },
  {
    title: "FoodChow POS System",
    description:
      "A Point of Sale system for restaurants featuring order flow management, cart logic, offline data caching with Hive, and REST API integration. Built with Provider for state management.",
    tags: ["Flutter", "Hive", "Provider", "REST API"],
    image: null,
    category: ["Flutter", "API"],
    github: "https://github.com/tejptl29",
    demo: null,
    color: "#3b82f6",
  },
  {
    title: "Customer App",
    description:
      "A responsive customer-facing mobile app built with Flutter & Dart featuring a clean UI, seamless navigation, and real-time data from REST APIs.",
    tags: ["Flutter", "Dart", "REST API"],
    image: null,
    category: ["Flutter", "API"],
    github: "https://github.com/tejptl29",
    demo: null,
    color: "#8b5cf6",
  },
];

export const experience = [
  {
    role: "Software Developer (Flutter)",
    company: "Tenacious Techies",
    duration: "July 2025 – Present",
    type: "Full-time · 6 Months",
    responsibilities: [
      "Working as a Flutter Developer on production mobile applications.",
      "Developed Customer App using Flutter & Dart with responsive UI.",
      "Implemented Hive database for offline storage and caching.",
      "Working on FoodChow POS system — order flow and cart logic.",
      "Integrated REST APIs, managed state using Provider, and fixed production bugs.",
      "Improved debugging, UI responsiveness, and clean coding skills.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Applications (MSC-CA)",
    institution: "SDJ International College",
    year: "Completed",
    grade: "CGPA 9.28 · SGPA 9.94",
    type: "Postgraduate",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Vivekanand College For Advance Computer & Information Science",
    year: "2021 – 2024",
    grade: "7.38 CGPA",
    type: "Undergraduate",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Sanskar Bharti Vidhyalaya — GSHSEB",
    year: "2021",
    grade: "61.14%",
    type: "Secondary",
  },
];

export const whyHireMe = [
  {
    title: "Clean Code",
    description: "I write readable, maintainable code following clean architecture principles and separation of concerns.",
    icon: "MdCode",
    color: "#3b82f6",
  },
  {
    title: "Fast Learner",
    description: "Gained hands-on Flutter experience rapidly through real-world production apps at Tenacious Techies.",
    icon: "MdRocketLaunch",
    color: "#00f5d4",
  },
  {
    title: "Problem Solver",
    description: "Experience debugging production bugs, improving UI responsiveness, and fixing crashes under pressure.",
    icon: "MdBugReport",
    color: "#ef4444",
  },
  {
    title: "Clear Communication",
    description: "Proactive updates, transparent timelines, and collaborative approach to delivering on requirements.",
    icon: "MdChat",
    color: "#f59e0b",
  },
  {
    title: "Offline-First Thinking",
    description: "Practical experience with Hive for offline caching, ensuring apps work reliably without connectivity.",
    icon: "MdStorefront",
    color: "#10b981",
  },
  {
    title: "Available to Work",
    description: "Currently open to freelance projects alongside my role. Quick to onboard and deliver.",
    icon: "MdSupportAgent",
    color: "#8b5cf6",
  },
];
