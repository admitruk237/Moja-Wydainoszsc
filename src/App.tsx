import './App.css';
import Header from './components/Header/Header';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import NotFount from './pages/NotFount';
import SignIn from './pages/SignIn';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="px-4">
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
    </BrowserRouter>
  );
}

export default App;
