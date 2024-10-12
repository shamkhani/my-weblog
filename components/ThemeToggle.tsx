// components/ThemeToggle.tsx

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    dispatch(toggleTheme(savedTheme));

    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    dispatch(toggleTheme(newTheme));
  };

  return (
    <button className="p-2 rounded-md text-[--text]" 
    onClick={handleToggle}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggle;
