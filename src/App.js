import React, { useState } from 'react';
import {
  MuiThemeProvider,
  Switch,
  FormControlLabel,
  Box,
  AppBar,
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Codebox from './components/Codebox';

const themeObject = {
  palette: {
    primary: { main: '#053f5b' },
    secondary: { main: '#053f5b' },
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
        <AppBar position="fixed" color="default">
          <Box justifyContent="center" display="flex">
            <FormControlLabel
              label="Toggle Light/Dark Mode"
              control={<Switch onClick={toggleDarkMode} />}
            />
          </Box>
        </AppBar>
        <Introduction />
        <Experience />
        <Education />
        <Codebox />
        <Contact />
      </MuiThemeProvider>
    </div>
  );
}
