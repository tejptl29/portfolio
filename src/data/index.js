export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { num: "1+", label: "Year Experience", sub: "Building production Flutter apps" },
  { num: "8+", label: "Projects Built", sub: "Enterprise & client solutions" },
  { num: "3+", label: "Production Apps", sub: "Active in real business use" },
  { num: "100%", label: "Code Quality", sub: "Clean architecture & offline sync" },
];

export const skillsCategories = [
  {
    category: "Mobile Development",
    description: "Cross-platform mobile applications for Android & iOS",
    skills: ["Flutter", "Dart", "Provider", "Android", "iOS", "Responsive UI", "Material Design"],
  },
  {
    category: "Storage & Offline Sync",
    description: "High-speed local persistence and offline reliability",
    skills: ["Hive Database", "SQLite", "Shared Preferences", "Offline Caching"],
  },
  {
    category: "APIs & Networking",
    description: "RESTful integration and structured data workflows",
    skills: ["REST APIs", "JSON Parsing", "HTTP / Dio", "Postman", "JWT Authentication"],
  },
  {
    category: "Firebase & Cloud",
    description: "Cloud authentication, notifications, and datastores",
    skills: ["Firebase Auth", "FCM Push Notifications", "Cloud Firestore", "Crashlytics"],
  },
  {
    category: "Developer Tools",
    description: "Daily version control and IDE workflows",
    skills: ["Git & GitHub", "Android Studio", "VS Code", "Figma", "DevTools"],
  },
  {
    category: "Core Practices",
    description: "Software engineering standards and code quality",
    skills: ["Clean Architecture", "Debugging & Bug Fixing", "Code Optimization", "State Management"],
  },
];

export const techBadges = [
  "Flutter", "Dart", "Hive", "REST API", "Provider",
  "Firebase", "FCM", "Git", "GitHub", "Android Studio",
  "Figma", "JSON", "AI Integration", "Dynamic QR",
];

export const projects = [
  {
    id: "kitchen-hive",
    title: "Kitchen Hive — Cloud Kitchen Platform",
    subtitle: "End-to-End Food Ordering & Kitchen Store Ecosystem",
    badge: "Featured Production App",
    isFeatured: true,
    image: "/projects/kitchen_hive.jpg",
    problemSummary: "Independent cloud kitchens lacked a dedicated mobile solution to manage custom preparation times and direct orders without heavy commission cuts.",
    solutionSummary: "Engineered a dual-facing Flutter application with scheduled pick-up windows, dynamic QR check-ins, and a responsive merchant kitchen dashboard.",
    impactSummary: "Enabled 20+ cloud kitchen chefs to operate direct orders, reducing order processing bottlenecks by 40%.",
    description:
      "A complete food ordering platform connecting customers with independent cloud kitchens. Features customized ordering, scheduled pick-ups, store browsing, recipe discovery, and a merchant dashboard to manage store approvals, menus, and real-time order tracking.",
    theProblem:
      "Independent cloud kitchens faced high 30%+ commission fees on generic aggregators and lacked a dedicated mobile ordering experience. Operators struggled with managing variable preparation times, scheduled bulk pickups, and updating dynamic menus in real time without engineering support.",
    theSolution:
      "Engineered an intuitive, dual-facing cross-platform Flutter application featuring custom ordering pipelines, automated pickup scheduling, dynamic QR check-in workflows, and a merchant management portal for real-time kitchen tracking.",
    architectureSteps: [
      { label: "Flutter Client UI", desc: "Responsive cross-platform widgets with sub-100ms transitions" },
      { label: "Provider State Layer", desc: "Centralized cart, store catalog, and order pipeline models" },
      { label: "REST API & Dio", desc: "Token-authenticated networking with automated retry and refresh" },
      { label: "Cloud Kitchen Backend", desc: "Live menu database, kitchen order dispatch, and merchant metrics" },
    ],
    architecture: "Flutter UI ➔ Provider State Layer ➔ REST API Service ➔ Cloud Kitchen Backend",
    keyFeatures: [
      "Custom meal ordering with pre-scheduled pick-up time windows",
      "Dynamic recipe discovery with one-tap ingredient cart additions",
      "Merchant store dashboard for real-time kitchen order preparation",
      "Dynamic QR code workflow for seamless contactless counter verification",
      "Memory-efficient cached images delivering silky 60fps scrolling",
    ],
    challenges: [
      "Handling real-time synchronization between customer pickup timers and merchant preparation queues without battery drain.",
      "Ensuring persistent cart data surviving phone restarts and accidental app closures.",
    ],
    myContribution:
      "Architected the entire Flutter mobile frontend, implemented reactive Provider state management, integrated all REST endpoints with Dio, and built the dynamic QR check-in workflow.",
    results: "Enabled 20+ cloud kitchen chefs to operate direct orders, reducing order processing bottlenecks by 40%.",
    tags: ["Flutter", "Dart", "REST API", "Provider", "Dynamic QR", "Figma"],
    github: "https://github.com/tejptl29",
    demo: null,
    color: "#FF6C37",
  },
  {
    id: "foodchow-pos",
    title: "FoodChow POS System",
    subtitle: "Offline-First Restaurant Point of Sale & Order Engine",
    badge: "Enterprise POS",
    isFeatured: false,
    image: "/projects/foodchow_pos.jpg",
    problemSummary: "Spotty Wi-Fi during peak restaurant rushes caused dropped orders, duplicate billing tickets, and frustrated staff.",
    solutionSummary: "Architected an offline-first mobile architecture with Hive local database, ensuring zero-latency cart operations and background cloud sync.",
    impactSummary: "Guaranteed 100% order retention during connectivity blackouts with sub-50ms item addition speed.",
    description:
      "A high-reliability Point of Sale (POS) system engineered for restaurants and food outlets, featuring rapid order entry, custom cart logic, offline transaction caching with Hive, and instant cloud sync.",
    theProblem:
      "Busy restaurants frequently encounter Wi-Fi drops during peak service hours. Conventional cloud POS apps froze or dropped active tickets, causing lost kitchen orders, billing disputes, and delayed service.",
    theSolution:
      "Architected an offline-first POS engine powered by Hive local key-value database. Every cart modification and dining ticket persists locally with 0ms latency and automatically synchronizes with cloud REST APIs as soon as connection is re-established.",
    architectureSteps: [
      { label: "Flutter POS Tablet & Mobile", desc: "High-density touch grid with split billing and multi-table views" },
      { label: "Hive Local DB", desc: "0ms latency local persistence layer guaranteeing zero data loss" },
      { label: "Background Sync Worker", desc: "Automatic bidirectional delta synchronization with retry queues" },
      { label: "Restaurant Cloud API", desc: "Centralized kitchen inventory, sales reporting, and tax ledger" },
    ],
    architecture: "Flutter POS Client ➔ Hive Local Storage ➔ Background Sync Worker ➔ Restaurant Cloud API",
    keyFeatures: [
      "Zero-latency offline order capture & instant split-bill calculations",
      "Automatic bidirectional data sync using Hive local persistence",
      "Multi-table layout management with live dining state indicators",
      "Thermal kitchen printer pipeline generating formatted order receipts",
      "Provider-based reactive state architecture maintaining rock-solid 60fps",
    ],
    challenges: [
      "Resolving bidirectional merge conflicts when multiple POS devices update the same table offline.",
      "Driving hardware thermal receipt printers over Bluetooth and local network without blocking the main UI thread.",
    ],
    myContribution:
      "Engineered the Hive local persistence layer, designed the split-billing logic, built the POS dining table UI, and integrated background sync workers.",
    results: "Guaranteed 100% order retention during connectivity blackouts with sub-50ms item addition speed.",
    tags: ["Flutter", "Hive DB", "Offline-First", "Provider", "REST API", "Hardware Print"],
    github: "https://github.com/tejptl29",
    demo: null,
    color: "#3b82f6",
  },
  {
    id: "smart-restaurant-ai",
    title: "Smart Restaurant App with AI Menu Processing",
    subtitle: "AI-Powered Menu Extraction & FCM Targeted Messaging",
    badge: "AI & Automation",
    isFeatured: false,
    image: null,
    problemSummary: "Onboarding new restaurants required hours of manual menu entry — typing dish names, descriptions, allergens, and pricing by hand.",
    solutionSummary: "Built a document and camera capture pipeline that extracts menu items through an AI parsing service directly into normalized models.",
    impactSummary: "Reduced menu onboarding time by 75% while boosting repeat orders by 22% via targeted FCM push alerts.",
    description:
      "A modern restaurant platform built with Flutter that automates manual restaurant onboarding by parsing menu PDFs and photos through an AI pipeline, integrated with Firebase Cloud Messaging for targeted customer engagement.",
    theProblem:
      "Restaurant owners often handed over messy physical flyers or multi-page PDF menus. Manually converting these into a digital app took up to 4 hours per venue, introducing typos and slowing merchant onboarding.",
    theSolution:
      "Created an automated document processing pipeline. Restaurant owners simply snap photos or upload PDF menus; an AI extraction service parses the text into structured JSON models ready for instant review and 1-tap publishing.",
    architectureSteps: [
      { label: "Flutter Camera / File Ingestion", desc: "High-resolution camera capture and multi-page PDF picker" },
      { label: "AI Parsing Pipeline", desc: "Document OCR and entity extraction into structured menu schemas" },
      { label: "Normalized Models Layer", desc: "Auto-categorized dishes, allergens, spice levels, and pricing" },
      { label: "Firebase & REST Cloud", desc: "Instant catalogue publishing and targeted FCM notification engine" },
    ],
    architecture: "Flutter Camera / File Picker ➔ AI Document Processing Pipeline ➔ Normalized JSON ➔ Firebase & REST",
    keyFeatures: [
      "AI OCR extraction converting flyers and PDFs into structured menus",
      "Targeted FCM push notification workflows with deep-link navigation",
      "Contactless QR code scanning for digital table-side menu browsing",
      "Real-time analytics dashboard tracking order frequency and popularity",
      "Multi-currency and multi-language menu localization support",
    ],
    challenges: [
      "Handling low-light mobile camera photos of laminated menus with heavy glare.",
      "Structuring unstructured multi-column PDF layouts into clean hierarchical dish models.",
    ],
    myContribution:
      "Built the camera capture and image upload workflow in Flutter, structured the menu model data layer, and integrated Firebase Cloud Messaging for targeted campaign notifications.",
    results: "Reduced manual menu onboarding time by 75% and improved customer re-engagement by 22%.",
    tags: ["Flutter", "Firebase", "FCM", "AI Pipeline", "REST API", "OCR"],
    github: "https://github.com/tejptl29",
    demo: null,
    color: "#00f5d4",
  },
  {
    id: "customer-app",
    title: "Production Customer Mobile App",
    subtitle: "High-Performance Consumer App with Responsive State",
    badge: "Production Client",
    isFeatured: false,
    image: null,
    problemSummary: "Consumers expect silky 60fps animations and sub-second catalog transitions across both budget Android and premium iOS phones.",
    solutionSummary: "Engineered clean layered architecture with Provider, memory-efficient image caching, debounced search, and optimistic UI updates.",
    impactSummary: "Maintained 60fps UI performance with sub-second API roundtrips and zero recorded memory leaks.",
    description:
      "A consumer-facing mobile application designed for fluid mobile commerce, featuring rich catalog discovery, persistent cart state, JWT token auth, and real-time order tracking.",
    theProblem:
      "Low-end Android devices experienced micro-stuttering and UI jank during rapid category switching and infinite scrolling on heavy food catalog screens.",
    theSolution:
      "Implemented clean layered architecture with custom widget rebuilding boundaries, debounced search indexing, cached network images, and optimistic UI rendering for immediate visual feedback.",
    architectureSteps: [
      { label: "Flutter Presentation Widgets", desc: "Strictly decoupled widgets maintaining 60fps smooth rendering" },
      { label: "Provider ViewModels", desc: "Optimistic cart mutations and responsive state orchestration" },
      { label: "Secure Storage & JWT", desc: "Encrypted token storage with silent auto-refresh mechanism" },
      { label: "REST Endpoints", desc: "Cached responses and efficient pagination pipelines" },
    ],
    architecture: "Flutter Widgets ➔ Provider ViewModels ➔ Secure Storage Token Auth ➔ REST Endpoints",
    keyFeatures: [
      "Fluid 60fps animations tested and benchmarked across diverse devices",
      "Persistent cart state surviving application restarts and phone reboots",
      "Secure token authentication with transparent auto-refresh lifecycle",
      "Live order progression timeline with animated status checkpoints",
      "Native-level gesture support and smooth micro-interactions",
    ],
    challenges: [
      "Eliminating unnecessary widget rebuilds during high-frequency cart quantity updates.",
      "Handling network timeouts gracefully with instant offline fallback states.",
    ],
    myContribution:
      "Architected the presentation and ViewModel layers, implemented the secure JWT token storage, optimized memory usage, and engineered the order timeline tracker.",
    results: "Maintained 60fps UI performance with sub-second API roundtrips and zero recorded memory leaks.",
    tags: ["Flutter", "Dart", "REST API", "Provider", "Clean UI", "JWT"],
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
    type: "Full-time · 1 Year",
    location: "Surat, Gujarat, India",
    impactStatement: "Delivered scalable mobile solutions for commercial restaurants and customer-facing businesses.",
    responsibilities: [
      "Built and maintained production Flutter mobile applications utilized by hundreds of commercial users daily.",
      "Architected offline-first local data synchronization using Hive DB, completely eliminating order loss during unstable Wi-Fi conditions.",
      "Developed the FoodChow POS interface, managing complex cart logic, multi-table tracking, and sub-100ms item search.",
      "Engineered customer-facing mobile applications with fluid 60fps UI, responsive state management via Provider, and clean architecture.",
      "Integrated dozens of REST API endpoints with robust error handling, token refresh lifecycle, and optimistic UI updates.",
      "Collaborated closely with cross-functional teams to squash production crashes, reducing app cold-start latency by 25%.",
    ],
    technologies: ["Flutter", "Dart", "Hive DB", "Provider", "REST APIs", "Git", "Postman", "Android Studio"],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Applications (MSC-CA)",
    institution: "SDJ International College",
    year: "Completed",
    grade: "CGPA 9.28 · SGPA 9.94",
    type: "Postgraduate Degree",
    highlights: "Advanced software engineering, distributed systems, mobile application paradigms, and cloud architectures.",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Vivekanand College For Advance Computer & Information Science",
    year: "2021 – 2024",
    grade: "7.38 CGPA",
    type: "Undergraduate Degree",
    highlights: "Core computer science fundamentals, data structures, object-oriented programming, and relational databases.",
  },
];

export const howIWork = [
  {
    number: "01",
    title: "Clean Architecture",
    description:
      "I write maintainable, scalable Flutter code with clean separation between UI presentation, Provider state management, and data repositories for seamless long-term maintenance.",
    icon: "MdCode",
    color: "#3b82f6",
  },
  {
    number: "02",
    title: "Problem-First Mindset",
    description:
      "I don't just write code — I first understand the business bottleneck, user pain points, and edge cases to engineer the most efficient and scalable solution.",
    icon: "MdRocketLaunch",
    color: "#00f5d4",
  },
  {
    number: "03",
    title: "Production Resilience",
    description:
      "I build mobile features with real-world failure states in mind: spotty networks, battery efficiency, offline caching with Hive, and zero-jank 60fps rendering.",
    icon: "MdBugReport",
    color: "#ef4444",
  },
  {
    number: "04",
    title: "Offline-First Synchronization",
    description:
      "Deep hands-on experience structuring local databases that keep apps fast and fully usable without active internet, auto-syncing when connectivity resumes.",
    icon: "MdStorefront",
    color: "#10b981",
  },
  {
    number: "05",
    title: "Pixel-Perfect Figma to Flutter",
    description:
      "Translating complex Figma designs into responsive Flutter widget trees with custom animations, intuitive micro-interactions, and accessible typography.",
    icon: "MdSupportAgent",
    color: "#8b5cf6",
  },
  {
    number: "06",
    title: "Clear Communication",
    description:
      "Proactive progress updates, clean pull requests, transparent roadmaps, and a collaborative mindset that makes pair-programming and client handoffs seamless.",
    icon: "MdChat",
    color: "#f59e0b",
  },
];
