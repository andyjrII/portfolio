// Portfolio items data (featured projects)
export const portfolioItems = [
  {
    id: 1,
    slug: 'yiaiki',
    title: 'YiAiki',
    caption: 'On-Demand Errand Marketplace with Real-Time Chat, Bidding & Escrow',
    category: 'web',
    image: '/assets/img/portfolio/yiaiki/yiaiki.png',
    detailPage: '/portfolio/yiaiki',
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Tailwind'],
  },
  {
    id: 2,
    slug: 'swbc',
    title: 'SWBC Website',
    caption: 'Church website with CRM, devotionals, bookstore, sermon downloads, and online giving.',
    category: 'web',
    image: '/assets/img/portfolio/swbc/swbc.png',
    detailPage: '/portfolio/swbc',
    technologies: ['HTML', 'JavaScript', 'Django', 'PostgreSQL', 'Bootstrap'],
  },
  {
    id: 3,
    slug: 'nerdified',
    title: 'Nerdified',
    caption: 'Live, instructor-led learning platform for courses, scheduling, and real-time classes.',
    category: 'web',
    image: '/assets/img/portfolio/nerdified/nerdified.png',
    detailPage: '/portfolio/nerdified',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Tailwind', 'TypeScript'],
  },
  {
    id: 4,
    slug: 'wisssh',
    title: 'Wisssh',
    caption: 'Wishlist-style experience for saving and sharing what matters most.',
    category: 'web',
    image: '/assets/img/portfolio/wisssh/wisssh.png',
    detailPage: '/portfolio/wisssh',
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Tailwind'],
  },
  {
    id: 5,
    slug: 'campuscart',
    title: 'CampusCart',
    caption: 'Campus-focused marketplace for students to buy, sell, and deliver items.',
    category: 'web',
    image: '/assets/img/portfolio/campuscart/campuscart.png',
    detailPage: '/portfolio/campuscart',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Tailwind'],
  },
  {
    id: 6,
    slug: 'munai',
    title: 'MunAI',
    caption: 'AI-first assistant for everyday productivity, planning, and learning.',
    category: 'web',
    image: '/assets/img/portfolio/munai/munai.png',
    detailPage: '/portfolio/munai',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
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
  { icon: 'bi-calendar', value: 5, label: 'Years', sublabel: 'of experience', suffix: '+' },
  { icon: 'bi-file-code', value: 25, label: 'Projects', sublabel: 'worked on', suffix: '+' },
  { icon: 'bi-emoji-smile', value: 15, label: 'Clients', sublabel: 'satisfied', suffix: '+' },
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
  { name: 'github', url: 'https://github.com/andyjrII', icon: 'bi-github' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/andyjr002', icon: 'bi-linkedin' },
  { name: 'facebook', url: 'https://facebook.com/asjames3', icon: 'bi-facebook' },
  { name: 'instagram', url: 'https://instagram.com/andyjr_ii', icon: 'bi-instagram' },
  { name: 'twitter', url: 'https://twitter.com/andyjrii', icon: 'bi-twitter-x' },
  
]

// Project detail data
export const projectDetails = {
  yiaiki: {
    title: 'YiAiki',
    subtitle: 'On-demand errand platform connecting users with verified student runners.',
    role: 'Full-Stack Developer',
    timeline: 'Feb 2025 – March, 2026 (Live)',
    outcome: 'On-demand errand marketplace with real-time chat, notifications, wallet, bidding & escrow.',
    problem:
      'Getting help with small errands often involves calling friends, negotiating with informal runners, or relying on unreliable services. These methods lack transparency, security, and efficient coordination.',
    solution:
      'YiAiki streamlines this process by providing a digital platform where users can post errands and receive bids from verified student runners. Built-in messaging, notifications, and escrow payments ensure that tasks are coordinated efficiently and completed with trust.',
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
      'Implemented secure file uploads (user images, runner IDs) via Cloudinary.',
      'Managed infra, deployment, DB schema, cron jobs, monitoring; ongoing QA and iteration during early testing.',
    ],
    stack: {
      frontend: ['React', 'Vite', 'TypeScript', 'Tailwind CSS / custom CSS'],
      backend: ['NestJS', 'Socket.IO', 'JWT'],
      database: ['PostgreSQL', 'Prisma ORM'],
      integrations: ['Paystack (payments)', 'Cloudinary (file uploads)', 'Brevio (email)'],
      'version control': ['Git / GitHub'],
      hosting: [],
    },
    features: [
      {
        title: 'Task Listings & Bidding',
        description: 'Users post errands and receive competitive bids from verified student runners.',
      },
      {
        title: 'Secure Payments & Escrow',
        description: 'Wallet and escrow flows protect both users and runners during each errand.',
      },
      {
        title: 'Real-Time Chat & Notifications',
        description: 'In-app messaging and alerts keep everyone in sync from request to completion.',
      },
      {
        title: 'Rating & Reviews',
        description: 'Users and runners can rate each other after completed errands for trust and quality.',
      },
    ],
    challenges: [
      {
        title: 'Scalable Backend Architecture',
        challenge:
          'The platform needed to support task bidding, messaging, notifications, and wallet transactions without tightly coupling business logic.',
        solution:
          'Designed a modular backend using NestJS with Prisma and PostgreSQL. This allowed clear domain separation (users, tasks, bids, wallets) and efficient data access while keeping the system maintainable as features expanded.',
      },
      {
        title: 'Real-Time Communication',
        challenge:
          'Users and runners needed instant updates for new bids, messages, and notifications without constantly refreshing the page.',
        solution:
          'Integrated Socket.IO to power real-time messaging, bid notifications, and unread counters, ensuring both parties stay synchronized during task coordination.',
      },
    ],
    results: [
      'Built and deployed an early-testing version with end-to-end errand, bidding, wallet, and chat features.',
      'In testing: early testers report faster task fulfillment and improved communication flow.',
      'Messaging layer keeps interactions in-platform and is designed to reduce reliance on phone/WhatsApp.',
      'Wallet + escrow built to increase trust between users and runners ahead of wider rollout.',
      'Platform ready to open a new income channel for student errand runners once launched.',
    ],
    links: {
      demo: 'https://www.yiaiki.com',
      repo: '',
      video: 'https://www.facebook.com/share/v/17XJbzSXDt/',
    },
    gallery: [
      '/assets/img/portfolio/yiaiki/yiaiki.png',
      '/assets/img/portfolio/yiaiki/yiaiki1.png',
      '/assets/img/portfolio/yiaiki/yiaiki2.png',
      '/assets/img/portfolio/yiaiki/yiaiki3.png',
      '/assets/img/portfolio/yiaiki/yiaiki4.png',
      '/assets/img/portfolio/yiaiki/yiaiki5.png',
    ],
  },
  swbc: {
    title: 'SWBC Website',
    subtitle: 'A church platform for sermons, devotionals, and spiritual resources.',
    role: 'Full Stack Developer',
    timeline: 'January 2024 to February 2026 (in testing)',
    outcome: 'A church website with CRM for posting devotionals, book store, sermon downloads, and online giving.',
    problem:
      'The church needed a centralized digital platform to share sermons, devotionals, and announcements while also providing members with access to spiritual resources and ways to support the ministry online.',
    solution:
      'Built a modern church website with an integrated admin system for publishing devotionals, managing sermon downloads, selling books, and enabling online giving, making it easier for the church to engage its community digitally.',
    summary:
      'SWBC (Soul Winning Believers Church) website is a church website designed to showcase the ministry, service times, gallery, and news & events, while also providing features such as devotionals management, sermon downloads, an online bookstore, and secure online giving to support digital ministry and member engagement.',
    context: [
      'Church needed a professional online presence to share service times, beliefs, and events.',
      'Required a CRM for posting of devotionals and manage content.',
      'Needed an online book store where users can purchase books from the church.',
      'Wanted sermon downloads and online giving, with reliable media storage.',
      'Goal: easy-to-update site that works well on mobile and desktop.',
    ],
    responsibilities: [
      'Built CRM feature for posting and managing devotionals.',
      'Implemented an online book store where users can purchase books from the church.',
      'Enabled sermon downloads with media stored on Cloudinary.',
      'Integrated Paystack for online giving and product purchases.',
    ],
    stack: {
      frontend: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
      backend: ['Python', 'Django'],
      database: ['PostgreSQL'],
      integrations: ['Paystack (payments)', 'Cloudinary (images, files, audio)'],
      'version control': ['Git / GitHub'],
      hosting: ['Render'],
    },
    features: [
      {
        title: 'Devotionals & Content Management',
        description: 'Church administrators publish daily devotionals and updates from a simple dashboard.',
      },
      {
        title: 'Online Bookstore',
        description: 'Members can browse and purchase books and resources online.',
      },
      {
        title: 'Sermon Downloads',
        description: 'Media downloads support digital ministry, with sermon files stored on Cloudinary.',
      },
      {
        title: 'Online Giving',
        description: 'Paystack-powered giving enables members to support the ministry online.',
      },
    ],
    challenges: [
      {
        title: 'Centralized Content Management',
        challenge:
          'Sermons, devotionals, and church information were spread across different platforms, making updates difficult and content hard to locate.',
        solution:
          'Built a centralized website and CMS that allows administrators to manage and publish all church content from one platform.',
      },
      {
        title: 'Managing Sermon Distribution',
        challenge:
          'The church needed a reliable way to publish and distribute sermon recordings for members who could not attend services.',
        solution:
          'Implemented a structured sermon archive with downloadable audio messages, allowing members to easily access and download teachings.',
      },
    ],
    results: [
      'Built a centralized digital platform for church information, sermons, devotionals, and events, ready to replace fragmented communication channels.',
      'Designed to improve member access to sermons and devotionals for spiritual engagement beyond physical services.',
      'Streamlined content publishing for church administrators through a single dashboard.',
      'Enabled online giving and digital book purchases as convenient, trackable income channels for church support.',
      'Provides a publicly accessible, mobile-friendly web presence for new and existing members; in testing before full rollout.',
    ],
    links: {
      demo: 'https://swbchurch.onrender.com/',
      repo: '',
    },
    gallery: [
      '/assets/img/portfolio/swbc/swbc.png',
      '/assets/img/portfolio/swbc/swbc1.png',
      '/assets/img/portfolio/swbc/swbc2.png',
      '/assets/img/portfolio/swbc/swbc3.png',
      '/assets/img/portfolio/swbc/swbc4.png',
      '/assets/img/portfolio/swbc/swbc5.png',
    ],
  },
  nerdified: {
    title: 'Nerdified',
    subtitle: 'Live, Instructor-Led Learning',
    role: 'Full Stack, Indie Hacker',
    timeline: 'February 2024 to present (in development)',
    outcome:
      'A multi-instructor marketplace for live, interactive education with scheduling, payments, and real-time classes.',
    summary:
      'Nerdified is a commercial, instructor-led learning platform focused on live, interactive education. Unlike traditional e-learning with prerecorded videos, it is built around real-time teaching, mentorship, and direct engagement between tutors and learners. The platform operates as a multi-instructor marketplace where tutors create courses, schedule live sessions, and teach through one-on-one or small-group classes, with discovery, enrollment, scheduling, communication, and payments handled in one place. It prioritizes human connection, accountability, and feedback for skill mastery.',
    context: [
      'Need for a platform where learning is live and interactive rather than passive, prerecorded content.',
      'Required a marketplace where tutors can create courses, set availability, and be discovered by students.',
      'Needed scheduling, booking, and real-time class delivery with minimal friction for both sides.',
      'Wanted secure payments, tutor payouts, and platform commission handling in one place.',
      'Goal: discovery, enrollment, messaging, and payments so tutors focus on teaching and students on learning.',
    ],
    responsibilities: [
      'Designed and implemented backend: auth, role-based access (student, tutor, admin), course and session management, scheduling logic.',
      'Built frontend: course discovery, tutor and student dashboards, enrollment and booking flows, profile management.',
      'Implemented tutor onboarding and admin approval workflow for course creation and verification.',
      'Integrated scheduling and availability: calendar, time slots, conflict prevention, and time-zone handling.',
      'Developed enrollment and payment flows; platform commission and tutor payout handling.',
      'Set up real-time messaging (student–tutor and course chat) and notifications (in-app and email).',
      'Managed infra, deployment, and ongoing iteration for the live learning platform.',
    ],
    stack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['NestJS', 'TypeScript'],
      database: ['PostgreSQL', 'Prisma ORM'],
      realTime: ['WebSockets (chat)', 'LiveKit (video)', 'Redis'],
      integrations: ['Paystack (payments)', 'Cloudinary'],
      'version control': ['Git / GitHub'],
      hosting: [],
    },
    features: [
      {
        title: 'Live Classes & Scheduling',
        description: 'Students book real-time classes with tutors based on availability and time zones.',
      },
      {
        title: 'Multi-Instructor Marketplace',
        description: 'Tutors create courses, manage pricing, and build audiences in one platform.',
      },
      {
        title: 'Messaging & Notifications',
        description: 'Real-time chat and alerts keep tutors and learners aligned between sessions.',
      },
    ],
    challenges: [
      {
        title: 'Balancing flexibility and structure',
        challenge: 'Both tutors and learners needed flexible schedules without creating conflicts.',
        solution:
          'Implemented robust scheduling logic with clear time slots, conflict checks, and time-zone support.',
      },
    ],
    results: [
      'Building a live, instructor-led learning marketplace so tutors have one place to create courses and students can book and attend real-time classes.',
      'Designed to let tutors earn through teaching with structured onboarding, scheduling, and payout flows.',
      'Aims to improve learning outcomes by prioritizing live interaction, feedback, and accountability over passive video.',
      'Centralizes discovery, enrollment, messaging, and payments so tutors and learners can focus on teaching and learning.',
      'Establishing a scalable foundation for more instructors, course types, and features as the platform progresses.',
    ],
    links: {
      demo: 'https://nerdified.vercel.app/',
      repo: '',
    },
    gallery: [
      '/assets/img/portfolio/nerdified/nerdified.png',
      '/assets/img/portfolio/nerdified/nerdified1.png',
      '/assets/img/portfolio/nerdified/nerdified2.png',
      '/assets/img/portfolio/nerdified/nerdified3.png',
      '/assets/img/portfolio/nerdified/nerdified4.png',
    ],
  },
  wisssh: {
    title: 'Wisssh',
    subtitle: 'Modern Wishlist & Gifting',
    role: 'Full-Stack Developer',
    timeline: 'Details coming soon',
    outcome: 'A wishlist-style platform for saving, organizing, and sharing things users care about.',
    summary: 'Wisssh is a modern wishlist experience designed to make it easy to capture, organize, and share items, ideas, and goals with friends, family, or communities.',
    context: ['Detailed context coming soon.'],
    responsibilities: ['Detailed responsibilities coming soon.'],
    stack: {
      frontend: ['React', 'Tailwind CSS'],
      backend: ['NestJS'],
      database: ['PostgreSQL'],
      integrations: [],
      'version control': ['Git / GitHub'],
      hosting: [],
    },
    features: [],
    challenges: [],
    results: ['Impact and outcomes will be documented soon.'],
    links: {
      demo: '',
      repo: '',
    },
    gallery: [
      '/assets/img/portfolio/wisssh/wisssh.png',
      '/assets/img/portfolio/wisssh/wisssh1.png',
      '/assets/img/portfolio/wisssh/wisssh2.png',
      '/assets/img/portfolio/wisssh/wisssh3.png',
      '/assets/img/portfolio/wisssh/wisssh4.png',
      '/assets/img/portfolio/wisssh/wisssh5.png',
    ],
  },
  campuscart: {
    title: 'CampusCart',
    subtitle: 'Student Marketplace & Delivery',
    role: 'Full-Stack Developer',
    timeline: 'Details coming soon',
    outcome: 'A campus-focused marketplace where students can buy, sell, and request delivery of items around campus.',
    summary: 'CampusCart connects students who need items, books, or food with fellow students willing to sell or deliver them across campus.',
    context: ['Detailed context coming soon.'],
    responsibilities: ['Detailed responsibilities coming soon.'],
    stack: {
      frontend: ['Next.js', 'Tailwind CSS'],
      backend: ['NestJS'],
      database: ['PostgreSQL'],
      integrations: [],
      'version control': ['Git / GitHub'],
      hosting: [],
    },
    features: [],
    challenges: [],
    results: ['Impact and outcomes will be documented soon.'],
    links: {
      demo: '',
      repo: '',
    },
    gallery: [
      '/assets/img/portfolio/campuscart/campuscart.png',
      '/assets/img/portfolio/campuscart/campuscart1.png',
      '/assets/img/portfolio/campuscart/campuscart2.png',
      '/assets/img/portfolio/campuscart/campuscart3.png',
      '/assets/img/portfolio/campuscart/campuscart4.png',
      '/assets/img/portfolio/campuscart/campuscart5.png',
    ],
  },
  munai: {
    title: 'MunAI',
    subtitle: 'AI Productivity Assistant',
    role: 'Full-Stack Developer',
    timeline: 'Details coming soon',
    outcome: 'An AI-first assistant that helps users plan, learn, and stay productive across tasks.',
    summary: 'MunAI combines conversational AI with structured tools to help users manage tasks, goals, and learning plans from a single interface.',
    context: ['Detailed context coming soon.'],
    responsibilities: ['Detailed responsibilities coming soon.'],
    stack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['NestJS'],
      database: ['PostgreSQL'],
      integrations: [],
      'version control': ['Git / GitHub'],
      hosting: [],
    },
    features: [],
    challenges: [],
    results: ['Impact and outcomes will be documented soon.'],
    links: {
      demo: '',
      repo: '',
    },
    gallery: [
      '/assets/img/portfolio/munai/munai.png',
      '/assets/img/portfolio/munai/munai1.png',
      '/assets/img/portfolio/munai/munai2.png',
      '/assets/img/portfolio/munai/munai3.png',
      '/assets/img/portfolio/munai/munai4.png',
      '/assets/img/portfolio/munai/munai5.png',
    ],
  },
}

// Navigation items
export const navItems = [
  { name: 'Home', href: '#hero', icon: 'bi-house' },
  { name: 'About', href: '#about', icon: 'bi-person' },
  { name: 'Skills', href: '#skills', icon: 'bi-award' },
  { name: 'Resume', href: '#resume', icon: 'bi-file-earmark-text' },
  { name: 'Projects', href: '#portfolio', icon: 'bi-images' },
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

