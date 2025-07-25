


import useTheme from "../../context/Theme";

const ThemeBtn = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    themeMode === 'dark' ? lightTheme() : darkTheme();
  };

  return (
    <button onClick={toggleTheme}>
      {themeMode === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeBtn;
