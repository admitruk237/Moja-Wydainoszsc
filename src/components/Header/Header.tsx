import { NavLink } from 'react-router';

import { useSignOut } from '../../hooks/useSignOut';

function Header() {
  const { signOut } = useSignOut();

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
        <NavLink className={linkStyles} to={'/sign-in'}>
          Увійти
        </NavLink>
        <NavLink className={linkStyles} to={'/sign-up'}>
          Зареєсруватись
        </NavLink>
        <NavLink onClick={signOut} className={linkStyles} to={'/sign-in'}>
          Вийти
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
