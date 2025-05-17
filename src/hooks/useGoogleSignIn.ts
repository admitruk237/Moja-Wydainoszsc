import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const useGoogleSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (data) => {
        const user = data.user;
        const email = user.email;
        if (email) {
          const token = await data.user.getIdToken();
          dispatch(setUser({ email: email, id: data.user.uid, token: token }));
          localStorage.setItem('email', email);
        }
        navigate('/');
      })
      .catch((error) => {
        console.error('Помилка під час входу через Google:', error);
      });
  };

  return { signInWithGoogle, navigate };
};

export default useGoogleSignIn;
