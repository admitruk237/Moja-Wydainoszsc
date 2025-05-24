import './App.css';
import Header from './components/Header/Header';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import NotFount from './pages/NotFount';
import SignIn from './pages/SignIn';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useEffect } from 'react';
import useAuth from './hooks/useAuth';

function App() {
  const navigate = useNavigate();
  const { isAuth, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      if (isAuth && location.pathname === '/sign-in') {
        navigate('/');
      } else if (!isAuth && location.pathname === '/') {
        navigate('/sign-in');
      }
    }
  }, [isAuth, loading, navigate, location]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Завантаження...
      </div>
    );
  }
  return (
    <div className="px-4 overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute redirectTo="/sign-in" />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
