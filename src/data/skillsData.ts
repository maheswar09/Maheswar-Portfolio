export interface Skill {
    name: string;
    level: number; // 1-10
    category: string;
    keywords: string[];
  }
  
  export const skillsData = [
    {
      name: "Machine Learning",
      category: "AI/ML",
      keywords: [
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Transformers",
        "ResNet",
        "YOLO",
        "CNN",
        "RNN",
        "Deep Learning"
      ]
    },
    {
      name: "Natural Language Processing & LLM",
      category: "AI/ML",
      keywords: [
        "BERT",
        "LangChain",
        "LangGraph",
        "CrewAI",
        "Whisper",
        "RAG",
        "SpaCy",
        "NLTK",
        "Parselmouth"
      ]
    },
    {
      name: "Specialized Domains",
      category: "AI/ML",
      keywords: [
        "Computer Vision",
        "Medical Image Processing",
        "Natural Language Processing (NLP)"
      ]
    },
    {
      name: "Data Analysis",
      category: "Analytics",
      keywords: [
        "Pandas",
        "NumPy",
        "SQL",
        "JMP Pro",
        "Matplotlib",
        "Seaborn",
        "Microsoft Excel",
        "Google Sheets"
      ]
    },
    {
      name: "Data Visualization",
      category: "Analytics",
      keywords: [
        "Power BI",
        "Tableau",
        "Oracle Analytics Cloud (OAC)",
        "OBIEE",
        "D3.js",
        "JMP Pro"
      ]
    },
    {
      name: "Cloud & Deployment",
      category: "Cloud",
      keywords: [
        "AWS",
        "Azure",
        "Docker",
        "Streamlit",
        "FastAPI",
        "HPC",
        "Linux",
        "Windows"
      ]
    },
    {
      name: "Programming",
      category: "Programming",
      keywords: [
        "Python",
        "SQL",
        "PL/SQL",
        "R",
        "MATLAB",
        "C",
        "C++",
        "Java"
      ]
    },
    {
      name: "Data Engineering",
      category: "Data",
      keywords: [
        "ETL",
        "ELT",
        "Alteryx",
        "Oracle Data Integrator (ODI)",
        "PostgreSQL",
        "Airflow",
        "Kafka",
        "Git"
      ]
    },
    {
      name: "Automation & Productivity",
      category: "Tools",
      keywords: [
        "Microsoft Power Automate",
        "Microsoft Word",
        "Google Sheets"
      ]
    },
    {
      name: "Statistics",
      category: "Analytics",
      keywords: [
        "Hypothesis Testing",
        "Regression",
        "Bayesian Inference",
        "A/B Testing",
        "ANOVA",
        "Correlation",
        "P-Value Interpretation"
      ]
    }
  ];
  
  export default skillsData;
  