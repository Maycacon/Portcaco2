import { useState, useEffect } from 'react';
import { Project } from '@/types';

const STORAGE_KEY = 'portfolio_projects';

// Dados mockados iniciais
const getInitialProjects = (): Project[] => [
  {
    id: '1',
    title: 'Sistema de Papelaria (Projeto Integrador)',
    description: 'Sistema completo de gestão para papelaria, incluindo controle de estoque, vendas e cadastro de produtos. Foco em regras de negócio.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/daniolivem/projeto-integrador-papelaria',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    createdAt: new Date('2024-11-10'),
  },
  {
    id: '2',
    title: 'API de Gestão (Capacita)',
    description: 'API RESTful robusta desenvolvida para gerenciamento de cadastros de alunos, focada em arquitetura backend e performance.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com/Maycacon/CAPACITA---Oficina-2',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    createdAt: new Date('2024-09-15'),
  },
  {
    id: '3',
    title: 'Calculadora React',
    description: 'Aplicação interativa para praticar lógica de estado (useState) e componentização moderna no ecossistema React.',
    technologies: ['React', 'CSS Modules', 'JavaScript'],
    githubUrl: 'https://github.com/Maycacon/calculadora-react',
    imageUrl: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800',
    deployUrl: 'https://calculadora-react-woad.vercel.app/',
    createdAt: new Date('2024-05-20'),
  },
  {
    id: '4',
    title: 'Conversor de Unidades',
    description: 'Ferramenta utilitária para conversão de métricas diversas. Projeto focado em lógica matemática e algoritmos.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Maycacon/ConversoUnitsUnfior',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    createdAt: new Date('2024-03-10'),
  },
];

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          // Se o array estiver vazio ou não for um array válido, carregar dados mockados
          if (!Array.isArray(parsed) || parsed.length === 0) {
            const initialProjects = getInitialProjects();
            setProjects(initialProjects);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
          } else {
            // Carregar projetos do localStorage
            const projectsWithDates = parsed.map((p: Project) => ({
              ...p,
              createdAt: new Date(p.createdAt),
            }));
            setProjects(projectsWithDates);
          }
        } else {
          // Dados iniciais mockados - localStorage vazio
          const initialProjects = getInitialProjects();
          setProjects(initialProjects);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
        }
      } catch (error) {
        console.error('Erro ao carregar projetos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const saveProjects = (newProjects: Project[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProjects));
      setProjects(newProjects);
    } catch (error) {
      console.error('Erro ao salvar projetos:', error);
      throw error;
    }
  };

  const createProject = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    const updated = [...projects, newProject];
    saveProjects(updated);
    return newProject;
  };

  const updateProject = (id: string, projectData: Partial<Project>) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, ...projectData } : p
    );
    saveProjects(updated);
    return updated.find((p) => p.id === id);
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjects(updated);
  };

  const resetToMockData = () => {
    const initialProjects = getInitialProjects();
    saveProjects(initialProjects);
  };

  return {
    projects,
    loading,
    createProject,
    updateProject,
    deleteProject,
    resetToMockData,
  };
};
