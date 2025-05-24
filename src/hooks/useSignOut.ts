import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { removeUser } from '../store/slices/userSlice';
import { auth } from '../firebase';

export const useSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(removeUser());
      navigate('/sign-in');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return { signOut };
};
