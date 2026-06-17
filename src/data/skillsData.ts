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
    name: "AI & Emerging Technologies",
    keywords: [
      "Agentic AI",
      "LangGraph",
      "CrewAI",
      "Large Language Models (LLMs)",
      "GitHub Copilot",
      "AI Workflow Automation",
      "Multi-Agent Systems"

    ]
  },
  {
    name: "Frontend Technologies",
    keywords: [
      "React.js", "Angular", "Next.js", "Bootstrap", "WordPress", "Responsive Web Design", "UI/UX Development",
      "Component-Based Architecture", "Custom Hooks", "React Query", "State Management", "Accessibility Standards (WCAG 2.1 AA)"
    ]
  },
  {
    name: "Backend Technologies",
    keywords: [
      "Node.js", "Express.js", "FastAPI", "GraphQL", "Spring Boot", "RESTful APIs", "JWT Authentication",
      "Role-Based Access Control (RBAC)", "Middleware Development", "Worker Threads", "Microservices Architecture"
    ]
  },
  {
    name: "Databases & Data Management",
    keywords: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design", "Data Modeling", "Query Optimization",
      "Indexing", "Normalization", "Caching Strategies"
    ]
  },
  {
    name: "Cloud & DevOps",

    keywords: [
      "AWS (ECS, ECR, Lambda, SQS, SNS, CloudWatch)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions",
      "CI/CD Pipelines", "Infrastructure Automation", "Containerization", "Deployment Automation"
    ]
  },
  {
    name: "Testing & Quality Assurance",
    keywords: [

      "Jest", "Vitest", "Postman", "JMeter", "Selenium", "Cypress", "Playwright", "SonarQube", "Test-Driven Development (TDD)",
      "Unit Testing", "Integration Testing", "Performance Testing", "Static Code Analysis",
    ]
  },
  {
    name: "Monitoring & Observability",
    keywords: [
      "Prometheus", "Grafana", "CloudWatch", "SNS Alerts", "Application Monitoring", "Performance Tracking",
      "Incident Detection", "Logging & Alerting"
    ]
  },
  {
    name: "Soft Skills",
    keywords: [
      "Problem-Solving", "System Design", "Cross-functional Collaboration", "Agile Development", "Technical Documentation",
      "Stakeholder Communication", "Leadership", "Analytical Thinking"
    ]
  }
];

export default skillsData;