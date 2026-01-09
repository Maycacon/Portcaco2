import { Project } from '@/types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-primary-500 transition-colors"
    >
      <div className="aspect-video overflow-hidden bg-gray-900">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors text-sm"
          >
            GitHub
          </a>
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors text-sm"
            >
              Figma
            </a>
          )}

          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded transition-colors text-sm ml-auto"
            >
              Ver Projeto
            </a>
          )}

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
