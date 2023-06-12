import { useContext } from 'react';
import { theme } from '../ThemeProvider';

export const useTheme = () => useContext(theme);
