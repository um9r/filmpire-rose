import React from "react";
import ReactDOM from "react-dom/client";  // Use 'react-dom/client' for React 18
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./app/store";
import './index.css'

const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById("root"));  // Use createRoot

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
