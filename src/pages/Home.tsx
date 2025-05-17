import { useSelector } from 'react-redux';
import type { RootState } from '../store';

function Home() {
  const selection = useSelector((state: RootState) => state.user);

  return <div>{JSON.stringify(selection)}</div>;
}

export default Home;
