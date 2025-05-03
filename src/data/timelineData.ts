export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2025',
    title: 'Graduate Research Assistant',
    company: 'Indiana University Bloomington, School of Medicine',
    location: 'Bloomington, IN',
    duration: 'Jan 2025 – Present',
    current: true,
    description: 'Constructed multimodal pipelines integrating GWAS with neuroimaging and clinical data for Alzheimer’s research.',
    achievements: [
      'Built ML models using ResNet-50 and transformers for genomic and MRI data.',
      'Handled 100+ GB imaging data using SPM12, FSL, and Nilearn for connectivity analysis.',
      'Visualized GWAS results with R to improve interpretability.',
    ],
    technologies: ['Python', 'TensorFlow', 'SPM12', 'R', 'PLINK', 'Nilearn']
  },
  {
    id: 2,
    year: '2023',
    title: 'Master of Science - Data Science',
    company: 'Indiana University Bloomington',
    location: 'Bloomington, IN',
    duration: 'Aug 2023 – May 2025',
    current: true,
    description: 'Pursuing MS in Data Science focused on ML, NLP, Data Mining, Visualization, Cloud, and Statistical Analysis.',
    achievements: [
      'Completed coursework in Applying ML Techniques in NLP, Predictive Analysis and Data Mining, and Advanced Database Concepts.'
    ],
    technologies: ['Python', 'SQL', 'R', 'Power BI', 'AWS']
  },
  {
    id: 3,
    year: '2021',
    title: 'Programmer Analyst - BI Insights',
    company: 'Cognizant Technology Solutions',
    location: 'Hyderabad, India',
    duration: 'Apr 2021 – Jul 2022',
    current: false,
    description: 'Designed and optimized ETL data pipelines and data models supporting ad-hoc reporting and advanced analytics.',
    achievements: [
      'Automated data validation reducing manual efforts.',
      'Built interactive dashboards using OAC and OBIEE.',
      'Enhanced PL/SQL procedures for optimized queries.'
    ],
    technologies: ['SQL', 'Oracle ODI', 'OAC', 'OBIEE', 'PL/SQL']
  },
  {
    id: 4,
    year: '2020',
    title: 'Data Science Intern',
    company: 'Inmovidu (in partnership with IIT Bombay)',
    location: 'India',
    duration: 'Sep 2020 – Feb 2021',
    current: false,
    description: 'Built deep learning pipeline using ResNet-50 and YOLOv5 for COVID face mask detection and facial recognition.',
    achievements: [
      'Deployed API using FastAPI and designed real-time monitoring dashboard.',
      'Integrated AWS for live insights and performance tracking.',
      'Achieved 92% accuracy with pre-trained models.'
    ],
    technologies: ['Python', 'YOLOv5', 'ResNet-50', 'FastAPI', 'Power BI', 'AWS']
  }
];
