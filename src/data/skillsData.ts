export interface Skill {
  name: string;
  keywords: string[];
}

export const skillsData = [
  {
    name: "Programming Languages",
    keywords: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "C++",
      "jQuery",
      "HTML",
      "CSS",
      "PHP"

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
      "Node.js", "Express.js", "FastAPI", "Spring Framework", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "JDBC", "Maven", "GraphQL"
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

      "Jest", "Vitest", "Supertest", "JUnit 5", "Mockito", "Spring Boot Test", "Selenium", "Postman", "JMeter",
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