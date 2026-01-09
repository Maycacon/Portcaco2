import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Java',           
    'PostgreSQL',
    'Prisma',         
    'Figma',          
    'Adobe XD',   
    'Tailwind CSS',
    'Git',
  ];

  return (
    <>
      <Helmet>
        <title>Sobre | Portfólio</title>
        <meta name="description" content="Sobre mim - Desenvolvedor Full Stack" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Sobre Mim</h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-invert max-w-none mb-12"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Sou Tecnólogo em Análise e Desenvolvimento de Sistemas e estudante de Ciência da Computação. 
              Minha atuação vai além do código: combino a lógica robusta do desenvolvimento Full Stack 
              (React, Node.js) com a sensibilidade estética do UI/UX Design.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Com experiência prévia como instrutor de tecnologia, trago para meus projetos não apenas técnica, 
              mas também uma preocupação real com a usabilidade. Busco sempre a união entre código limpo 
              e interfaces visualmente refinadas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Meu objetivo é transformar requisitos complexos em software funcional, garantindo que a aplicação 
              seja escalável no back-end e intuitiva para quem a utiliza no front-end.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Habilidades</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 hover:border-primary-500 hover:text-primary-400 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
