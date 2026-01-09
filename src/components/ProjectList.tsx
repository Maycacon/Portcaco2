import { Project } from '@/types';
import LoadingSpinner from './LoadingSpinner';

interface ProjectListProps {
  projects: Project[];
  loading: boolean;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const ProjectList = ({ projects, loading, onEdit, onDelete }: ProjectListProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-800 border border-gray-700 rounded-lg">
        <p className="text-gray-400 text-lg">Nenhum projeto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-4 text-sm text-gray-400">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  GitHub →
                </a>
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 transition-colors"
                  >
                    Figma →
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onEdit(project)}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(project.id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
