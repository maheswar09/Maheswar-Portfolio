export interface Skill {
  name: string;
  keywords: string[];
}

export const skillsData = [
  {
    name: "Programming Languages",
    keywords: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C",
      "C++",
      "HTML",
      "CSS",
      "PHP",
      "jQuery"

    ]
  },
  {
    name: "Frontend",
    keywords: [
      "Angular", "React", "Next.js", "Bootstrap", "React Native", "Taiwind CSS", "Rivet Design System"
    ]
  },
  {
    name: "Backend",
    keywords: [
      "FastAPI", "Spring Framework", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "JDBC", "Maven", "Node.js", "Express.js", "GraphQL"
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
    name: "Cloud & DevOps",

    keywords: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "AWS (EC2, Lambda, ECS, S3, ECR, CloudWatch)"
    ]
  },
  {
    name: "Testing",
    keywords: [

      "Pytest", "JUnit 5", "Mockito", "Spring Boot Test", "Jest", "Selenium", "Postman", "JMeter", "Vitest", "Supertest"
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