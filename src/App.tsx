import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import AdminLogin from '@/pages/AdminLogin';
import AdminDashboard from '@/pages/AdminDashboard';
import PrivateRoute from '@/components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="projetos" element={<Projects />} />
          <Route path="contato" element={<Contact />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
