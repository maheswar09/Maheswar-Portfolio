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
      "Maintained and enhanced Node.js and Express.js microservices for a school management system supporting 3000+ parents and staff, handling enrollment, billing, messaging, and analytics modules.",
      "Built secure and scalable REST APIs using JWT-based authentication, role-based access control (RBAC), and middleware-driven authorization, adhering to OWASP security standards.",
      "Implemented CI/CD pipelines with GitHub Actions, Docker, AWS ECR and AWS ECS (blue-green deployments) reducing deployment time by 25% and improving release reliability.",
      "Improved system reliability and observability by integrating AWS CloudWatch logging, metrics, and alerts, enabling proactive detection and resolution of production issues."
    ],
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Express.js', 'RxJS', 'jest', 'Postman', 'GitHub Actions', 'Docker', 'AWS (ECR, ECS, CloudWatch)']
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
      'Built an IU-branded WordPress block theme using PHP, HTML, JavaScript and Rivet 2 design system, improving UI/UX consistency across 500+ university blogs.',
      'Ensured 100% WCAG 2.1 AA accessibility compliance using Siteimprove audits, optimizing templates and MySQL data handling.',
      'Documented user guidelines, development process, and code structure, improving update cycles and onboarding efficiency for future developers.'
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
      'Built and maintained RESTful microservices using Node.js, Express, and PostgreSQL for an e-learning platform serving 5k+ active users, following Agile methodologies to ensure on-time delivery.',
      'Optimized PostgreSQL performance through schema normalization, indexing strategies, and Redis caching, reducing query latency by 40% and improving overall API throughput.',
      'Followed TDD practices to write unit and integration tests using Jest validating service logic, database interactions, and REST API contracts to reduce production defects.',
      'Developed a payment microservice integrating PayPal APIs, implementing webhook reconciliation, idempotent transaction handling, and validated scalability via JMeter load testing for 2000+ concurrent users.'
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'PayPal Gateway', 'Redis', 'Docker', 'JMeter', 'GitHub Actions']
  },
  // {
  //   id: 4,
  //   year: '2023',
  //   title: 'Software Developer Intern',
  //   company: 'SrasysInc',
  //   location: 'Bangalore, India',
  //   duration: 'Jan 2023 – Jul 2023',
  //   current: false,
  //   description: [
  //     'Developed Srasys Academy, a full-stack e-learning platform using React, Tailwind CSS, Node.js, Express.js and PostgreSQL achieving 40% faster page load time and enabling a seamless experience for over 500 users.',
  //     'Integrated PayPal API for secure transactions, supporting 100+ error-free payments within first month.',
  //     '/n',
  //     'Architected MeReg Application, a school management system using Angular, Node.js and PostgreSQL for Greystone House School, supporting enrollment and payments for 300+ users.',
  //     'Implemented a plan-based fee payment system and integrated Stripe for secure transactions, utilizing webhooks to update payment status in the database and automating due remainders for parents.',
  //     'Designed and implemented a scalable database schema to support 500+ initial records with 20% projected annual growth and a role-based access control for admins, parents and staff.'
  //   ],
  //   technologies: ['Angular', 'Tailwind CSS', 'Node.js', 'Firebase', 'API']
  // },



];
