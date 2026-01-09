export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  figmaUrl?: string;
  deployUrl?: string;
  imageUrl: string;
  createdAt: Date;
}

export interface User {
  email: string;
  name?: string;
}
