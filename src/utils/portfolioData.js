// Portfolio items data (featured projects)
export const portfolioItems = [
  {
    id: 1,
    slug: "yiaiki",
    title: "YiAiki",
    caption: "On-Demand Errand Marketplace with Real-Time Chat, Bidding & Escrow",
    category: "web",
    image: "/assets/img/portfolio/yiaiki/yiaiki.png",
    detailPage: "/portfolio/yiaiki",
    technologies: ["React", "NestJS", "PostgreSQL", "Tailwind"],
  },
  {
    id: 2,
    slug: "wisssh",
    title: "Wisssh",
    caption: "A special moment gifting platform, one page, one link, gifts that match the moment.",
    category: "web",
    image: "/assets/img/portfolio/wisssh/wisssh.png",
    detailPage: "/portfolio/wisssh",
    technologies: ["React", "NestJS", "PostgreSQL", "Tailwind"],
  },
  {
    id: 3,
    slug: "visqar",
    title: "Visqar",
    caption:
      "AI customer support agents that answer questions, use company knowledge, and take action across business systems.",
    category: "web",
    image: "/assets/img/portfolio/visqar/visqar.png",
    detailPage: "/portfolio/visqar",
    technologies: ["Next.js", "Python", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind"],
  },
  {
    id: 4,
    slug: "kampurse",
    title: "Kampurse",
    caption: "Campus-focused marketplace for students to buy, sell, and deliver items.",
    category: "web",
    image: "/assets/img/portfolio/kampurse/kampurse.png",
    detailPage: "/portfolio/kampurse",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Tailwind"],
  },
  {
    id: 5,
    slug: "munai",
    title: "MunAI",
    caption:
      "AI voice transcriptions, live captions, voiceovers, and real-time voice Q&A—one platform.",
    category: "web",
    image: "/assets/img/portfolio/munai/munai.png",
    detailPage: "/portfolio/munai",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
  },
  {
    id: 6,
    slug: "swbc",
    title: "SWBC Website",
    caption:
      "Church website with CRM, devotionals, bookstore, sermon downloads, and online giving.",
    category: "web",
    image: "/assets/img/portfolio/swbc/swbc.png",
    detailPage: "/portfolio/swbc",
    technologies: ["HTML", "JavaScript", "Django", "PostgreSQL", "Bootstrap"],
  },
];

// Skills data
export const skills = [
  { name: "JavaScript", percentage: 85 },
  { name: "TypeScript", percentage: 85 },
  { name: "Node.js/Express.js", percentage: 85 },
  { name: "Nest.js", percentage: 90 },
  { name: "React.js", percentage: 80 },
  { name: "Next.js", percentage: 75 },
  { name: "Python", percentage: 80 },
  { name: "Django", percentage: 70 },
  { name: "Git/Github", percentage: 90 },
  { name: "Microservices", percentage: 70 },
  { name: "Docker", percentage: 70 },
  { name: "MySQL", percentage: 90 },
  { name: "PostgreSQL", percentage: 90 },
  { name: "MongoDB", percentage: 80 },
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "Bootstrap", percentage: 99 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "WordPress", percentage: 85 },
  { name: "SEO", percentage: 80 },
  { name: "Sass", percentage: 90 },
  { name: "Microsoft Office Suite", percentage: 100 },
];

// Stats data
export const stats = [
  {
    icon: "bi-calendar",
    value: 5,
    label: "Years",
    sublabel: "building on the web",
    suffix: "+",
  },
  {
    icon: "bi-file-code",
    value: 25,
    label: "Projects",
    sublabel: "shipped",
    suffix: "+",
  },
  {
    icon: "bi-emoji-smile",
    value: 15,
    label: "Clients",
    sublabel: "shipped for",
    suffix: "+",
  },
];

// Services data
export const services = [
  {
    icon: "bi-code",
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps — built end-to-end and tuned for performance across devices.",
  },
  {
    icon: "bi-wrench",
    title: "Website Management",
    description:
      "Ongoing maintenance, updates, and performance tuning so your site keeps running fast and secure.",
  },
  {
    icon: "bi-book",
    title: "Mentorship & Training",
    description:
      "One-on-one coaching and workshops for aspiring developers — practical, project-based, no fluff.",
  },
];

// Social links
export const socialLinks = [
  { name: "github", url: "https://github.com/andyjrII", icon: "bi-github" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/andyjr002",
    icon: "bi-linkedin",
  },
  {
    name: "facebook",
    url: "https://facebook.com/asjames3",
    icon: "bi-facebook",
  },
  {
    name: "instagram",
    url: "https://instagram.com/andyjr_ii",
    icon: "bi-instagram",
  },
  {
    name: "twitter",
    url: "https://twitter.com/andyjrii",
    icon: "bi-twitter-x",
  },
];

// Project detail data
export const projectDetails = {
  yiaiki: {
    title: "YiAiki",
    subtitle: "On-demand errand platform connecting users with verified student runners.",
    role: "Full-Stack Developer",
    status: "live",
    outcome:
      "On-demand errand marketplace with real-time chat, notifications, wallet, bidding & escrow.",
    problem:
      "Getting help with small errands often involves calling friends, negotiating with informal runners, or relying on unreliable services. These methods lack transparency, security, and efficient coordination.",
    solution:
      "YiAiki streamlines this process by providing a digital platform where users can post errands and receive bids from verified student runners. Built-in messaging, notifications, and escrow payments ensure that tasks are coordinated efficiently and completed with trust.",
    summary:
      "YiAiki is a multi-sided errand marketplace connecting users with student runners for shopping, deliveries, queue services, bill payments, and more. It includes bidding, wallet funding, escrow protection, and a real-time messaging layer (job-specific and general chats). Built end-to-end as a bootstrapped SaaS, currently live in early testing.",
    context: [
      "Create a modern errand platform where users post tasks and receive bids from verified runners.",
      "Add trust/safety via wallet + escrow; hold funds until tasks are completed.",
      "Provide real-time chat for the errand lifecycle; support multiple errand types (shopping, food, queues, documents, deliveries).",
      "Allow runners (students) to register with ID verification and school IDs; deliver notifications and email alerts.",
      "Lay foundation for future features (subscription errands, B2B services); deliver intuitive web/mobile-friendly UI.",
    ],
    responsibilities: [
      "Designed and implemented full backend: auth, roles, wallets, escrow logic, errand lifecycle, bidding, chat, notifications.",
      "Built the entire frontend (React + Vite): dashboards for users/runners, chat UI, errand creation, bid management.",
      "Integrated Socket.IO for real-time messaging, bid notifications, and unread counters.",
      "Developed wallet top-up, balance checks, escrow release workflows.",
      "Implemented secure file uploads (user images, runner IDs) via Cloudinary.",
      "Managed infra, deployment, DB schema, cron jobs, monitoring; ongoing QA and iteration during early testing.",
    ],
    stack: {
      frontend: ["React", "Vite", "TypeScript", "Tailwind CSS / custom CSS"],
      backend: ["NestJS", "Socket.IO", "JWT"],
      database: ["PostgreSQL", "Prisma ORM"],
      integrations: ["Paystack (payments)", "Cloudinary (file uploads)", "Brevio (email)"],
      "version control": ["Git / GitHub"],
      hosting: [],
    },
    features: [
      {
        title: "Task Listings & Bidding",
        description:
          "Users post errands and receive competitive bids from verified student runners.",
      },
      {
        title: "Secure Payments & Escrow",
        description: "Wallet and escrow flows protect both users and runners during each errand.",
      },
      {
        title: "Real-Time Chat & Notifications",
        description:
          "In-app messaging and alerts keep everyone in sync from request to completion.",
      },
      {
        title: "Rating & Reviews",
        description:
          "Users and runners can rate each other after completed errands for trust and quality.",
      },
    ],
    challenges: [
      {
        title: "Scalable Backend Architecture",
        challenge:
          "The platform needed to support task bidding, messaging, notifications, and wallet transactions without tightly coupling business logic.",
        solution:
          "Designed a modular backend using NestJS with Prisma and PostgreSQL. This allowed clear domain separation (users, tasks, bids, wallets) and efficient data access while keeping the system maintainable as features expanded.",
      },
      {
        title: "Real-Time Communication",
        challenge:
          "Users and runners needed instant updates for new bids, messages, and notifications without constantly refreshing the page.",
        solution:
          "Integrated Socket.IO to power real-time messaging, bid notifications, and unread counters, ensuring both parties stay synchronized during task coordination.",
      },
    ],
    results: [
      "Built and deployed an early-testing version with end-to-end errand, bidding, wallet, and chat features.",
      "In testing: early testers report faster task fulfillment and improved communication flow.",
      "Messaging layer keeps interactions in-platform and is designed to reduce reliance on phone/WhatsApp.",
      "Wallet + escrow built to increase trust between users and runners ahead of wider rollout.",
      "Platform ready to open a new income channel for student errand runners once launched.",
    ],
    links: {
      demo: "https://www.yiaiki.com",
      repo: "",
      video: "https://www.facebook.com/share/v/17XJbzSXDt/",
    },
    gallery: [
      "/assets/img/portfolio/yiaiki/yiaiki.png",
      "/assets/img/portfolio/yiaiki/yiaiki1.png",
      "/assets/img/portfolio/yiaiki/yiaiki2.png",
      "/assets/img/portfolio/yiaiki/yiaiki3.png",
      "/assets/img/portfolio/yiaiki/yiaiki4.png",
      "/assets/img/portfolio/yiaiki/yiaiki5.png",
    ],
  },
  swbc: {
    title: "SWBC Website",
    subtitle: "A church platform for sermons, devotionals, and spiritual resources.",
    role: "Full Stack Developer",
    status: "live",
    outcome:
      "A church website with CRM for posting devotionals, book store, sermon downloads, and online giving.",
    problem:
      "The church needed a centralized digital platform to share sermons, devotionals, and announcements while also providing members with access to spiritual resources and ways to support the ministry online.",
    solution:
      "Built a modern church website with an integrated admin system for publishing devotionals, managing sermon downloads, selling books, and enabling online giving, making it easier for the church to engage its community digitally.",
    summary:
      "SWBC (Soul Winning Believers Church) website is a church website designed to showcase the ministry, service times, gallery, and news & events, while also providing features such as devotionals management, sermon downloads, an online bookstore, and secure online giving to support digital ministry and member engagement.",
    context: [
      "Church needed a professional online presence to share service times, beliefs, and events.",
      "Required a CRM for posting of devotionals and manage content.",
      "Needed an online book store where users can purchase books from the church.",
      "Wanted sermon downloads and online giving, with reliable media storage.",
      "Goal: easy-to-update site that works well on mobile and desktop.",
    ],
    responsibilities: [
      "Built CRM feature for posting and managing devotionals.",
      "Implemented an online book store where users can purchase books from the church.",
      "Enabled sermon downloads with media stored on Cloudinary.",
      "Integrated Paystack for online giving and product purchases.",
    ],
    stack: {
      frontend: ["HTML", "JavaScript", "CSS", "Bootstrap"],
      backend: ["Python", "Django"],
      database: ["PostgreSQL"],
      integrations: ["Paystack (payments)", "Cloudinary (images, files, audio)"],
      "version control": ["Git / GitHub"],
      hosting: ["Render"],
    },
    features: [
      {
        title: "Devotionals & Content Management",
        description:
          "Church administrators publish daily devotionals and updates from a simple dashboard.",
      },
      {
        title: "Online Bookstore",
        description: "Members can browse and purchase books and resources online.",
      },
      {
        title: "Sermon Downloads",
        description:
          "Media downloads support digital ministry, with sermon files stored on Cloudinary.",
      },
      {
        title: "Online Giving",
        description: "Paystack-powered giving enables members to support the ministry online.",
      },
    ],
    challenges: [
      {
        title: "Centralized Content Management",
        challenge:
          "Sermons, devotionals, and church information were spread across different platforms, making updates difficult and content hard to locate.",
        solution:
          "Built a centralized website and CMS that allows administrators to manage and publish all church content from one platform.",
      },
      {
        title: "Managing Sermon Distribution",
        challenge:
          "The church needed a reliable way to publish and distribute sermon recordings for members who could not attend services.",
        solution:
          "Implemented a structured sermon archive with downloadable audio messages, allowing members to easily access and download teachings.",
      },
    ],
    results: [
      "Built a centralized digital platform for church information, sermons, devotionals, and events, ready to replace fragmented communication channels.",
      "Designed to improve member access to sermons and devotionals for spiritual engagement beyond physical services.",
      "Streamlined content publishing for church administrators through a single dashboard.",
      "Enabled online giving and digital book purchases as convenient, trackable income channels for church support.",
      "Provides a publicly accessible, mobile-friendly web presence for new and existing members; in testing before full rollout.",
    ],
    links: {
      demo: "https://swbchurch.onrender.com/",
      repo: "",
    },
    gallery: [
      "/assets/img/portfolio/swbc/swbc.png",
      "/assets/img/portfolio/swbc/swbc1.png",
      "/assets/img/portfolio/swbc/swbc2.png",
      "/assets/img/portfolio/swbc/swbc3.png",
      "/assets/img/portfolio/swbc/swbc4.png",
      "/assets/img/portfolio/swbc/swbc5.png",
    ],
  },
  visqar: {
    title: "Visqar",
    subtitle: "AI support and sales agents for service-driven businesses across industries.",
    role: "Full Stack Developer",
    status: "live",
    outcome:
      "A live AI agent platform that answers customer questions, recommends products, and takes action across existing business systems.",
    problem:
      "Growing businesses across e-commerce, healthcare, food, and real estate often handle support across websites, social channels, and internal systems with scattered tools and repetitive manual work. Customers expect instant answers, but support teams still need responses to stay accurate, brand-aware, and connected to live business data.",
    solution:
      "Visqar gives businesses an AI support agent that understands their knowledge base, retrieves grounded answers with RAG, and calls integrated tools to answer questions, recommend next steps, check records, and serve customers across web chat and messaging channels.",
    summary:
      "Visqar helps businesses automate customer support with AI agents that answer questions, understand company knowledge, and take action on behalf of customers through existing systems. It combines a RAG-powered knowledge base, industry-specific integrations, omnichannel adapters, streaming chat, tool-calling, and multi-model routing so one configured agent can support customers across the website widget, WhatsApp, Telegram, Messenger, Instagram, and SMS.",
    context: [
      "Businesses need faster customer support without losing accuracy, context, or control over brand knowledge.",
      "Support and sales conversations happen across many channels, but teams need one agent configuration and one dashboard to manage them.",
      "Customers in different industries ask context-specific questions, from products and orders to appointments, menus, listings, services, and availability.",
      "AI responses must stay grounded in company content while still being able to call tools and complete useful actions.",
      "Goal: build an AI support layer that works across existing business systems and messaging channels instead of forcing teams into a new workflow.",
    ],
    responsibilities: [
      "Designed and built the FastAPI backend for authentication, tenant configuration, knowledge ingestion, channel dispatching, and agent actions.",
      "Built the Next.js dashboard for managing agents, knowledge sources, integrations, analytics, and customer conversations.",
      "Implemented pgvector-backed retrieval for company knowledge so AI responses stay grounded in uploaded and synced business content.",
      "Integrated business workflows for catalog access, recommendations, record lookup, webhooks, and subscriptions.",
      "Built streaming chat and tool-calling flows that render product cards and action results in both the web widget and connected channels.",
      "Implemented multi-model intent routing through OpenRouter to balance response quality, task fit, latency, and cost.",
      "Created an omnichannel adapter architecture for the website widget, WhatsApp, Telegram, Messenger, Instagram, and SMS.",
    ],
    stack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "FastAPI"],
      database: ["PostgreSQL", "pgvector"],
      integrations: ["OpenRouter"],
      "version control": ["Git / GitHub"],
      hosting: ["Vercel", "Neon"],
    },
    features: [
      {
        title: "AI Sales & Support Agent",
        description:
          "RAG-powered chat agent answers customer questions from the company knowledge base instead of relying on generic model memory.",
      },
      {
        title: "Context-Aware Recommendations",
        description:
          "Agent actions pull live business data to recommend products, services, menu items, listings, or next steps inside the chat.",
      },
      {
        title: "Omnichannel Deployment",
        description:
          "One bot configuration runs through the web widget, WhatsApp, Telegram, Messenger, Instagram, and SMS.",
      },
      {
        title: "Industry System Integrations",
        description:
          "Connections to business tools let the agent fetch live data, look up records, and act on customer requests in real time.",
      },
      {
        title: "Multi-Model Intent Routing",
        description:
          "Messages are classified and routed to specialized models for FAQs, tool use, de-escalation, and conversion tasks.",
      },
    ],
    challenges: [
      {
        title: "Grounded AI Responses",
        challenge:
          "The agent needed to answer from each company's own content while avoiding unsupported claims and generic responses.",
        solution:
          "Built a RAG pipeline with pgvector embeddings, structured knowledge ingestion, and retrieval-aware prompting so answers are tied to merchant-specific content.",
      },
      {
        title: "One Agent Across Many Channels",
        challenge:
          "The same business logic had to work across the website widget and multiple messaging platforms with different payloads, response formats, and delivery rules.",
        solution:
          "Designed a channel-adapter architecture with a registry and dispatcher so each channel can translate messages while sharing the same agent runtime.",
      },
      {
        title: "Live Business Actions",
        challenge:
          "Customers expect answers to reflect current business data, not stale information copied into a knowledge base.",
        solution:
          "Built tool-calling workflows so the agent can fetch live data, recommend relevant options, look up records, and handle webhook-driven updates.",
      },
      {
        title: "Balancing Cost, Quality, and Task Fit",
        challenge:
          "Different support tasks require different model strengths, from fast intent classification to careful de-escalation and conversion-focused responses.",
        solution:
          "Routed requests through OpenRouter with task-specific model selection, using lighter models for classification and specialized models for higher-value conversations.",
      },
    ],
    results: [
      "Launched a live AI support platform that gives businesses an always-on customer support and sales agent.",
      "Unified company knowledge, live business data, recommendations, and customer actions inside one conversational workflow.",
      "Supports website chat and five messaging channels through a shared adapter architecture.",
      "Enables richer support conversations across e-commerce, health, food, and real estate workflows.",
      "Built a scalable AI routing layer that can tune cost, latency, and quality per customer intent.",
    ],
    links: {
      demo: "https://visqar.vercel.app",
      repo: "",
    },
    icons: {
      pgvector: "/assets/img/portfolio/visqar/pgvector.svg",
      openrouter: "/assets/img/portfolio/visqar/openrouter.svg",
    },
    gallery: [
      "/assets/img/portfolio/visqar/visqar.png",
      "/assets/img/portfolio/visqar/visqar1.png",
      "/assets/img/portfolio/visqar/visqar2.png",
      "/assets/img/portfolio/visqar/visqar3.png",
      "/assets/img/portfolio/visqar/visqar4.png",
      "/assets/img/portfolio/visqar/visqar5.png",
    ],
  },
  wisssh: {
    title: "Wisssh",
    subtitle: "A structured gifting/celebration coordination platform.",
    role: "Full-Stack Developer",
    status: "live",
    outcome:
      "A single-page moment hub for weddings, birthdays, graduations, baby showers, naming ceremonies, retirement parties, and more.",
    problem:
      "During special occasions like weddings, birthdays, and baby showers, gift coordination is often fragmented across chats and conversations, leading to repeated explanations, unclear expectations, and uncoordinated gifting.",
    solution:
      "Wisssh provides a single, shareable page where hosts can present their celebration, list gift wishes or contribution goals, and allow guests to support the moment in a clear and organized way.",
    summary:
      "Wisssh turns scattered gift coordination into one shareable link. Hosts create a moment page for any celebration — weddings, birthdays, baby showers, graduations, naming ceremonies, retirements — curate a wishlist, and let guests contribute or pick specific gifts. One link replaces the back-and-forth of explaining preferences across chats.",
    context: [
      "Gift preferences usually live in scattered chats and group messages, leading to duplicates, guesses, and repeated explanations.",
      "Wisssh centralizes celebration details, the wishlist, and contributions into one link that hosts share and guests act on.",
      "Supports a wide range of moments: weddings, birthdays, baby showers, graduations, naming ceremonies, retirement parties, and even emergency support pools.",
    ],
    responsibilities: [
      "Designed full-stack architecture: moments, wishlist items, contributions, wallet ledger, and host payouts.",
      "Built link parser that extracts product details (title, image, price) from external URLs into a clean, uniform wishlist format.",
      "Implemented contribution flow with secure escrow-style fund holding and host withdrawal.",
      "Built unique-slug system for shareable moment URLs, with collision prevention and validation.",
    ],
    stack: {
      frontend: ["TypeScript", "Next.js", "Tailwind CSS"],
      backend: ["Node.js", "Socket.IO", "JWT"],
      database: ["Prisma", "PostgreSQL"],
      integrations: ["Cloudinary", "Paystack"],
      "version control": ["Git / GitHub"],
      hosting: [],
    },
    features: [
      {
        title: "Shareable Moment Pages",
        description: "Create a celebration page with a custom slug and share one link anywhere.",
      },
      {
        title: "Wishlist & Gift Curation",
        description:
          "Add gift ideas with external links—product details are auto-extracted into a clean wishlist.",
      },
      {
        title: "Contribution & Wallet System",
        description:
          "Guests contribute on-platform; funds are held securely and withdrawable by the host.",
      },
      {
        title: "Event Updates & Communication",
        description:
          "Post updates to keep guests informed and reduce repeated messages across channels.",
      },
    ],
    challenges: [
      {
        title: "Structured gifting from unstructured inputs",
        challenge:
          "Users can add gift ideas from anywhere (external product links), which are unstructured and inconsistent in format.",
        solution:
          "Implemented link parsing and normalization to extract key product details (title, image, price) into a consistent wishlist format for a uniform experience.",
      },
      {
        title: "Managing contributions & fund integrity",
        challenge:
          "Monetary contributions require accurate tracking, consistency, and secure withdrawals without balance conflicts.",
        solution:
          "Designed a wallet system with transaction tracking and balance computation so contributions are reliably recorded and funds can be safely withdrawn by the host.",
      },
      {
        title: "Shareable, collision-free moment links",
        challenge:
          "Each moment needs a unique, shareable URL while preventing collisions (duplicate slugs) and broken links.",
        solution:
          "Implemented slug generation and validation to enforce uniqueness and keep moment pages stable and easy to share.",
      },
      {
        title: "Centralizing distributed interactions",
        challenge:
          "Wishes, updates, and contributions can become fragmented across channels, creating coordination issues and poor UX.",
        solution:
          "Designed a unified data model that brings all moment activity into a single page so hosts and guests can manage everything in one structured interface.",
      },
    ],
    results: [
      "Live and used for real celebrations — weddings, birthdays, baby showers, graduations, retirements.",
      "Replaces fragmented WhatsApp/group-chat coordination with one structured page per moment.",
      "Wallet + slug system enables hosts to receive contributions reliably across moments.",
    ],
    links: {
      demo: "https://www.wisssh.com",
      repo: "",
    },
    gallery: [
      "/assets/img/portfolio/wisssh/wisssh.png",
      "/assets/img/portfolio/wisssh/wisssh1.png",
      "/assets/img/portfolio/wisssh/wisssh2.png",
      "/assets/img/portfolio/wisssh/wisssh3.png",
      "/assets/img/portfolio/wisssh/wisssh4.png",
      "/assets/img/portfolio/wisssh/wisssh5.png",
    ],
  },
  kampurse: {
    title: "Kampurse",
    subtitle:
      "The marketplace for campus life — buy, sell, and book services across Nigerian tertiary institutions.",
    role: "Full-Stack Developer",
    status: "live",
    outcome:
      "A campus-focused marketplace where students can buy, sell, book services, and get on-campus delivery from fellow students.",
    problem:
      "Campus commerce lives in WhatsApp groups, social-media posts, and DMs — no real listings, no trust signals, and no fulfillment. Students lose time, miss deals, and have no recourse when transactions go sideways.",
    solution:
      "A campus-restricted marketplace with verified-student listings, secure checkout, and a peer-powered delivery layer — order fulfillment happens entirely within the campus ecosystem.",
    summary:
      "Kampurse is a marketplace built for Nigerian tertiary students. Buy and sell products (textbooks, electronics, fashion), book services (tutoring, laundry, freelance work), and get on-campus delivery from fellow students — listings, messaging, payments, and fulfillment in one flow.",
    context: [
      "Built for the campus context — verified students, hostel delivery, on-foot logistics — instead of forcing generic e-commerce onto a niche use case.",
      "Supports products and services in one catalog, since campus commerce is rarely just one or the other.",
      "Peer-to-peer delivery: students opt in as delivery agents to fulfill orders, removing reliance on external logistics providers.",
      "Campus-email verification scopes trust and keeps off-campus actors out of the marketplace.",
    ],
    responsibilities: [
      "Designed and built backend: auth with campus-email verification, role-based access (buyer / seller / delivery agent), listings, orders, payments.",
      "Implemented frontend (Next.js): browse, search, listing creation, cart and checkout, role-specific dashboards.",
      "Built delivery-agent matching and order tracking for on-campus fulfillment.",
      "Integrated Paystack for payments and Cloudinary for listing media.",
    ],
    stack: {
      frontend: ["Next.js", "Tailwind CSS"],
      backend: ["NestJS", "Socket.IO", "JWT"],
      database: ["PostgreSQL", "Prisma"],
      integrations: ["Paystack", "Cloudinary"],
      "version control": ["Git / GitHub"],
      hosting: [],
    },
    features: [
      {
        title: "Campus-Restricted Marketplace",
        description:
          "Discovery and listings tailored to a student’s campus for relevance and trust.",
      },
      {
        title: "Products + Services Listings",
        description: "Support for both physical items and service offerings under one catalog.",
      },
      {
        title: "Secure Checkout & Payments",
        description: "Cart and checkout flow with protected payments to reduce friction and fraud.",
      },
      {
        title: "Student-Powered Delivery",
        description:
          "On-campus delivery handled by students for fast, localized order fulfillment.",
      },
    ],
    challenges: [
      {
        title: "Multi-Role System (Buyers, Sellers, Delivery Agents)",
        challenge:
          "The platform needed to support different user roles (buyers, sellers, and delivery agents), each with distinct permissions and workflows, without creating tightly coupled logic.",
        solution:
          "Designed a role-based system that separates user capabilities (listing products/services, purchasing, delivering) while sharing a unified account structure, ensuring flexibility and scalability as new roles or features are introduced.",
      },
      {
        title: "Handling Both Products and Services",
        challenge:
          "Unlike typical marketplaces that focus only on physical goods, the platform needed to support both products and services, which have different data structures and transaction flows.",
        solution:
          "Implemented a flexible listing model that accommodates both product-based and service-based entries, allowing consistent browsing and interaction while supporting different use cases under a unified system.",
      },
      {
        title: "Coordinating Peer-to-Peer Delivery",
        challenge:
          "Transactions required a way to handle delivery between students without relying on external logistics providers, while ensuring coordination between buyer, seller, and delivery agent.",
        solution:
          "Introduced a delivery agent system where students can opt in to handle deliveries, enabling a decentralized logistics layer and allowing orders to be fulfilled within the campus ecosystem.",
      },
      {
        title: "Trust & Safety in a Closed Marketplace",
        challenge:
          "Peer-to-peer marketplaces often face trust issues, especially when users are transacting directly.",
        solution:
          "Designed the platform around a campus-restricted model, where users are part of the same environment, reducing risk and improving trust through shared context and controlled access.",
      },
    ],
    results: [
      "Live across multiple Nigerian tertiary institutions, with vendor and delivery-agent onboarding.",
      "Single platform for campus commerce — products, services, and on-foot delivery in one flow.",
      "Verified-student access reduces fraud risk vs. open social-media marketplaces.",
    ],
    links: {
      demo: "https://kampurse.com",
      repo: "",
    },
    gallery: [
      "/assets/img/portfolio/kampurse/kampurse.png",
      "/assets/img/portfolio/kampurse/kampurse1.png",
      "/assets/img/portfolio/kampurse/kampurse2.png",
      "/assets/img/portfolio/kampurse/kampurse3.png",
      "/assets/img/portfolio/kampurse/kampurse4.png",
      "/assets/img/portfolio/kampurse/kampurse5.png",
    ],
  },
  munai: {
    title: "MunAI",
    subtitle: "AI transcription, live captioning, voiceovers, and real-time voice Q&A.",
    role: "Full-Stack Developer",
    status: "live",
    outcome:
      "An AI-first assistant that helps users plan, learn, and stay productive across tasks.",
    problem:
      "Creators, students, teams, and media houses waste hours manually transcribing audio/video, creating subtitles, or generating voiceovers across separate tools. Live events also need low-latency captions, and once text exists, users still struggle to quickly extract meaning, action items, or answers—especially hands-free.",
    solution:
      "MunAI consolidates transcription, live captioning, and text-to-speech into one platform with fast processing and export formats (TXT/SRT/VTT). After generating transcripts or voiceovers, it adds real-time voice Q&A so users can ask questions out loud and get instant clarification without switching apps.",
    summary:
      "MunAI is an AI audio platform that handles transcription, live captioning, and text-to-speech in one place. Upload audio/video for transcripts with speaker labels and TXT/SRT/VTT exports, run real-time captions for streams, generate natural voiceovers, and ask questions about your transcript by voice — all without switching tools.",
    context: [
      "Creators, students, teams, and media houses spend hours stitching together transcription, subtitles, and voiceovers across separate tools.",
      "Live events need low-latency captions, and once a transcript exists, users still struggle to extract action items or ask follow-up questions hands-free.",
      "Goal: consolidate transcription, live captioning, TTS, and voice Q&A into a single platform with clean exports.",
    ],
    responsibilities: [
      "Designed and built the transcription pipeline with speaker labels, timestamps, and TXT/SRT/VTT exports.",
      "Implemented low-latency live captioning with incremental streaming for events and broadcasts.",
      "Built text-to-speech voiceover generation with voice options for content, ads, and e-learning.",
      "Integrated real-time voice Q&A so users can query transcripts hands-free without leaving the app.",
    ],
    stack: {
      frontend: ["TypeScript", "Next.js", "Tailwind CSS", "Redux"],
      backend: ["NestJS", "JWT", "OpenAI"],
      database: ["Prisma", "PostgreSQL"],
      integrations: ["Redis"],
      "version control": ["Git / GitHub"],
      hosting: [],
    },
    features: [
      {
        title: "Batch Transcription + Exports",
        description:
          "Convert audio/video to text with speaker labels, timestamps, and exports (TXT/SRT/VTT).",
      },
      {
        title: "Live Captioning",
        description: "Real-time captions for streams and events with low latency.",
      },
      {
        title: "Text-to-Speech Voiceovers",
        description: "Generate natural voiceovers for content, ads, and e-learning in minutes.",
      },
      {
        title: "Talk to the AI — Out Loud",
        description:
          "Ask questions via voice after transcription or TTS and get instant answers hands-free.",
      },
    ],
    challenges: [
      {
        title: "Low-latency live captioning",
        challenge:
          "Live captions must feel real-time for streams and events while handling noisy audio and variable network conditions.",
        solution:
          "Designed a streaming pipeline that incrementally processes audio and updates captions continuously, prioritizing fast partial results with stable final text.",
      },
      {
        title: "Accurate, readable transcripts at scale",
        challenge:
          "Raw speech-to-text output can be hard to use without structure (speaker labels, timestamps) and must remain reliable across long recordings.",
        solution:
          "Implemented structured transcript generation with speaker labeling and time alignment, producing clean outputs that stay usable for review and sharing.",
      },
      {
        title: "Exports and downstream compatibility",
        challenge:
          "Users need transcripts and captions to work across editors and platforms (subtitles, notes, sharing) without manual reformatting.",
        solution:
          "Added standardized exports (TXT/SRT/VTT) and consistent formatting so outputs plug into common workflows immediately.",
      },
      {
        title: "Voice Q&A without switching context",
        challenge:
          "After transcription or voiceover, users still need a fast way to ask questions and get clarity—hands-free—without jumping between tools.",
        solution:
          "Integrated real-time voice Q&A tied to each transcript/asset, enabling low-friction follow-up questions and instant answers from the same workflow.",
      },
    ],
    results: [
      "AI audio platform combining transcription, live captioning, TTS, and voice Q&A in one workflow.",
      "Standardized exports (TXT/SRT/VTT) plug straight into editors, subtitle workflows, and sharing tools.",
      "Voice Q&A lets users get answers from their transcripts without context-switching between apps.",
    ],
    links: {
      demo: "https://www.munai.dev/",
      repo: "",
    },
    gallery: [
      "/assets/img/portfolio/munai/munai.png",
      "/assets/img/portfolio/munai/munai1.png",
      "/assets/img/portfolio/munai/munai2.png",
      "/assets/img/portfolio/munai/munai3.png",
      "/assets/img/portfolio/munai/munai4.png",
      "/assets/img/portfolio/munai/munai5.png",
    ],
  },
};

// Navigation items
export const navItems = [
  { name: "Home", href: "#hero", icon: "bi-house" },
  { name: "About", href: "#about", icon: "bi-person" },
  { name: "Skills", href: "#skills", icon: "bi-award" },
  { name: "Projects", href: "#portfolio", icon: "bi-images" },
  { name: "Services", href: "#services", icon: "bi-hdd-stack" },
  { name: "Contact", href: "#contact", icon: "bi-envelope" },
];

// Personal info
export const personalInfo = {
  name: "Andy James",
  title: "Full-Stack Developer & Indie Hacker",
  phone: "+234 9063368647",
  whatsapp: "+234 9056539717",
  email: "enehizenajames@gmail.com",
  city: "Abuja, Nigeria",
  address: "Lokogoma, Abuja, FCT",
  freelance: "Available",
  profileImage: "/assets/img/my-profile-img.jpg",
  typedItems: ["Full-Stack Developer", "Indie Hacker", "Programming Instructor", "Freelancer"],
};
