import { useTheme } from '../Context/ThemeProvider';

const Theme = ({ children }) => {
  const { colorMode } = useTheme();
  return (
    <div className={`${colorMode}`}>
      <div className={`min-h-screen bg-[#EDF1FF] dark:bg-gray`}>{children}</div>
    </div>
  );
};

export default Theme;
