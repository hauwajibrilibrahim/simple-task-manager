import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyle from './GlobalStyle';
import TaskApp from './Component/TaskApp';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <TaskApp onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
