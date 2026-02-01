export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  current: boolean;
  description: string[];
  // achievements: string[];
  technologies: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2025',
    title: 'Software Engineer',
    company: 'Srasys Inc.,',
    location: 'Ellicot City, MD, USA',
    duration: 'Jul 2025 – Present',
    current: true,
    description: [
      'Maintained and enhanced Java Spring Boot microservices supporting enrollment, billing, messaging, and analytics modules, serving 3,000+ parents and staff with high availability. ',
      'Developed reusable UI components and shared state services with Angular component architecture and lazy loading, reducing feature delivery time by 20%. ',
      'Optimized front end performance and API consumption through client-side caching, pagination, and debounced requests, decreasing redundant network calls and improving responsiveness. ',
      'Implemented CI/CD pipelines with GitHub Actions, Docker, AWS ECR and AWS ECS (blue-green deployments) reducing deployment time by 25%. '
    ],
    technologies: ['Angular', 'Java', 'Spring MVC', 'PostgreSQL', 'Spring Security', 'Spring AOP', 'RxJS', 'JUnit', 'Postman', 'GitHub Actions', 'Docker', 'AWS (ECR, ECS, CloudWatch)']
  },
  {
    id: 2,
    year: '2025',
    title: 'Teaching Assistant - Software Engineering',
    company: 'Indiana University Bloomington',
    location: 'Bloomington, IN, USA',
    duration: 'Aug 2024 – May 2025',
    current: false,
    description: [
      'Mentored six student teams on enhancing the Angband game focusing on version control, CI/CD workflows, containerization, and agile planning.',
      'Facilitated 20+ client meetings and provided technical feedback to improve code quality, debugging practices, and delivery timelines.',
      'Contributed to course content design, covering Git, automated testing, deployment, and software architecture.'
    ],
    technologies: ['Communication & Collaboration', 'Team Management', 'Leadership', 'Time Management', 'Debugging Support', 'Agile Methodologies']
  },
  {
    id: 3,
    year: '2024',
    title: 'CMS Developer Intern',
    company: 'University Information Technology Services (UITS), Indiana University (IU)',
    location: 'Bloomington, IN, USA',
    duration: 'May 2024 – Jul 2024',
    current: false,
    description: [
      'Delivered an IU-branded WordPress block theme using PHP, HTML, JavaScript and Rivet 2 design system, standardizing UI/UX across 500+ university blogs. ',
      'Implemented full WCAG 2.1 AA accessibility compliance by auditing templates with Siteimprove and applying semantic HTML, and ARIA attributes, achieving 100% compliance scores. ',
      'Created developer and user documentation outlining workflows, code structure, and update processes, reducing onboarding time and improving future maintenance efficiency.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', ' IU’s Rivet Design System (Rivet 2)', 'WordPress', 'Siteimprove', 'MySQL']
  },
  {
    id: 4,
    year: '2023',
    title: 'Software Engineer',
    company: 'Srasys Inc.,',
    location: 'Ellicot City, MD, USA & Bangalore, India',
    duration: 'Jan 2023 – May 2024',
    current: false,
    description: [
      'Built and maintained a full stack e-learning platform using React on the front end and Spring Boot, Spring MVC, and Spring Data JPA on the backend, supporting 5,000+ active users with reliable end-to-end workflows. ',
      'Designed reusable and scalable React component architectures using Hooks, Context API, and modern UI patterns with real-time backend integrations, enabling data-driven dashboards and seamless payment workflows. ',
      'Optimized PostgreSQL performance through schema normalization, indexing strategies, and Redis caching, reducing query latency by 40% and improving overall API throughput. ',
      'Developed a payment microservice integrating PayPal APIs with webhook reconciliation, idempotent transaction handling, and validated scalability via JMeter load testing for 2000+ concurrent users.'
    ],
    technologies: ['React', 'Tailwind CSS', 'Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'PayPal Gateway', 'Redis', 'Docker', 'JMeter', 'GitHub Actions']
  },
];
