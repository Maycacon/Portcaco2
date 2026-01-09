import { useState, useEffect, FormEvent } from 'react';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface ProjectFormProps {
  project?: Project;
  onSubmit: (data: Omit<Project, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

const ProjectForm = ({ project, onSubmit, onCancel }: ProjectFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: [] as string[],
    githubUrl: '',
    figmaUrl: '',
    deployUrl: '',
    imageUrl: '',
  });
  const [techInput, setTechInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [imagePreview, setImagePreview] = useState('');
  const [imageMode, setImageMode] = useState<'url' | 'file'>('url');
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        technologies: project.technologies,
        githubUrl: project.githubUrl,
        figmaUrl: project.figmaUrl || '',
        deployUrl: project.deployUrl || '',
        imageUrl: project.imageUrl,
      });
      setImagePreview(project.imageUrl);
      // Se a imagem começa com "data:", é um arquivo convertido, senão é URL
      setImageMode(project.imageUrl.startsWith('data:') ? 'file' : 'url');
    }
  }, [project]);

  useEffect(() => {
    if (imageMode === 'url' && formData.imageUrl) {
      setImagePreview(formData.imageUrl);
    }
  }, [formData.imageUrl, imageMode]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors({ ...errors, imageFile: 'Por favor, selecione um arquivo de imagem' });
        return;
      }
      setImageFile(file);
      setErrors({ ...errors, imageFile: '', imageUrl: '' });
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertFileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória';
    }
    if (formData.technologies.length === 0) {
      newErrors.technologies = 'Adicione pelo menos uma tecnologia';
    }
    if (!formData.githubUrl.trim()) {
      newErrors.githubUrl = 'URL do GitHub é obrigatória';
    } else if (!isValidUrl(formData.githubUrl)) {
      newErrors.githubUrl = 'URL inválida';
    }
    if (formData.figmaUrl && !isValidUrl(formData.figmaUrl)) {
      newErrors.figmaUrl = 'URL inválida';
    }
    
    // Validação de imagem: deve ter URL OU arquivo
    if (imageMode === 'url') {
      if (!formData.imageUrl.trim()) {
        newErrors.imageUrl = 'URL da imagem é obrigatória';
      } else if (!isValidUrl(formData.imageUrl)) {
        newErrors.imageUrl = 'URL inválida';
      }
    } else {
      if (!imageFile) {
        newErrors.imageFile = 'Selecione um arquivo de imagem';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleAddTech = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, techInput.trim()],
      });
      setTechInput('');
    }
  };

  const handleRemoveTech = (tech: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((t) => t !== tech),
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      let finalImageUrl = formData.imageUrl;
      
      // Se estiver usando arquivo, converter para data URL
      if (imageMode === 'file' && imageFile) {
        finalImageUrl = await convertFileToDataUrl(imageFile);
      }
      
      onSubmit({
        ...formData,
        imageUrl: finalImageUrl,
        figmaUrl: formData.figmaUrl || undefined,
        deployUrl: formData.deployUrl || undefined,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">
        {project ? 'Editar Projeto' : 'Novo Projeto'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
            Título *
          </label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.title ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="Nome do projeto"
          />
          {errors.title && <p className="mt-1 text-sm text-red-400">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
            Descrição *
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.description ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="Descrição do projeto"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-400">{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="technologies" className="block text-sm font-medium text-gray-300 mb-2">
            Tecnologias *
          </label>
          <div className="flex gap-2 mb-2">
            <input
              id="technologies"
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTech();
                }
              }}
              className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Ex: React, TypeScript"
            />
            <button
              type="button"
              onClick={handleAddTech}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
            >
              Adicionar
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(tech)}
                  className="text-red-400 hover:text-red-300"
                  aria-label={`Remover ${tech}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          {errors.technologies && (
            <p className="mt-1 text-sm text-red-400">{errors.technologies}</p>
          )}
        </div>

        <div>
          <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-300 mb-2">
            URL do GitHub *
          </label>
          <input
            id="githubUrl"
            type="url"
            value={formData.githubUrl}
            onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
            className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.githubUrl ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="https://github.com/usuario/projeto"
          />
          {errors.githubUrl && (
            <p className="mt-1 text-sm text-red-400">{errors.githubUrl}</p>
          )}
        </div>

        <div>
          <label htmlFor="figmaUrl" className="block text-sm font-medium text-gray-300 mb-2">
            URL do Figma (opcional)
          </label>
          <input
            id="figmaUrl"
            type="url"
            value={formData.figmaUrl}
            onChange={(e) => setFormData({ ...formData, figmaUrl: e.target.value })}
            className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.figmaUrl ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="https://figma.com/file/..."
          />
          {errors.figmaUrl && <p className="mt-1 text-sm text-red-400">{errors.figmaUrl}</p>}
        </div>

        <div>
          <label htmlFor="deployUrl" className="block text-sm font-medium text-gray-300 mb-2">
            URL do Deploy (opcional)
          </label>
          <input
            id="deployUrl"
            type="url"
            value={formData.deployUrl}
            onChange={(e) => setFormData({ ...formData, deployUrl: e.target.value })}
            className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.deployUrl ? 'border-red-500' : 'border-gray-700'
            }`}
            placeholder="https://deploy.com/..."
          />
            {errors.deployUrl && <p className="mt-1 text-sm text-red-400">{errors.deployUrl}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Imagem do Projeto *
          </label>
          
          {/* Seleção do modo: URL ou Anexo */}
          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="imageMode"
                value="url"
                checked={imageMode === 'url'}
                onChange={() => {
                  setImageMode('url');
                  setImageFile(null);
                  setErrors({ ...errors, imageUrl: '', imageFile: '' });
                }}
                className="w-4 h-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-300">URL da Imagem</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="imageMode"
                value="file"
                checked={imageMode === 'file'}
                onChange={() => {
                  setImageMode('file');
                  setFormData({ ...formData, imageUrl: '' });
                  setErrors({ ...errors, imageUrl: '', imageFile: '' });
                }}
                className="w-4 h-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-300">Anexar Arquivo</span>
            </label>
          </div>

          {/* Campo de URL */}
          {imageMode === 'url' && (
            <div>
              <input
                id="imageUrl"
                type="url"
                value={formData.imageUrl}
                onChange={(e) => {
                  setFormData({ ...formData, imageUrl: e.target.value });
                  setErrors({ ...errors, imageUrl: '' });
                }}
                className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 mb-2 ${
                  errors.imageUrl ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="https://images.unsplash.com/..."
              />
              {errors.imageUrl && <p className="mt-1 text-sm text-red-400">{errors.imageUrl}</p>}
            </div>
          )}

          {/* Campo de arquivo */}
          {imageMode === 'file' && (
            <div>
              <input
                id="imageFile"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={`w-full px-4 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 mb-2 ${
                  errors.imageFile ? 'border-red-500' : 'border-gray-700'
                }`}
              />
              {errors.imageFile && <p className="mt-1 text-sm text-red-400">{errors.imageFile}</p>}
              {imageFile && (
                <p className="mt-1 text-sm text-gray-400">Arquivo selecionado: {imageFile.name}</p>
              )}
            </div>
          )}

          {/* Preview da imagem */}
          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-w-md h-48 object-cover rounded-lg border border-gray-700"
                onError={() => setImagePreview('')}
              />
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-colors"
          >
            {project ? 'Salvar Alterações' : 'Criar Projeto'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ProjectForm;
