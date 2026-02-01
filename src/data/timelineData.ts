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
    company: 'SrasysInc',
    location: 'Ellicot City, MD, USA',
    duration: 'Jul 2025 – Present',
    current: true,
    description: [
      "Built mobile first single page dashboards using Angular, RxJS, and REST APIs, improving initial load times by 35% and increasing usability across devices.",
      "Developed reusable UI components and shared state services with Angular component architecture and lazy loading, reducing feature delivery time by 20%.",
      "Optimized front end performance and API consumption through client-side caching, pagination, and debounced requests, decreasing redundant network calls and improving responsiveness.",
      "Translated product requirements and design mockups into accessible interfaces by collaborating with designers and backend engineers in Agile sprints, delivering high quality features on schedule."
    ],
    technologies: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL', 'TypeScript', 'RxJS', 'JUnit', 'Postman', 'GitHub Actions', 'Docker', 'AWS (ECR, ECS, CloudWatch)']
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
      "Delivered an IU-branded WordPress block theme using HTML, CSS, JavaScript, PHP, and the Rivet 2 design system, standardizing UI/UX across 500+ university blogs.",
      "Implemented full WCAG 2.1 AA accessibility compliance by auditing templates with Siteimprove and applying semantic HTML, and ARIA attributes, achieving 100% compliance scores.",
      "Tested and validated cross browser and cross device compatibility using manual and automated testing workflows, ensuring consistent user experience across platforms."
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
      "Designed scalable, resuable React components using Hooks, Context API, and Tailwind CSS supporting 5000+ active users.",
      "Optimized rendering performance through memoization, efficient state management, and optimized API consumption, reducing page load times by 40%.",
      "Integrated RESTful APIs into front end workflows with robust loading states, error handling, and async data fetching, improving UI reliability and user experience.",
      "Wrote unit and integration tests for UI components using Jest and React Testing Library, validating component behavior and user interactions, reducing regression defects and improving release stability.  • Maintained clean and reliable JavaScript codebases by linting, documenting, and reviewing ES2015+ code following team standards, improving long-term maintainability."
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', ' IU’s Rivet Design System (Rivet 2)', 'WordPress', 'Siteimprove', 'MySQL']
  },
  {
    id: 4,
    year: '2023',
    title: 'Software Developer Intern',
    company: 'SrasysInc',
    location: 'Ellicot City, MD, USA & Bangalore, India',
    duration: 'Jan 2023 – May 2024',
    current: false,
    description: [
      'Designed scalable React components with Hooks, Context API, and Tailwind CSS for course dashboards and payment workflows, serving 5000+ active users.',
      'Optimized rendering performance through memoization, efficient state management, and optimized data fetching, improving page load times by 40%.',
      'Integrated PayPal payment workflows into the UI, providing real-time transaction updates, error handling, and retry flows supporting 1,000+ successful monthly transactions.',
      'Followed TDD practices to write unit and integration tests using Jest and React Testing Library, validating component behavior, user interactions, and payment flows to ensure UI reliability and reduce regression issues.'
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
