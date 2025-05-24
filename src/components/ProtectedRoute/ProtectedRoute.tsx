import { Navigate, Outlet } from 'react-router';
import useAuth from '../../hooks/useAuth';

interface ProtectedRouteProps {
  redirectTo: string;
}

const ProtectedRoute = ({ redirectTo }: ProtectedRouteProps) => {
  const { isAuth, loading } = useAuth();

  if (loading) {
    return null; // Не рендеримо нічого під час завантаження
  }

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
