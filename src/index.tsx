import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from '@src/shared/global-styles';
import DefaultTheme from '@src/shared/theme';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';
import App from './App';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: DefaultTheme.colors.primary.light,
      main: DefaultTheme.colors.primary.base,
      dark: DefaultTheme.colors.primary.dark,
      contrastText: DefaultTheme.colors.ui.font
    },
    secondary: {
      light: DefaultTheme.colors.secondary.light,
      main: DefaultTheme.colors.secondary.base,
      dark: DefaultTheme.colors.secondary.base,
      contrastText: DefaultTheme.colors.ui.font
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <StyleSheetManager>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
