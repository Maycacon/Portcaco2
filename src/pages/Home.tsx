import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Portfólio</title>
        <meta name="description" content="Desenvolvedor Full Stack - Bem-vindo ao meu portfólio" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
          >
            Maycon Andrade
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Desenvolvedor Full Stack | UI/UX
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Desenvolvedor Full Stack com forte base em UI/UX Design. Crio aplicações completas com React e Node.js, unindo código limpo, performance e interfaces visualmente refinadas e intuitivas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://github.com/Maycacon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700 hover:border-primary-500"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maycon-andrade-a85286357"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700 hover:border-primary-500"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mayconbarroso2@gmail.com"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700 hover:border-primary-500"
              aria-label="Email"
            >
              Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16"
          >
            <Link
              to="/projetos"
              className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors font-semibold"
            >
              Ver Projetos
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
