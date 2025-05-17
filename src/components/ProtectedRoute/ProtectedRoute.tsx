import { Navigate, Outlet } from 'react-router';
import useAuth from '../../hooks/useAuth';

interface ProtectedRouteProps {
  redirectTo: string;
}

const ProtectedRoute = ({ redirectTo }: ProtectedRouteProps) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={redirectTo} replace />; // Redirect to the specified path if not authenticated
  }

  return <Outlet />; // Render the child routes if authenticated
};

export default ProtectedRoute;
