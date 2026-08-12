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
    company: 'Humana',
    location: 'Remote, USA',
    duration: 'June 2025 – Present',
    current: true,
    description: [],
    technologies: []
  },
  {
    id: 2,
    year: '2025',
    title: 'AI Engineer',
    company: 'American Express',
    location: 'Remote, USA',
    duration: 'May 2024 – May 2025',
    current: false,
    description: [],
    technologies: []
  },
  {
    id: 3,
    year: '2024',
    title: 'Software Engineer',
    company: 'University Information Technology Services (UITS), Indiana University (IU)',
    location: 'Bloomington, IN, USA',
    duration: 'Dec 2023 – May 2024',
    current: false,
    description: [],
    technologies: []
  },
  {
    id: 4,
    year: '2021',
    title: 'Full Stack Engineer',
    company: 'Brightwheel',
    location: 'Remote, India',
    duration: 'Aug 2021 – Jul 2023',
    current: false,
    description: [],
    technologies: []
  },
  {
    id: 5,
    year: '2021',
    title: 'Software Engineer Intern',
    company: 'Brightwheel',
    location: 'Remote, India',
    duration: 'Jan 2021 – Jul 2021',
    current: false,
    description: [],
    technologies: []
  },
  {
    id: 6,
    year: '2020',
    title: 'Machine Learning Researcher',
    company: 'International Institute of Information Technology (IIIT)',
    location: 'Bhubaneswar, India',
    duration: 'Jan 2020 – Sep 2022',
    current: false,
    description: [],
    technologies: []
  },
];
