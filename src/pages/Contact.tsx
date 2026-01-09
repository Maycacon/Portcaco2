import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Portfólio</title>
        <meta name="description" content="Entre em contato - Desenvolvedor Full Stack" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-gray-400 text-lg mb-12">
            Entre em contato comigo através dos canais abaixo. Estou sempre aberto a 
            novas oportunidades e projetos interessantes.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="mailto:mayconabrroso2@gmail.com"
              className="block p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary-500 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                Email
              </h3>
              <p className="text-gray-400">mayconbarroso2@gmail.com</p>
            </a>

            <a
              href="https://github.com/Maycacon"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary-500 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                GitHub
              </h3>
              <p className="text-gray-400">github.com/Maycacon</p>
            </a>

            <a
              href="https://www.linkedin.com/in/maycon-andrade-a85286357/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary-500 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                LinkedIn
              </h3>
              <p className="text-gray-400">linkedin.com/in/maycon-andrade-a85286357</p>
            </a>

            <a
              href="https://wa.me/5585991707925"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary-500 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                Whatsapp
              </h3>
              <p className="text-gray-400">5585991707925</p>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
