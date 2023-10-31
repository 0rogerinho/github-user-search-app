/* eslint-disable react-refresh/only-export-components */
import React from 'react';

export const ThemeContext = React.createContext();

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = React.useState('light');
  const toggleTheme = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ colorMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
