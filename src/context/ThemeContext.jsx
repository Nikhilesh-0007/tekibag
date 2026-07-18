import React, { useEffect } from 'react';
import { ThemeContext } from './ThemeContextBase';

export function ThemeProvider({ children }) {
  const theme = 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    // Permanently disabled dark mode
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
