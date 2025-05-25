import { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'Python', level: 4, category: 'languages', icon: 'FileCode' },
  { name: 'C++', level: 3.5, category: 'languages', icon: 'FileCode' },
  { name: 'C', level: 4, category: 'languages', icon: 'FileCode' },
  { name: 'SQL', level: 3, category: 'languages', icon: 'Database' },
  
  // ML/Data Science
  { name: 'NumPy', level: 4, category: 'ml', icon: 'FunctionSquare' },
  { name: 'Pandas', level: 4, category: 'ml', icon: 'Table' },
  { name: 'Scikit-learn', level: 4, category: 'ml', icon: 'BrainCircuit' },
  { name: 'Matplotlib', level: 3, category: 'ml', icon: 'BarChart3' },
  { name: 'TensorFlow', level: 3, category: 'ml', icon: 'Cpu' },
  { name: 'PyTorch', level: 4, category: 'ml', icon: 'Flame' },
  { name: 'Stable Baselines3', level: 3, category: 'ml', icon: 'Activity' },
  { name: 'Transformers (Hugging Face)', level: 3, category: 'ml', icon: 'Bot' },
  { name: 'XGBoost', level: 3, category: 'ml', icon: 'TrendingUp' },
  { name: 'SHAP', level: 2.5, category: 'ml', icon: 'PieChart' },
  { name: 'Optuna', level: 2.5, category: 'ml', icon: 'Settings' },

  // Backend
  { name: 'FastAPI', level: 4, category: 'backend', icon: 'Server' },
  { name: 'Redis', level: 3, category: 'backend', icon: 'Database' },
  { name: 'Docker', level: 3, category: 'backend', icon: 'Package' },  
  { name: 'Upstash', level: 3, category: 'backend', icon: 'Cloud' },

  // Frontend
  { name: 'Streamlit', level: 4.5, category: 'frontend', icon: 'LayoutDashboard' },
  { name: 'PySide6', level: 3, category: 'frontend', icon: 'Frontend' },

  // Tools
  { name: 'Git', level: 4, category: 'tools', icon: 'GitBranch' },
  { name: 'OpenCV', level: 3, category: 'tools', icon: 'Camera' },
];
