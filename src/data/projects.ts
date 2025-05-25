import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "7",
    title: "Telco Churn Analysis and Prediction",
    description: "A complete analytics and ML pipeline that helps a business: predict churn, understand why, and take action to reduce it.",
    longDescription: "This is a Streamlit-based web application for analyzing customer churn data. The app loads pre-trained models and displays predictions and data insights interactively. The goal was to use machine learning to predict which customers are likely to cancel their subscription, and identify the key reasons behind churn.",
    technologies: ["pandas", "matplotlib", "seaborn", "scikit-learn", "numpy", "shap", "XGBoost", "Optuna", "streamlit"],
    imageUrl: "https://i.imghippo.com/files/WLc3759hcI.png",
    githubUrl: "https://github.com/Eros483/Telco-Churn-Analysis",
    liveUrl: "https://telco-churn-analysis-qkqq9n3i8s8ifr5qfurj2w.streamlit.app",
    date: "2025-05",
    featured: true
  },
  {
    id: "6",
    title: "RAG Toolkit",
    description: "GenAI agent, capable of running completly local and offline with low resource demands",
    longDescription: "This Project provides a windows application with Agentic RAG, Chatbot, Evaluation and Summarizational capabilities.",
    technologies: ["llama-cpp-python", "sentence-transformers", "faiss-cpu", "scikit-learn", "numpy", "Pyside6", "pyinstaller"],
    imageUrl: "https://i.imghippo.com/files/bhe8547FD.png",
    githubUrl: "https://github.com/Eros483/RAG-runner",
    liveUrl: "https://github.com/Eros483/RAG-runner/releases/tag/v4.0.0",
    date: "2025-05",
    featured: true
  },
  {
    id: "5",
    title: "What beats rock?",
    description: "Recreated the traditional what beats rock game, where the user enters objects to defeat a seed object.",
    longDescription: "Used Gemini 2.0 flash with a full stack deployment to detect if the user objects defeats the seed object and generate responses with a variety of personas.",
    technologies: ["FastAPI", "Redis", "Upstash", "Streamlit", "Docker"],
    imageUrl: "https://i.imghippo.com/files/afF8093w.png",
    githubUrl: "https://github.com/Eros483/what-beats-rock",
    liveUrl: "https://what-beats-rock-its0.onrender.com",
    date: "2025-05",
    featured: true
  },
  {
    id: "4",
    title: "Reinforcement Learning and Memory Allocation",
    description: "Dynamic Memory Allocation Simulation with Reinforcement Learning",
    longDescription: "This Streamlit application simulates different dynamic memory allocation algorithms, including First Fit, Best Fit, Worst Fit, Second Fit, and a Reinforcement Learning (RL) based approach. It visualizes the memory state after each allocation using bar charts and displays the calculated external fragmentation.",
    technologies: ["Streamlit", "Numpy", "Torch", "matplotlib"],
    imageUrl: "https://i.imghippo.com/files/MMnn3656mc.png",
    githubUrl: "https://github.com/Eros483/rl_memory_allocation",
    liveUrl: "https://rl-mem-alloc-am-sr.streamlit.app/",
    date: "2025-03",
    featured: true
  },
  {
    id: "3",
    title: "Deep Learning Based Multi-Modality Image Registration",
    description: "This repository implements the paper: Framework for Deep Learning Based Multi-Modality Image Registration of Snapshot and Pathology Images. Adapted using synthetic data due to the unavailability of the original dataset.",
    longDescription: "This project uses a VoxelMorph-based unsupervised learning pipeline to perform image registration between macroscopic camera snapshots and microscopic H&E-stained pathology images. Synthetic snapshot-pathology image pairs are generated and used for training.",
    technologies: ["torch", "voxelmorph", "numpy", "tensorflow", "matplotlib"],
    imageUrl: "https://i.imghippo.com/files/pqfS7990cCU.png",
    githubUrl: "https://github.com/Eros483/Deep-Learning-based-Image-Registration",
    liveUrl: "",
    date: "2025-04",
    featured: true
  },
  {
    id: "2",
    title: "Eigenface - Recognition",
    description: "Facial Recognition with Python",
    longDescription: "Eigenface recognition is a popular technique for facial recognition that uses principal component analysis (PCA) to identify and classify faces.",
    technologies: ["Instagrapi", "OpenAI", "scikit-learn", "Numpy", "Pandas", "scikit-learn"],
    imageUrl: "https://i.imghippo.com/files/XAi7882lE.png",
    githubUrl: "https://github.com/Eros483/Eigenface-Recognition",
    liveUrl: "",
    date: "2024-03",
    featured: true
  },
  {
    id: "1",
    title: "FakeOut",
    description: "Instagram Account Analysis",
    longDescription: "FakeOut is a tool that allows you to analyze Instagram user accounts to determine if they are legitimate or potentially associated with bot or spam activity. This tool provides insights into user account information, caption analysis, and bio coherence scoring.",
    technologies: ["Python", "OpenCV", "scikit-learn"],
    imageUrl: "https://i.imghippo.com/files/CzAd7804Gs.png",
    githubUrl: "https://github.com/Eros483/FakeOut-Prototype",
    liveUrl: "https://fakeout-prototype-bjesc3mq6hmhyndxdl4r5t.streamlit.app/",
    date: "2023-09",
    featured: true
  },
];