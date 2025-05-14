import Checkbox from '../components/CheckBox/CheckBox';
import SelectMenu from '../components/SelectMenu/SelectMenu';
import TextField from '../components/TextField/TextField';
import Title from '../components/Title/Title';

const placeholders = ["Ім'я", 'Прізвище', 'Логін'];

function SignUp() {
  return (
    <div className="mt-10">
      <Title
        title="Реєстрація"
        subTitle="Будь ласка зараєструйте новго користувача якщо у вас ще немає акаунту"
      />
      <form className="mt-15 flex flex-col items-center gap-5 max-w-[320px] m-auto">
        {placeholders.map((el, i) => {
          return <TextField key={i} placeholder={el} />;
        })}
        <SelectMenu />
        <Checkbox discription="Ви являєтесь студентом?" />
        <button
          className="hover:bg-[#40414F]  px-4 py-3 rounded-md outline-none cursor-pointer w-full border"
          type="submit"
        >
          Зареєсруватись
        </button>
      </form>
    </div>
  );
}

export default SignUp;
