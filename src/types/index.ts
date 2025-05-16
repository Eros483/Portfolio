export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  date: string; // Format: "YYYY-MM" or "YYYY-MM-DD"
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'other' | 'ml';
  icon?: string; // Lucide icon name
}

export type ThemeMode = 'light' | 'dark';