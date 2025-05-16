import { Project } from '../types';

export const projects: Project[] = [
    {
    id: "6",
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
    id: "5",
    title: "Local RAG with LLaMA.cpp",
    description: "Retrieval augmented agent, capable of running completly local and offline with low resource demands",
    longDescription: "This project builds a simple Retrieval-Augmented Generation (RAG) pipeline using a local LLaMA GGUF model (llama-cpp), FAISS for vector search, and a PDF document for contextual grounding.",
    technologies: ["llama-cpp-python", "sentence-transformers", "faiss-cpu", "scikit-learn", "numpy"],
    imageUrl: "https://i.imghippo.com/files/AU1796fFE.png",
    githubUrl: "https://github.com/Eros483/customisable-Rag-agent",
    liveUrl: "",
    date: "2025-04",
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