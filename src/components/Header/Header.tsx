function Header() {
  const linkStyles =
    'hover:bg-[#40414F]  px-4 py-2 rounded-md outline-none transition cursor-pointer';

  return (
    <nav className="flex items-center justify-between w-full h-13 px-4 border-b-1 border-white">
      <div className={linkStyles}>Logo</div>
      <ul className="flex items-center gap-10">
        <li className={linkStyles}>Домашня сторінка</li>
        <li className={linkStyles}>Інструкція</li>
        <li className={linkStyles}>Зареєсруватись</li>
        <li className={linkStyles}>Вхід</li>
      </ul>
      <a className={linkStyles}>Вийти</a>
    </nav>
  );
}

export default Header;
