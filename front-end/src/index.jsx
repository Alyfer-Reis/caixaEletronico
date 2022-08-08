import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/globals';
import ListProvider from './context/useError';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <link href="https://fonts.googleapis.com/css2?Josefin+Sans:wght@600&family=Rubik:wght@300;400;500;600;800&display=swap" rel="stylesheet" />
      <GlobalStyle />
      <ListProvider>
        <App />
      </ListProvider>
    </ThemeProvider>
  </React.StrictMode>
);
