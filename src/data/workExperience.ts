import { WorkExperience } from '../types';

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    position: "LLM Intern",
    company: "Critical AI Pvt Ltd",
    startDate: "2025-07",
    endDate: "2025-09",
    description: "Working on large language model development and optimization, focusing on improving model performance and efficiency for production applications.",
    achievements: [
      "Contributed to LLM fine-tuning processes",
      "Optimized model inference pipelines",
      "Collaborated on AI research initiatives"
    ],
    technologies: ["Python", "PyTorch", "Transformers", "CUDA", "Docker"],
    type: "internship"
  },
  {
    id: "2",
    position: "AI Intern",
    company: "WESEE, Ministry of Defence",
    startDate: "2025-05",
    endDate: "2025-07",
    description: "Developed AI solutions for defense applications, working on computer vision and machine learning projects to enhance surveillance and reconnaissance capabilities.",
    achievements: [
      "Implemented computer vision algorithms for object detection",
      "Developed ML models for pattern recognition",
      "Contributed to defense technology research"
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "Scikit-learn", "NumPy"],
    type: "internship"
  },
  {
    id: "3",
    position: "Research Intern",
    company: "Shiv Nadar University",
    startDate: "2025-01",
    endDate: "2025-02",
    description: "Conducted research in machine learning and data science, focusing on novel algorithms and their applications in real-world scenarios.",
    achievements: [
      "Published research findings on ML algorithms",
      "Developed innovative data analysis techniques",
      "Collaborated with faculty on research projects"
    ],
    technologies: ["Python", "R", "Jupyter", "Pandas", "Matplotlib"],
    type: "internship"
  }
];