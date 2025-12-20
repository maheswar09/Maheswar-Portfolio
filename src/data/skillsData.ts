export interface Skill {
  name: string;
  keywords: string[];
}

export const skillsData = [
  {
    name: "Programming Languages",
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
    keywords: [
      "Angular", "React", "Node.js", "Next.js", "Bootstrap", "React Native", "Express.js", "FastAPI", "JUnit"
    ]
  },
  {
    name: "Databases",
    keywords: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Redis"
    ]
  },
  {
    name: "Cloud",

    keywords: [
      "Google Firebase",
      "AWS (EC2, Lambda, ECS, S3, ECR, CloudWatch)"
    ]
  },
  {
    name: "Developer Tools & DevOps",
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
    keywords: [
      "Agentic AI",
      "LangGraph",
      "Crew AI",
      "GraphQL",
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