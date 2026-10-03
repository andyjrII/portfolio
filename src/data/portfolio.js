/**
 * Portfolio projects data
 * Easily maintainable - just add/update projects here
 */

export const portfolioData = [
  {
    id: 1,
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'web-development',
    image: '/assets/img/portfolio/portfolio-1.jpg',
    client: 'Retail Solutions Inc.',
    projectDate: '2023',
    projectUrl: 'https://example.com/project1',
    description: 'A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    features: [
      'Real-time inventory tracking',
      'Secure payment integration',
      'Admin dashboard with analytics',
      'Mobile-responsive design',
      'SEO optimized',
    ],
  },
  {
    id: 2,
    slug: 'task-management-app',
    title: 'Task Management App',
    category: 'web-development',
    image: '/assets/img/portfolio/portfolio-2.jpg',
    client: 'Productivity Co.',
    projectDate: '2023',
    projectUrl: 'https://example.com/project2',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
    features: [
      'Real-time collaboration',
      'Task assignment and tracking',
      'Team workspaces',
      'Progress analytics',
      'Mobile app integration',
    ],
  },
  {
    id: 3,
    slug: 'health-fitness-tracker',
    title: 'Health & Fitness Tracker',
    category: 'mobile-app',
    image: '/assets/img/portfolio/portfolio-3.jpg',
    client: 'FitLife Technologies',
    projectDate: '2022',
    projectUrl: 'https://example.com/project3',
    description: 'A comprehensive health and fitness tracking application with workout plans, nutrition tracking, and progress visualization.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Chart.js'],
    features: [
      'Workout planning',
      'Nutrition tracking',
      'Progress charts',
      'Social features',
      'Wearable device integration',
    ],
  },
  {
    id: 4,
    slug: 'real-estate-platform',
    title: 'Real Estate Platform',
    category: 'web-development',
    image: '/assets/img/portfolio/portfolio-4.jpg',
    client: 'Property Hub',
    projectDate: '2022',
    projectUrl: 'https://example.com/project4',
    description: 'A modern real estate platform with advanced search, virtual tours, and agent management system.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
    features: [
      'Advanced property search',
      'Virtual tour integration',
      'Agent dashboard',
      'Mortgage calculator',
      'Property comparison',
    ],
  },
  {
    id: 5,
    slug: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    category: 'web-development',
    image: '/assets/img/portfolio/portfolio-5.jpg',
    client: 'Marketing Pro',
    projectDate: '2023',
    projectUrl: 'https://example.com/project5',
    description: 'A comprehensive social media management dashboard with scheduling, analytics, and multi-platform support.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    features: [
      'Multi-platform posting',
      'Analytics dashboard',
      'Content scheduling',
      'Team collaboration',
      'Automated reporting',
    ],
  },
  {
    id: 6,
    slug: 'learning-management-system',
    title: 'Learning Management System',
    category: 'web-development',
    image: '/assets/img/portfolio/portfolio-6.jpg',
    client: 'EduTech Solutions',
    projectDate: '2023',
    projectUrl: 'https://example.com/project6',
    description: 'A feature-rich learning management system with course creation, student tracking, and interactive learning tools.',
    technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC'],
    features: [
      'Course creation tools',
      'Video conferencing',
      'Progress tracking',
      'Quiz and assessment',
      'Certificate generation',
    ],
  },
]

export const portfolioCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web-development', name: 'Web Development' },
  { id: 'mobile-app', name: 'Mobile Apps' },
  { id: 'ui-ux', name: 'UI/UX Design' },
]

export const getPortfolioBySlug = (slug) => {
  return portfolioData.find((project) => project.slug === slug)
}

export const getPortfolioById = (id) => {
  return portfolioData.find((project) => project.id === id)
}