// Portfolio items data
export const portfolioItems = [
  {
    id: 1,
    slug: 'visit-rage',
    title: 'VisitRage',
    category: 'web',
    image: '/assets/img/portfolio/visit-rage.png',
    detailPage: '/portfolio/visit-rage',
  },
  {
    id: 2,
    slug: 'lo-publications',
    title: 'LO Publications',
    category: 'product',
    image: '/assets/img/portfolio/LO-publications.png',
    detailPage: '/portfolio/lo-publications',
  },
  {
    id: 3,
    slug: 'isaac-oyedepo',
    title: 'Anazao Generation Connect',
    category: 'branding',
    image: '/assets/img/portfolio/isaac.png',
    detailPage: '/portfolio/isaac-oyedepo',
  },
  {
    id: 4,
    slug: 'spiritual-woman',
    title: 'The Spiritual Woman Fellowship',
    category: 'books',
    image: '/assets/img/portfolio/spiritual.png',
    detailPage: '/portfolio/spiritual-woman',
  },
  {
    id: 5,
    slug: 'vdp',
    title: 'Villas de Paradis',
    category: 'app',
    image: '/assets/img/portfolio/vdp.png',
    detailPage: '/portfolio/vdp',
  },
  {
    id: 6,
    slug: 'yiaiki',
    title: 'YiAiki',
    category: 'books',
    image: '/assets/img/portfolio/yiaiki.png',
    detailPage: '/portfolio/yiaiki',
  },
]

// Skills data
export const skills = [
  { name: 'JavaScript', percentage: 85 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'Node.js/Express.js', percentage: 85 },
  { name: 'Nest.js', percentage: 90 },
  { name: 'React.js', percentage: 80 },
  { name: 'Next.js', percentage: 75 },
  { name: 'Python', percentage: 80 },
  { name: 'Django', percentage: 70 },
  { name: 'Git/Github', percentage: 90 },
  { name: 'Microservices', percentage: 70 },
  { name: 'Docker', percentage: 70 },
  { name: 'MySQL', percentage: 90 },
  { name: 'PostgreSQL', percentage: 90 },
  { name: 'MongoDB', percentage: 80 },
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'Bootstrap', percentage: 99 },
  { name: 'Tailwind CSS', percentage: 90 },
  { name: 'WordPress', percentage: 85 },
  { name: 'SEO', percentage: 80 },
  { name: 'Sass', percentage: 90 },
  { name: 'Microsoft Office Suite', percentage: 100 },
]

// Stats data
export const stats = [
  { icon: 'bi-calendar', value: 5, label: 'Years', sublabel: 'of experience' },
  { icon: 'bi-file-code', value: 89, label: 'Projects', sublabel: 'worked on' },
  { icon: 'bi-emoji-smile', value: 30, label: 'Clients', sublabel: 'satisfied' },
]

// Services data
export const services = [
  {
    icon: 'bi-code',
    title: 'Web Development',
    description: 'I craft modern, responsive, and user-friendly websites that are tailored specifically to meet your unique needs and objectives. By utilizing the latest web technologies and design trends, I ensure that each website is visually appealing, easy to navigate, and performs seamlessly across all devices and screen sizes.',
  },
  {
    icon: 'bi-wrench',
    title: 'Website Management',
    description: 'I provide comprehensive ongoing maintenance, regular updates, and performance optimization for your website to ensure it continues to run smoothly, efficiently, and securely. This includes monitoring for any potential issues, fixing bugs, and keeping all software and plugins up-to-date to prevent security vulnerabilities.',
  },
  {
    icon: 'bi-headphones',
    title: 'Technical Support',
    description: 'I provide expert technical support, offering assistance in troubleshooting and resolving issues across a variety of systems. My goal is to ensure minimal downtime, optimize system performance, and maximize operational efficiency.',
  },
  {
    icon: 'bi-book',
    title: 'Mentorship and Training',
    description: 'I guide aspiring developers and tech enthusiasts through personalized coaching sessions while delivering hands-on workshops and training programs. These sessions focus on enhancing technical skills, web development, and best practices in the tech industry, empowering individuals to grow and excel.',
  },
  {
    icon: 'bi-bar-chart',
    title: 'Digital Strategy Consultation',
    description: 'I provide expert guidance to help businesses develop and implement effective digital strategies, including online presence optimization, technology stack recommendations, and tailored solutions to achieve their goals.',
  },
  {
    icon: 'bi-search',
    title: 'SEO (Search Engine Optimization)',
    description: 'I provide SEO services to help improve your website\'s visibility, attract more organic traffic, and optimize your content for search engines. Through keyword research, on-page optimization, and strategic link-building, I ensure your website ranks higher in search results and reaches the right audience.',
  },
]

// Social links
export const socialLinks = [
  { name: 'twitter', url: 'https://twitter.com/andyjrii', icon: 'bi-twitter-x' },
  { name: 'facebook', url: 'https://facebook.com/asjames3', icon: 'bi-facebook' },
  { name: 'instagram', url: 'https://www.instagram.com/andyjr_ii', icon: 'bi-instagram' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/andyjr002', icon: 'bi-linkedin' },
  { name: 'github', url: 'https://github.com/andyjrII', icon: 'bi-github' },
]

// Project detail data
export const projectDetails = {
  'visit-rage': {
    title: 'VisitRage – Visitor Management System for Rage Media Group',
    role: 'Backend Developer (with minor frontend contributions)',
    timeline: 'November 25, 2024 – February 13, 2025',
    outcome:
      'Digitized and secured the entire visitor approval process, replacing manual gate calls with a structured backend-driven workflow.',
    summary:
      'VisitRage is a custom-built visitor management system for Rage Media Group designed to streamline guest approval, check-in, and check-out. It provides a secure approval pipeline, real-time visitor tracking, and automated access slip generation—replacing phone-based verification to improve efficiency, security, and accountability.',
    context: [
      'No prior visitor management; guests arrived unannounced and verification was manual via gate calls.',
      'No records of approvals, check-ins, or duration of visits; no pre-registration or approval mechanism.',
      'Goal: centralize pre-approval, eliminate gatehouse phone calls, track entry/exit, improve security, and provide real-time visibility of active visitors.',
    ],
    responsibilities: [
      'Designed backend architecture, endpoints, approval logic, and visitor lifecycle management.',
      'Implemented authentication (JWT), role-based access, and secure API routing.',
      'Built approval workflow: register → approve/reject → generate slip → check-in → check-out.',
      'Implemented real-time status tracking for active visitors.',
      'Integrated Prisma ORM; migrated from PostgreSQL (dev) to MySQL (production).',
      'API testing with Postman; collaborated with frontend for minor UI adjustments.',
      'Managed deployment pipelines and environment configs across Render (dev) and Namecheap (prod).',
      'Authored technical docs and supported internal testing/feedback loops.',
    ],
    stack: {
      frontend: ['React', 'Tailwind CSS'],
      backend: ['NestJS', 'REST API architecture', 'JWT Authentication', 'Role-based access control'],
      database: ['Prisma ORM', 'PostgreSQL (development)', 'MySQL (production)'],
      infra: ['Render (development/internal testing)', 'Namecheap (production hosting)'],
      tooling: ['Git', 'GitHub', 'Postman', 'Manual QA with internal stakeholders'],
    },
    challenges: [
      {
        title: 'No existing workflow for visitor approval',
        detail:
          'Built a complete backend approval pipeline to validate visitors, assign approval roles, and ensure only authorized individuals receive access slips.',
      },
      {
        title: 'Gatehouse reliance on phone calls and no visitor records',
        detail:
          'Developed check-in/check-out APIs that log visitor movements, generate time-stamped slips, and provide real-time visibility to staff dashboards.',
      },
      {
        title: 'Migrating from PostgreSQL (dev) to MySQL (production)',
        detail:
          'Used Prisma to abstract data access and streamline schema migration, ensuring smooth transition without breaking endpoints or business logic.',
      },
    ],
    results: [
      'Eliminated manual gate phone calls, reducing check-in time.',
      '100% traceability of visitor entries, approvals, and movements.',
      'Improved security via controlled approval and digital slip validation.',
      'Reduced administrative errors with centralized visitor records.',
      'Staff reported faster, more reliable workflows after pilot testing.',
    ],
    links: {
      demo: 'https://www.visitrage.com/',
      repo: 'Private',
    },
    gallery: [
      '/assets/img/portfolio/visit-rage.png',
      '/assets/img/portfolio/visit-rage1.png',
      '/assets/img/portfolio/visit-rage2.png',
      '/assets/img/portfolio/visit-rage3.png',
    ],
  },
  'lo-publications': {
    title: 'LO Publications',
    role: '',
    timeline: '',
    outcome: 'Case study coming soon.',
    summary: 'Detailed case study coming soon.',
    context: ['Details coming soon.'],
    responsibilities: ['Details coming soon.'],
    stack: {},
    challenges: [{ title: 'Details coming soon', detail: 'More information will be added here.' }],
    results: ['Details coming soon.'],
    links: {},
    gallery: [
      '/assets/img/portfolio/LO-publications.png',
      '/assets/img/portfolio/LO-publications1.png',
      '/assets/img/portfolio/LO-publications2.png',
    ],
  },
  'isaac-oyedepo': {
    title: 'Anazao Generation Connect',
    role: '',
    timeline: '',
    outcome: 'Case study coming soon.',
    summary: 'Detailed case study coming soon.',
    context: ['Details coming soon.'],
    responsibilities: ['Details coming soon.'],
    stack: {},
    challenges: [{ title: 'Details coming soon', detail: 'More information will be added here.' }],
    results: ['Details coming soon.'],
    links: {},
    gallery: ['/assets/img/portfolio/isaac.png', '/assets/img/portfolio/isaac1.png', '/assets/img/portfolio/isaac2.png'],
  },
  'spiritual-woman': {
    title: 'The Spiritual Woman Fellowship',
    role: '',
    timeline: '',
    outcome: 'Case study coming soon.',
    summary: 'Detailed case study coming soon.',
    context: ['Details coming soon.'],
    responsibilities: ['Details coming soon.'],
    stack: {},
    challenges: [{ title: 'Details coming soon', detail: 'More information will be added here.' }],
    results: ['Details coming soon.'],
    links: {},
    gallery: ['/assets/img/portfolio/spiritual.png', '/assets/img/portfolio/spiritual1.png', '/assets/img/portfolio/spiritual2.png'],
  },
  vdp: {
    title: 'Villas de Paradis',
    role: '',
    timeline: '',
    outcome: 'Case study coming soon.',
    summary: 'Detailed case study coming soon.',
    context: ['Details coming soon.'],
    responsibilities: ['Details coming soon.'],
    stack: {},
    challenges: [{ title: 'Details coming soon', detail: 'More information will be added here.' }],
    results: ['Details coming soon.'],
    links: {},
    gallery: ['/assets/img/portfolio/vdp.png', '/assets/img/portfolio/vdp1.png', '/assets/img/portfolio/vdp2.png'],
  },
  yiaiki: {
    title: 'YiAiki – On-Demand Errand Marketplace with Real-Time Chat, Bidding & Escrow',
    role: 'Full-Stack Developer / Indie Hacker',
    timeline: 'Feb 22, 2025 – Present (live, early testing)',
    outcome: 'Built a full errand marketplace with real-time chat, bidding, notifications, wallet, and escrow.',
    summary:
      'YiAiki is a multi-sided errand marketplace connecting users with student runners for shopping, deliveries, queue services, bill payments, and more. It includes bidding, wallet funding, escrow protection, and a real-time messaging layer (job-specific and general chats). Built end-to-end as a bootstrapped SaaS, currently live in early testing.',
    context: [
      'Create a modern errand platform where users post tasks and receive bids from verified runners.',
      'Add trust/safety via wallet + escrow; hold funds until tasks are completed.',
      'Provide real-time chat for the errand lifecycle; support multiple errand types (shopping, food, queues, documents, deliveries).',
      'Allow runners (students) to register with ID verification and school IDs; deliver notifications and email alerts.',
      'Lay foundation for future features (subscription errands, B2B services); deliver intuitive web/mobile-friendly UI.',
    ],
    responsibilities: [
      'Designed and implemented full backend: auth, roles, wallets, escrow logic, errand lifecycle, bidding, chat, notifications.',
      'Built the entire frontend (React + Vite): dashboards for users/runners, chat UI, errand creation, bid management.',
      'Integrated Socket.IO for real-time messaging, bid notifications, and unread counters.',
      'Developed wallet top-up, balance checks, escrow release workflows.',
      'Implemented secure file uploads (user images, runner IDs) via Cloudinary; email notifications via SendGrid.',
      'Managed infra, deployment, DB schema, cron jobs, monitoring; ongoing QA and iteration during early testing.',
    ],
    stack: {
      frontend: ['React', 'Vite', 'Tailwind CSS / custom CSS'],
      backend: ['NestJS', 'REST API', 'Socket.IO', 'JWT Authentication', 'Cron Jobs'],
      database: ['Supabase (PostgreSQL)', 'Prisma ORM'],
      devops: ['Render', 'GitHub (version control)', 'CI/CD & env config'],
      integrations: ['Cloudinary (file uploads)', 'SendGrid (email notifications)'],
      optional: ['Supabase (auth/session utilities if applicable)'],
    },
    challenges: [
      {
        title: 'Managing real-time chat and notifications across errand types',
        detail:
          'Built a dual-layer messaging system with Socket.IO for job-specific and general chats, unread counters, persistent history, and optimized broadcasts.',
      },
      {
        title: 'Preventing fraud and ensuring trust between users and runners',
        detail:
          'Implemented wallet + escrow: users fund wallet, funds lock on acceptance, release on completion—keeping transactions safe for both sides.',
      },
      {
        title: 'Complexity of dynamic bidding and runner selection',
        detail:
          'Designed a robust bidding model with validation, bid limits, duration estimates, and real-time updates in dashboards and chats.',
      },
    ],
    results: [
      'Launched early-testing version with end-to-end errand, bidding, wallet, and chat features.',
      'Early testers reported faster task fulfillment and significantly improved communication flow.',
      'Messaging layer reduced back-and-forth phone/WhatsApp by ~90%, keeping interactions in-platform.',
      'Wallet + escrow increased trust between users and runners during pilot.',
      'Opened a new income channel for student errand runners.',
    ],
    links: {
      demo: 'https://yiaiki-test.onrender.com/',
      repo: '',
      video: 'https://www.facebook.com/share/v/17XJbzSXDt/',
    },
    gallery: [
      '/assets/img/portfolio/yiaiki.png',
      '/assets/img/portfolio/yiaiki1.png',
      '/assets/img/portfolio/yiaiki2.png',
      '/assets/img/portfolio/yiaiki3.png',
    ],
  },
}

// Navigation items
export const navItems = [
  { name: 'Home', href: '#hero', icon: 'bi-house' },
  { name: 'About', href: '#about', icon: 'bi-person' },
  { name: 'Skills', href: '#skills', icon: 'bi-award' },
  { name: 'Resume', href: '#resume', icon: 'bi-file-earmark-text' },
  { name: 'Portfolio', href: '#portfolio', icon: 'bi-images' },
  { name: 'Services', href: '#services', icon: 'bi-hdd-stack' },
  { name: 'Contact', href: '#contact', icon: 'bi-envelope' },
]

// Personal info
export const personalInfo = {
  name: 'Andy James',
  title: 'Full-Stack Developer & Website Manager',
  phone: '+234 9063368647',
  whatsapp: '+234 9056539717',
  email: 'enehizenajames@gmail.com',
  city: 'Abuja, Nigeria',
  address: 'Lokogoma, Abuja, FCT',
  freelance: 'Available',
  profileImage: '/assets/img/my-profile-img.jpg',
  typedItems: [
    'Web Developer',
    'Website Manager',
    'SEO Specialist',
    'Technical Support Specialist',
    'Programming Instructor',
    'Freelancer',
  ],
}

