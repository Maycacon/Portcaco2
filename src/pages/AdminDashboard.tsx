import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/types';
import ProjectForm from '@/components/ProjectForm';
import ProjectList from '@/components/ProjectList';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const { projects, loading, createProject, updateProject, deleteProject } = useProjects();
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este projeto?')) {
      deleteProject(id);
    }
  };

  const handleFormSubmit = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    if (editingProject) {
      updateProject(editingProject.id, projectData);
    } else {
      createProject(projectData);
    }
    setEditingProject(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setEditingProject(null);
    setShowForm(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Portfólio</title>
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Painel Admin</h1>
                <p className="text-gray-400">Bem-vindo, {user?.email}</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="/"
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700"
                >
                  Ver Site
                </a>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors"
                >
                  Sair
                </button>
              </div>
            </div>

            {!showForm ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-white">Projetos</h2>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
                  >
                    + Novo Projeto
                  </button>
                </div>

                <ProjectList
                  projects={projects}
                  loading={loading}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            ) : (
              <ProjectForm
                project={editingProject || undefined}
                onSubmit={handleFormSubmit}
                onCancel={handleCancel}
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
