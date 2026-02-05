// Portfolio items data (featured: 3 projects)
export const portfolioItems = [
  {
    id: 1,
    slug: 'yiaiki',
    title: 'YiAiki',
    caption: 'On-Demand Errand Marketplace with Real-Time Chat, Bidding & Escrow',
    category: 'web',
    image: '/assets/img/portfolio/yiaiki.png',
    detailPage: '/portfolio/yiaiki',
  },
  {
    id: 2,
    slug: 'swbc',
    title: 'SWBC Website',
    caption: '',
    category: 'web',
    image: '/assets/img/portfolio/swbc.png',
    detailPage: '/portfolio/swbc',
  },
  {
    id: 3,
    slug: 'project-3',
    title: 'Project 3',
    caption: '',
    category: 'web',
    image: '/assets/img/portfolio/yiaiki.png', // placeholder – replace with your image
    detailPage: '/portfolio/project-3',
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
  yiaiki: {
    title: 'YiAiki – On-Demand Errand Marketplace with Real-Time Chat, Bidding & Escrow',
    role: 'Full-Stack Developer / Indie Hacker',
    timeline: 'Feb 2025 – Present (live, early testing)',
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
      '/assets/img/portfolio/yiaiki4.png',
    ],
  },
  swbc: {
    title: 'SWBC Website',
    role: '',
    timeline: '',
    outcome: 'A church website with CRM for posting devotionals, book store, sermon downloads, and online giving.',
    summary:
      'SWBC (Soul Winning Believers Church) is a church website designed to showcase the ministry, service times, gallery, and news & events, while also providing features such as devotionals management, sermon downloads, an online bookstore, and secure online giving to support digital ministry and member engagement.',
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
      hosting: ['Render'],
    },
    results: [
      'Launched a centralized digital platform for church information, sermons, devotionals, and events, replacing fragmented communication channels.',
      'Improved member access to sermons and devotionals, enabling continuous spiritual engagement beyond physical services.',
      'Streamlined content publishing for church administrators through a single dashboard, reducing manual updates and turnaround time.',
      'Enabled online giving and digital book purchases, creating convenient, trackable income channels for church support.',
      'Enhanced church visibility and outreach by providing a publicly accessible, mobile-friendly web presence for new and existing members.',
    ],
    links: {
      demo: 'https://swbchurch.onrender.com/',
      repo: '',
    },
    gallery: [
      '/assets/img/portfolio/swbc.png',
      '/assets/img/portfolio/swbc1.png',
      '/assets/img/portfolio/swbc2.png',
      '/assets/img/portfolio/swbc3.png',
      '/assets/img/portfolio/swbc4.png',
    ],
  },
  'project-3': {
    title: 'Project 3',
    role: '',
    timeline: '',
    outcome: 'Details coming soon.',
    summary: 'Case study will be added here.',
    context: ['Details coming soon.'],
    responsibilities: ['Details coming soon.'],
    stack: {},
    results: ['Details coming soon.'],
    links: {},
    gallery: ['/assets/img/portfolio/yiaiki.png'],
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

