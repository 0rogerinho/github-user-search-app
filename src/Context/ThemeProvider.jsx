/* eslint-disable react-refresh/only-export-components */
import React from 'react';

export const ThemeContext = React.createContext();

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = React.useState('light');
  const toggleTheme = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };
  React.useEffect(() => {
    const prefersColorScheme = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    console.log(prefersColorScheme.matches);
    if (prefersColorScheme.matches) {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ colorMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
