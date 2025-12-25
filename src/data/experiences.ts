import { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    id: "1",
    position: "AI Engineer Intern",
    company: "Critical AI Pvt Ltd",
    location: "Remote",
    startDate: "2025-06",
    endDate: "2025-07",
    description: "Built a modular, GPU-accelerated Retrieval-Augmented Generation system with FastAPI backend and Streamlit frontend. Integrated llama-cpp-python LLMs with custom embeddings for interactive narrative generation.",
    achievements: [
      "Developed RAG-Toolkit with audio and image-based interactive narratives",
      "Implemented modular architecture supporting multiple LLM backends",
      "Optimized GPU acceleration for improved inference performance"
    ],
    technologies: ["Python", "FastAPI", "Streamlit", "llama-cpp-python", "FAISS", "PyTorch", "MongoDB"],
    type: "internship"
  },
  {
    id: "2",
    position: "Research Intern",
    company: "WESEE, Ministry of Defence",
    location: "India",
    startDate: "2025-06",
    endDate: "2025-07",
    description: "Developed AI systems for military applications including drone identification, tracking pipelines, and natural language report generation systems for maritime operations.",
    achievements: [
      "Built drone identification and tracking system using YOLOv8",
      "Created report generation chatbot using LangChain and LangGraph",
      "Implemented database querying in natural language for operational reports"
    ],
    technologies: ["Python", "Ultralytics", "LangChain", "SQLAlchemy", "Ollama", "Selenium"],
    type: "internship"
  },
  {
    id: "3",
    position: "Machine Learning Intern",
    company: "Various Projects",
    location: "Remote",
    startDate: "2024-09",
    endDate: "2025-05",
    description: "Worked on diverse ML projects including sentiment analysis, churn prediction, and recommendation systems. Built end-to-end pipelines with CI/CD integration.",
    achievements: [
      "Developed multi-lingual audio sentiment detection system",
      "Created hotel reservation cancellation prediction with Jenkins CI/CD",
      "Built hybrid anime recommendation system combining collaborative and content-based filtering"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "Jenkins", "Docker", "MLFlow"],
    type: "internship"
  }
];
