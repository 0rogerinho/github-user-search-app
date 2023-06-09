import React, { useState, createContext } from 'react';
export const theme = createContext();
const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');
  const toggleTheme = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };
  return (
    <theme.Provider value={{ colorMode, toggleTheme }}>
      {children}
    </theme.Provider>
  );
};

export default ThemeProvider;
