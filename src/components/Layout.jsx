import React from 'react';
import { useTheme } from './Context/hooks/theme';
const Layout = ({ children }) => {
  const { colorMode } = useTheme();
  return (
    <div className={`${colorMode}`}>
      <div className={` max-h-full max-w-full bg-[#EDF1FF] dark:bg-gray`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
