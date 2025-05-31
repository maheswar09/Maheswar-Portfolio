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
    title: 'Teaching Assistant - Software Engineering I',
    company: 'Indiana University Bloomington',
    location: 'Bloomington, IN, USA',
    duration: 'Aug 2024 – May 2025',
    current: false,
    description: [
      'Mentored six student teams on enhancing the Angband game, guiding them through milestones such as configuration management, CI/CD, and containerization; facilitated 20+ client calls using agile methodologies, and provided feedback on code quality and debugging to improve project outcomes.',
      'Collaborated with faculty to design course content on software engineering principles, covering Git, testing, security, and distributed deployment, enhancing students’ practical understanding and encouraging hands-on involvement in real-world system development'
    ],
    technologies: ['Communication & Collaboration', 'Team Management', 'Leadership', 'Time Management', 'Debugging Support', 'Agile Methodologies']
  },
  {
    id: 2,
    year: '2024',
    title: 'CMS Developer Intern',
    company: 'University Information Technology Services (UITS), Indiana University (IU)',
    location: 'Bloomington, IN, USA',
    duration: 'May 2024 – Jul 2024',
    current: false,
    description: [
      'Built an IU-branded WordPress block theme using HTML, CSS, JavaScript, PHP, IU’s Rivet Design System (Rivet 2), and WordPress, enhancing navigation features and improving user experience through responsive design and consistent UI across the platform.',
      'Ensured 100% compliance with WCAG 2.1 AA accessibility standards using Siteimprove and utilized MySQL to efficiently store and retrieve post-related data, optimizing content management workflows and ensuring seamless data handling for the EduBlog platform.',
      'Documented development processes, code structure, and user guidelines, streamlining onboarding for future developers and enabling efficient implementation of updates and enhancements.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', ' IU’s Rivet Design System (Rivet 2)', 'WordPress', 'Siteimprove', 'MySQL']
  },
  {
    id: 3,
    year: '2024',
    title: 'Software Developer Intern',
    company: 'SrasysInc',
    location: 'Ellicot City, MD, USA',
    duration: 'Jan 2024 – May 2024',
    current: false,
    description: [
      'Developed Srasys Academy, a full-stack e-learning platform using React, Tailwind CSS, Node.js, Express.js, and PostgreSQL, achieving a 40% faster page load time and enabling a seamless experience for 500+ registered users.',
      'Integrated PayPal payment gateway, enabling secure and real-time course transactions; supported over 100 successful payments within the first month of launch with zero reported transaction failures.',
      'Built responsive and WCAG 2.1 AA-compliant front-end components with advanced course filtering and search functionalities, increasing user engagement time by 30% and improving course discovery rates.'
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'PayPal Gateway']
  },
  {
    id: 4,
    year: '2023',
    title: 'Software Developer Intern',
    company: 'SrasysInc',
    location: 'Bangalore, India',
    duration: 'Jan 2023 – Jul 2023',
    current: false,
    description: [
      'Developed the ME Registration Application, a cloud-based school management system using Angular, Node.js, and Firebase, streamlining enrolment, registration, and payment processes for Greystone House School, serving 300+ students and staff.',
      'Integrated a secure payment module with real-time tracking and reporting capabilities for infant, toddler, and primary programs, processing over 200 transactions monthly with 100% accuracy and enabling automated due reminders for parents.',
      'Architected a scalable Firebase database schema to support an initial 500 records with a projected 20% annual growth and implemented role-based access controls using Firebase Authentication for admin and management staff, ensuring secure, efficient data management and scalability for future parent-level access.',
    ],
    technologies: ['Angular', 'Tailwind CSS', 'Node.js', 'Firebase', 'API']
  },



];
