import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary-400 hover:text-primary-300 transition-colors">
            Portcaco
          </Link>
          
          <ul className="flex space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative px-3 py-2 transition-colors ${
                      isActive
                        ? 'text-primary-400'
                        : 'text-gray-300 hover:text-primary-400'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
