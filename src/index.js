import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider,extendTheme } from '@chakra-ui/react'

const breakpoints = {
  base: "0px",
  sm: "375px",
  md: "783px",
  lg: "1026px",
  xl: "1600px",
  "2xl": "2536px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);


