import { useState } from 'react';
import Date from './Date';
import Logo from './Logo';
import NewsCategories from './NewsCategories';
import Search from './Search';

const Header = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <header>
      <nav className="py-6 transition duration-1000 ease-in-out border-b border-black md:py-8">
        <div className="container flex flex-wrap items-center justify-between gap-6 mx-auto sm:grid-cols-1">
          <Date />
          <Logo />
          <Search keyword={keyword} setKeyword={setKeyword} />
        </div>

        <NewsCategories setKeyword={setKeyword} />
      </nav>
    </header>
  );
};

export default Header;
