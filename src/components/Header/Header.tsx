import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { removeUser } from '../../store/slices/userSlice';

function Header() {
  const dispatch = useDispatch();

  const linkStyles =
    'hover:bg-[#40414F]  px-4 py-2 rounded-md outline-none transition cursor-pointer';

  return (
    <nav className="flex items-center justify-between w-full h-13 px-4 border-b-1 border-white">
      <div className={linkStyles}>Logo</div>
      <ul className="flex items-center gap-10">
        <NavLink className={linkStyles} to={'/'}>
          {' '}
          Домашня сторінка
        </NavLink>
        <NavLink className={linkStyles} to={'/about'}>
          Інструкція
        </NavLink>
        <NavLink className={linkStyles} to={'/sign-up'}>
          Зареєсруватись
        </NavLink>
        <NavLink
          onClick={() => dispatch(removeUser())}
          className={linkStyles}
          to={'/sign-in'}
        >
          Вхід
        </NavLink>
      </ul>
      <a className={linkStyles}>Вийти</a>
    </nav>
  );
}

export default Header;
