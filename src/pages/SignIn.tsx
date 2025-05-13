import { Link } from 'react-router';
import TextField from '../components/TextField/TextField';
import Title from '../components/Title/Title';

const placeholderSignIn = ['Логін', 'Пароль'];
function SignIn() {
  return (
    <div className="mt-10">
      <Title title="Вхід" subTitle="Увійдіть будь ласка в свій акаунт" />
      <form className="mt-10 flex flex-col items-center max-w-[320px] m-auto">
        <div className="flex flex-col gap-5 w-full">
          {placeholderSignIn.map((el, i) => {
            return <TextField key={i} placeholder={el} />;
          })}
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
