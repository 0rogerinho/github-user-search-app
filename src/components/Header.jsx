import React from 'react';
import { useTheme } from './Context/hooks/theme';
const Header = () => {
  const { colorMode, toggleTheme } = useTheme();
  return (
    <div className="flex justify-center text-text-[#000000] dark:text-[#ffffff]">
      <header className="w-[20.4375rem] md:w-[35.8125rem] flex justify-between py-[1.9375rem]">
        <h1 className="text-[1.4375rem] md:text-[1.625rem] text-[#222731] dark:text-[#ffffff] font-bold">
          DevFinder
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-[.8125rem] tracking-[.1437rem] text-[#4B6A9B] dark:text-[#ffffff] uppercase ">
            {colorMode === 'dark' ? 'light' : 'dark'}
          </p>
          <img
            onClick={toggleTheme}
            className="block w-[20px] h-[20px] cursor-pointer"
            src={colorMode === 'light' ? 'icon-moon.svg' : 'icon-sun.svg'}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
