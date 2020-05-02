import React, { useState } from 'react';
import {
  MuiThemeProvider,
  Switch,
  FormControlLabel,
  Box,
  AppBar,
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import './App.css';
import Education from './components/Education';
import Contact from './components/Contact';

const themeObject = {
  palette: {
    primary: { main: '#053f5b' },
    secondary: { main: '#5e3c6f' },
    type: 'light',
  },
  themeName: 'Website Text',
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);
  const {
    palette: { type },
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

export default function App() {
  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <div className="app">
      <MuiThemeProvider theme={themeConfig}>
        <AppBar position="static" color="default">
          <Box justifyContent="center" display="flex">
            <FormControlLabel
              label="Toggle"
              control={<Switch onClick={toggleDarkMode} />}
            />
          </Box>
        </AppBar>
        <Introduction />
        <Experience />
        <Education />
        <Contact />
      </MuiThemeProvider>
    </div>
  );
}
