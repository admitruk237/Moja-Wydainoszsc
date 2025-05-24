import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import TextField from '../components/TextField/TextField';
import Title from '../components/Title/Title';
import { setUser } from '../store/slices/userSlice';
import { auth } from '../firebase';
import useGoogleSignIn from '../hooks/useGoogleSignIn';

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const { navigate } = useGoogleSignIn();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: token,
          })
        );
        navigate('/');
      })
      .catch((error) => {
        console.error(`Помилка: ${error.message} (${error.code})`);
      });
  };

  return (
    <div className="mt-10">
      <Title
        title="Реєстрація"
        subTitle="Будь ласка зараєструйте новго користувача якщо у вас ще немає акаунту"
      />
      <form
        onSubmit={handleSignUp} // ✅ обробник на form, не на button
        className="mt-15 flex flex-col items-center gap-5 max-w-[320px] m-auto"
      >
        <TextField
          placeholder="Мейл"
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

        <button
          className=" mt-3.5 hover:bg-[#40414F] px-4 py-3 rounded-md outline-none cursor-pointer w-full border"
          type="submit"
        >
          Зареєструватись
        </button>
      </form>
    </div>
  );
}

export default SignUp;
