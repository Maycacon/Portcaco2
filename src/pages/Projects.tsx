import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useProjects } from '@/hooks/useProjects';
import ProjectCard from '@/components/ProjectCard';
import LoadingSpinner from '@/components/LoadingSpinner';

const Projects = () => {
  const { projects, loading } = useProjects();

  return (
    <>
      <Helmet>
        <title>Projetos | Portfólio</title>
        <meta name="description" content="Meus projetos e trabalhos - Desenvolvedor Full Stack" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projetos</h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Uma seleção dos meus principais projetos e trabalhos desenvolvidos
          </p>

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <LoadingSpinner />
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Nenhum projeto encontrado.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
