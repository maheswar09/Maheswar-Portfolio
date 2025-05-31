export interface Skill {
  name: string;
  // level: number; // 1-10
  // category: string;
  keywords: string[];
}

export const skillsData = [
  {
    name: "Programming",
    // category: "Programming",
    keywords: [
      "C",
      "C++",
      "Python",
      "Java",
      "C#",
      "Data Structures",

    ]
  },
  {
    name: "Web Development",
    // category: "AI/ML",
    keywords: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Expres.js",
      "React.js",
      "Angular",
      "PHP",
      "jQuery",
      "RESTful API",
      "npm"
    ]
  },
  {
    name: "App Development",
    // category: "Analytics",
    keywords: [
      "Android Studio",
      "React Native",
      "Flutter"
    ]
  },
  {
    name: "Databases",
    // category: "AI/ML",
    keywords: [
      "MySQL",
      "MongoDB",
      "PostgreSQL"
    ]
  },
  {
    name: "Machine Learning & AI Frameworks",
    // category: "AI/ML",
    keywords: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "CNN",
      "Pandas"
    ]
  },
  {
    name: "Cloud",
    // category: "Analytics",
    keywords: [
      "Google Firebase",
      "AWS Cloud practitioner",
      "AWS Associate Developer"
    ]
  },
  {
    name: "Java Frameworks",
    // category: "Data",
    keywords: [
      "Spring Boot",
      "Maven",
      "Hibernate"
    ]
  },
  {
    name: "Automation Testing",
    // category: "Tools",
    keywords: [
      "Selenium",
    ]
  },
  {
    name: "Other Tools",
    // category: "Cloud",
    keywords: [
      "Git",
      "Docker",
      "Unity",
      "Eclipse IDE",
      "Microsoft Excel",
      "WordPress",
      "Visual Studio Code"
    ]
  },


];

export default skillsData;
