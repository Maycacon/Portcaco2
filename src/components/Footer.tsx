const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <p className="text-gray-400 text-sm">
            © {currentYear} Maycon Andrade. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/Maycacon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maycon-andrade-a85286357/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
