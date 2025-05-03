export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData = [
  {
    id: 1,
    title: "Starbucks Procurement Multi-Agent System",
    category: "Artificial Intelligence (AI) & Machine Learning",
    description:
      "Built an autonomous multi-agent system using CrewAI and FastAPI to automate procurement workflows. Implemented real-time inter-agent communication and built a dashboard for supplier sourcing and order processing.",
    metrics: [
      { label: "Autonomous Agents", value: "Real-time" },
      { label: "Workflow Automation", value: "Enabled" },
    ],
    technologies: ["CrewAI", "Python", "FastAPI", "AI", "Multi-Agent Systems"],
    githubUrl: "https://github.com/D-Harshith/Procurement-Multi-Agent-System",
    image: "/Sree-Venkat-Portfolio/images/projects/multiagent.jpg",
  },
  {
    id: 2,
    title: "Multimodal Document Analysis Platform",
    category: "Natural Language Processing (NLP)",
    description:
      "Architected a RAG-based system using LangChain, OpenAI, and Streamlit to process documents with semantic search and context-aware Q&A capabilities.",
    metrics: [
      { label: "Document Formats", value: "10+" },
      { label: "Searchability", value: "Context-aware" },
    ],
    technologies: ["RAG", "AI", "LangChain", "OpenAI", "Streamlit"],
    githubUrl: "https://github.com/naveenaddanki84/LH24_oola",
    image: "/Sree-Venkat-Portfolio/images/projects/documentanalysis.jpg",
  },
  {
    id: 3,
    title: "Autonomous Driving - Car Detection",
    category: "Computer Vision",
    description:
      "Developed YOLO-based CNN models to detect road objects in real-time with improved accuracy and reduced false positives.",
    metrics: [
      { label: "Objects Detected", value: "15+" },
      { label: "Training Reduction", value: "30%" },
    ],
    technologies: ["YOLO", "CNN", "Object Detection", "Computer Vision", "Python"],
    githubUrl: "https://github.com/Venkat450/Autonomous-Driving---Car-Detection-Using-YOLO",
    image: "/Sree-Venkat-Portfolio/images/projects/car-detection.jpg",
  },
  {
    id: 4,
    title: "Parkinson’s Disease Early Detection System",
    category: "Artificial Intelligence (AI) & Machine Learning",
    description:
      "Developed a voice analysis system using TensorFlow, Keras, and OpenSMILE achieving 98% accuracy and reducing feature dimensionality by 85%.",
    metrics: [
      { label: "Accuracy", value: "98%" },
      { label: "Feature Reduction", value: "85%" },
    ],
    technologies: ["Machine Learning", "Python", "TensorFlow", "OpenSMILE", "PRAAT", "Librosa"],
    githubUrl: "https://github.com/naveenaddanki84/parkinsons_detection_using_voice",
    image: "/Sree-Venkat-Portfolio/images/projects/parkinsons.jpg",
  },
  {
    id: 5,
    title: "Exploratory Analysis of 911 Emergency Calls",
    category: "Business Intelligence & Analytics",
    description:
      "Performed time-series and regression analysis on 100K+ emergency calls using Linear Regression and GAM models, achieving 90% forecast accuracy.",
    metrics: [
      { label: "Forecast Accuracy", value: "90%" },
      { label: "Efficiency Improvement", value: "15%" },
    ],
    technologies: ["R", "Linear Regression", "GAM", "Time-Series Analysis"],
    githubUrl: "https://github.com/Venkat450/EDA",
    image: "/Sree-Venkat-Portfolio/images/projects/911calls.jpg",
  },
  {
    id: 6,
    title: "E-commerce Sales and Profit Optimization",
    category: "Business Intelligence & Analytics",
    description:
      "Analyzed e-commerce transactions in Power BI with ETL pipelines for processing and KPI analysis. Delivered 15% revenue growth and 10% cost reduction.",
    metrics: [
      { label: "Revenue Growth", value: "15%" },
      { label: "Cost Reduction", value: "10%" },
    ],
    technologies: ["Power BI", "DAX", "ETL", "Data Processing", "KPI Analysis"],
    githubUrl: "https://github.com/Venkat450/Power-BI/blob/main/Ecommerce%20Analysis.pbix",
    image: "/Sree-Venkat-Portfolio/images/projects/ecommerce.jpg",
  },
  {
    id: 7,
    title: "AI-Powered Meeting Companion",
    category: "Natural Language Processing (NLP)",
    description:
      "Built a real-time meeting summarization pipeline using Hugging Face, Deepgram and Node.js to handle audio ingestion, transcription, and sentiment analysis.",
    metrics: [
      { label: "Summarization", value: "Real-time" },
      { label: "Transcripts Processed", value: "Actionable" },
    ],
    technologies: ["NLP", "Sentiment Analysis", "Data Engineering", "Node.js", "Hugging Face", "Deepgram"],
    githubUrl: "https://github.com/maheswar09/Spades",
    image: "/Sree-Venkat-Portfolio/images/projects/meeting-companion.jpg",
  },
  {
    id: 8,
    title: "Olympic Games Analysis Dashboard",
    category: "Data Engineering & Visualization",
    description:
      "Built an interactive Streamlit dashboard analyzing 120 years of Olympic Games data with ETL pipelines and 30+ visualizations.",
    metrics: [
      { label: "Years of Data", value: "120+" },
      { label: "Visualizations", value: "30+" },
    ],
    technologies: ["Python", "Streamlit", "Plotly", "diagrams.net"],
    githubUrl: "https://github.com/WannaBeNeuralNetwork/Data_Visualizations_INFO-590",
    image: "/Sree-Venkat-Portfolio/images/projects/olympics.jpg",
  },
  {
    id: 9,
    title: "Sentiment Analysis with Deep Learning using BERT",
    category: "Natural Language Processing (NLP)",
    description:
      "Fine-tuned BERT on SMILE Twitter dataset to classify multi-class sentiment using tokenization, AdamW optimizer and F1-score evaluation.",
    metrics: [
      { label: "F1 Score", value: "High" },
      { label: "Dataset", value: "SMILE Twitter" },
    ],
    technologies: ["BERT", "Transformers", "PyTorch", "scikit-learn", "NLP"],
    githubUrl: "https://github.com/Venkat450/Sentiment-Analysis-with-Deep-Learning-using-BERT",
    image: "/Sree-Venkat-Portfolio/images/projects/bert-sentiment.jpg",
  },
  {
    id: 10,
    title: "Netflix Movie Recommendation System using ChromaDB",
    category: "Recommendation Systems",
    description:
      "Built semantic search based movie recommendation system using Sentence Transformers and ChromaDB to enable personalized recommendations.",
    metrics: [
      { label: "Titles Processed", value: "1000" },
      { label: "Recommendation Type", value: "Semantic Search" },
    ],
    technologies: ["ChromaDB", "Sentence Transformers", "Pandas", "Python"],
    githubUrl: "https://github.com/Venkat450/Netflix-Movie-Recommendation-System-Using-ChromaDB",
    image: "/Sree-Venkat-Portfolio/images/projects/netflix-recommendation.jpg",
  },
];

export default projectsData;
