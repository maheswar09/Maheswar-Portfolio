export interface Skill {
  name: string;
  // level: number; // 1-10
  // category: string;
  keywords: string[];
}

export const skillsData = [
  {
    name: "Programming Languages",
    // category: "Programming",
    keywords: [
      "C",
      "C++",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML",
      "CSS",
      "PHP"

    ]
  },
  {
    name: "Frameworks & Libraries",
    // category: "AI/ML",
    keywords: [
      "Angular", "React", "Node.js", "Next.js", "Bootstrap", "React Native", "Express.js", "FastAPI", "JUnit"
    ]
  },
  {
    name: "Databases",
    // category: "Analytics",
    keywords: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Redis"
    ]
  },
  {
    name: "Cloud",
    // category: "AI/ML",
    keywords: [
      "Google Firebase",
      "AWS (EC2, Lambda, ECS, S3, ECR, CloudWatch)"
    ]
  },
  {
    name: "Developer Tools & DevOps",
    // category: "AI/ML",
    keywords: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Git",
      "Unity",
      "Tableau",
      "Selenium"
    ]
  },
  {
    name: "Core Competencies",
    // category: "Analytics",
    keywords: [
      "Web Development",
      "RESTful APIs",
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Database Management",
      "System Design",
      "Software Development Life Cycle",
      "Debugging"
    ]
  }
];

export default skillsData;
