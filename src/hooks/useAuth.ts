import { useSelector } from 'react-redux';
import type { RootState } from '../store/index';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { setUser, removeUser } from '../store/slices/userSlice';

const useAuth = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Додаємо стан завантаження

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const token = await user.getIdToken();
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: token,
            })
          );
        } else {
          dispatch(removeUser());
        }
      } catch (error) {
        console.error(`Помилка автентифікації: ${error}`);
        dispatch(removeUser());
      } finally {
        setLoading(false); // Завантаження завершено
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return { isAuth: !!user.id, loading };
};

export default useAuth;
