export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string[];
  image: string;
  category: string;
  technologies: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData = [
  {
    id: 0,
    title: "Multi-Agent Unit Test Generation System",
    category: "Agentic AI",
    description: [
      "Built a LangGraph-based multi-agent system that autonomously analyzes source code, generates unit tests, injects mocks, executes test suites, remediates failures, and commits validated tests back to the repository.",
      "Designed stateful execution graphs with retries and conditional branching to enable self-healing workflows that detect failures, apply targeted fixes, and re-run tests until quality gates are met.",
      "Streamlined CI/CD pipelines by auto-committing generated test suites to GitHub, enabling zero-touch test maintenance and accelerating release cycles."
    ],
    technologies: ["LangGraph", "Python", "LLMs", "CI/CD", "GitHub Actions"],
    githubUrl: "https://github.com/maheswar09/AI_Unit_Test",
    image: "images/projects/Agents.png",
  },
  {
    id: 1,
    title: "Rental Voyage",
    category: "Web Development",
    description:
      ["Developed a full stack Rental & Services Management System using the MERN stack (MongoDB, Express.js, React, Node.js), implementing features such as user authentication, property search, and real-time messaging to enhance user experience.",
        "Designed responsive and WCAG-compliant frontend interfaces in React.js for renter, owner, and admin views and built backend services with Express.js and Node.js, integrating RESTful APIs and MongoDB for efficient storage and retrieval of user profiles, property listings, and reservations, supporting a scalable microservices architecture.",
        "Collaborated with a team of three using Agile methodologies and Git for version control, delivering features like payment integration (Stripe), maintenance ticket system, and admin dashboard for streamlined property management."],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Stripe"],
    githubUrl: "https://github.iu.edu/Fraustom/CSCI-P465-565-Team-28",
    image: "images/projects/rental.jpg",
  },
  {
    id: 2,
    title: "AI-Powered Meeting Assistant",
    category: "Web Development",
    description:
      ["Developed a full-stack AI-powered meeting companion that captures, transcribes, summarizes, and analyzes both live and recorded meetings to enhance team productivity with actionable insights.",
        "Built a Chrome extension to capture meeting audio and stream it to a Node.js + Express backend via WebSockets; implemented real time transcription with speaker diarization using the Deepgram API and used Facebook BART Model for summarization and emotion detection, with results displayed on a responsive React dashboard showing live transcripts, summaries, sentiment, and action items."
      ],
    technologies: ["React", "Node.js,", "Express", "Deepgram", "Facebook Bart"],
    githubUrl: "https://github.com/maheswar09/Spades/tree/main",
    image: "images/projects/ai-1.png",
  },
  {
    id: 3,
    title: "EcoLens",
    category: "App Development",
    description:
      ["Developed a React Native mobile app with barcode scanning to access sustainability data like environmental impact and ethical sourcing via the Open Food Facts API, enabling users to build eco-friendly wishlists, contribute reviews, and shop based on eco-scores",
        "Designed responsive UI with React Native and integrated Firebase for user authentication, reviews, and personalized shopping lists, enhancing user interaction and data management for sustainable shopping."
      ],
    technologies: ["React Native", "API", "Firebase"],
    githubUrl: "https://github.com/maheswar09/EcoLens",
    image: "images/projects/food.png",
  },
  {
    id: 4,
    title: "Historical Media Object Detection ",
    category: "Computer Vision",
    description:
      ["Collaborated on the developing an advanced object detection framework using triple Faster R-CNN models, improving the accuracy of historical media analysis in the IULMIA archive by 40%",
        "Improved the identification and cataloging of objects in vintage television advertisements, increasing research accessibility by 35% and supporting cultural heritage preservation efforts."
      ],
    technologies: ["Machine Learning", "Python", "TensorFlow", "Faster R-CNN "],
    githubUrl: "https://github.com/maheswar09/HistDetect",
    image: "images/projects/histdetect.jpg",
  },
  {
    id: 5,
    title: "Courier Company Computerization ",
    category: "Web Development",
    description:
      ["Spearheaded the development of a software application to optimize the courier company operations by automating record-keeping and report generation for improved operational efficiency and reducing manual processing time by 50%.",
        "Developed the frontend using HTML, CSS, and Bootstrap, and the backend with PHP, enhancing system performance and reducing page load time by 40%."
      ],
    technologies: ["HTML", "CSS", "BOOTSTRAP", "Angular", "PHP"],
    githubUrl: "https://github.com/maheswar09/CourierWebsite",
    image: "images/projects/courier.jpg",
  },
  {
    id: 6,
    title: "Linear Polynomial Regression",
    category: "Machine Learning",
    description:
      ["Developed predictive models using linear regression, polynomial regression, and regularization techniques (Ridge, Lasso, Elastic Net) to estimate the 'Life Ladder' (happiness score) based on economic, social, and emotional indicators from a global happiness dataset.",
        "Conducted detailed data preprocessing, visualization, and correlation analysis to identify key factors influencing happiness, and evaluated model performance using training/test splits, loss curves, and error metrics to optimize predictive accuracy."
      ],
    technologies: ["Machine Learning & Modeling", "numpy", "matplotlib", "scikit-learn",],
    githubUrl: "https://github.com/maheswar09/linear-polynomial_regression1",
    image: "images/projects/life.png",
  },
  {
    id: 7,
    title: "ML-Powered Rock Classification",
    category: "Machine Learning",
    description:
      ["Built classification models to predict rock categories (Igneous, Metamorphic, Sedimentary) using 19 geological features, applying Multinomial Logistic Regression, SVM, Random Forest, and an Ensemble Classifier for enhanced accuracy.",
        "Conducted in-depth attribute analysis, data visualization, feature correlation, and hyperparameter tuning to optimize model performance, achieving high classification accuracy and interpretability through feature importance and ensemble methods."
      ],
    technologies: ["SVM", " pandas", "numpy", "matplotlib", "scikit-learn", "Random Forest Classifier"],
    githubUrl: "https://github.com/maheswar09/Spades",
    image: "images/projects/rock.png",
  },
  {
    id: 8,
    title: "Fine-Tuning Pretrained Language Models for Text Classification",
    category: "Machine Learning",
    description:
      ["Created a balanced text classification dataset and fine-tuned a pretrained language model (e.g., GPT) using Hugging Face Transformers to classify texts into distinct categories.",
        "Achieved test accuracy reporting through model evaluation and explored performance improvements via data augmentation, hyperparameter tuning, and experimenting with alternative model architectures."
      ],
    technologies: ["Python", "Hugging Face", "Tokenizers"],
    githubUrl: "https://github.com/maheswar09/Text-Classification-Dataset-and-Fine-Tuning-with-Pretrained-Language-Model",
    image: "images/projects/hug.png",
  },
  {
    id: 9,
    title: "Footwear Image Classification Using Transfer Learning",
    category: "Machine Learning",
    description:
      ["Built a multi-class image classifier (shoe vs sandal vs boot) using a Kaggle dataset and fine-tuned a pretrained convolutional neural network (CNN) to accurately classify footwear images.",
        "Implemented the full pipeline—data preprocessing, augmentation, model training (both transfer learning and from-scratch CNN), and evaluation—highlighting performance trade-offs between pretrained models and custom architectures."
      ],
    technologies: ["Python", "TensorFlow", "OpenCV", "matplotlib", "CNN"],
    githubUrl: "https://github.com/Venkat450/Sentiment-Analysis-with-Deep-Learning-using-BERT",
    image: "images/projects/foot.jpg",
  },
  {
    id: 10,
    title: "Automated OMR Sheet Answer Injection and Detection System",
    category: "Computer Vision",
    description:
      ["Built a high-accuracy image processing pipeline (grayscale, edge detection, corner detection) to extract marked answers from OMR sheets, including handwritten options.",
        "Developed two discreet methods—pixel intensity tweaking and prime number encoding—for embedding correct answers, enabling 100% accurate post-scan extraction.",
        "Created extraction logic for both methods; initiated image alignment correction for robustness to scanning inconsistencies."
      ],
    technologies: ["Python", "OpenCV", "Image Processing", "Edge Detection"],
    githubUrl: "https://github.com/maheswar09/OMR-ANSWER-DETECTION",
    image: "images/projects/omr.png",
  },
  {
    id: 11,
    title: "Heart Disease Prediction Using Machine Learning",
    category: "Machine Learning",
    description:
      ["Orchestrated a robust heart disease risk assessment project, implementing a suite of Machine Learning algorithms including Decision Tree, Logistic Regression, KNN, and SVM.",
        "Delivered exceptional results with 95% accuracy using Random Forest, showcasing adept analysis and optimization skills across diverse algorithms to maximize predictive precision."
      ],
    technologies: ["Python", "Scikit-learn", "Keras", "Decision Trees", "SVM"],
    githubUrl: "https://github.com/maheswar09/Heart-Disease-Prediction",
    image: "images/projects/heart.jpg",
  },
  {
    id: 12,
    title: "Face Emotion Recognition System",
    category: "Machine Learning",
    description:
      ["Applied advanced techniques on a Kaggle dataset to build a customized deep learning model for facial emotion recognition, demonstrating expertise in neural networks and staying at the forefront of data science innovations.",
        "Rigorously assessed the model's performance using a confusion matrix, attaining an impressive 83% accuracy rate in emotion classification, validating the model's effectiveness in capturing nuanced emotional nuances"
      ],
    technologies: ["Python", "Neural Networks"],
    githubUrl: "https://github.com/maheswar09/Face-Emotion-Recognition",
    image: "images/projects/face.jpg",
  },
  {
    id: 13,
    title: "Race Track",
    category: "Virtual Reality",
    description:
      [
        "Developed an immersive VR race track experience in Unity3D, combining realistic physics and interactive gameplay."
      ],
    technologies: ["C#", "Unity 3D"],
    githubUrl: "https://github.com/maheswar09/Race-Track",
    image: "images/projects/race.png",
  },
  {
    id: 14,
    title: "Solar System",
    category: "Virtual Reality",
    description:
      [
        "Designed an interactive Solar System simulation in Unity3D VR, enabling immersive exploration of planets and celestial mechanics."
      ],
    technologies: ["C#", "Unity 3D"],
    githubUrl: "https://github.com/maheswar09/Solar-Systems",
    image: "images/projects/solar.png",
  },
];

export default projectsData;
