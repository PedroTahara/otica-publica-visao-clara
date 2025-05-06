
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminGuard() {
  const { user, loading } = useAuth();
  
  // Mostrar spinner enquanto verificamos o estado de autenticação
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-otica-blue"></div>
      </div>
    );
  }
  
  // Se não estiver autenticado, redirecionar para a página de login
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  // Se estiver autenticado, renderizar as rotas filhas
  return <Outlet />;
}
