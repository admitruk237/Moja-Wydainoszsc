import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import TextField from '../components/TextField/TextField';
import Title from '../components/Title/Title';
import Checkbox from '../components/CheckBox/CheckBox';
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router';

function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const dispach = useDispatch();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ⛔

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        console.log(user);
        dispach(
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
        <Checkbox discription="Ви являєтесь студентом?" />
        <button
          className="hover:bg-[#40414F] px-4 py-3 rounded-md outline-none cursor-pointer w-full border"
          type="submit" // ✅ submit
        >
          Зареєструватись
        </button>
      </form>

      {/*   <div>
        <p>{name}</p>
        <p>{secondName}</p>
        <p>{email}</p>
        <p>{password}</p>
      </div> */}
    </div>
  );
}

export default SignUp;
