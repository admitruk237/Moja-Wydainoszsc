import { Link } from 'react-router';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Title from '../components/Title/Title';
import TextField from '../components/TextField/TextField';
import { useDispatch } from 'react-redux';

function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Помилка: ${errorMessage}: ${errorCode}`);
      });
  };

  return (
    <div className="mt-10">
      <Title title="Вхід" subTitle="Увійдіть будь ласка в свій акаунт" />
      <form
        onSubmit={handleSignIn}
        className="mt-10 flex flex-col items-center max-w-[320px] m-auto"
      >
        <div className="flex flex-col gap-5 w-full">
          <TextField
            placeholder="Меіл"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link
          className="mt-2 text-[14px] hover:bg-[#40414F]  px-4 py-3 w-full rounded-md outline-none transition cursor-pointer"
          to="/sign-up"
        >
          Поки що не маю акаунту
        </Link>
        <button
          className=" mt-10 hover:bg-[#40414F]  px-4 py-3 rounded-md outline-none cursor-pointer w-full border"
          type="submit"
        >
          Увійти
        </button>
      </form>
    </div>
  );
}

export default SignIn;
