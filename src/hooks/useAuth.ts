import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import type { stateType } from '../types/userType';

function useAuth() {
  const { email, token, id }: stateType = useSelector(
    (state: RootState) => state.user
  );

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

export default useAuth;
