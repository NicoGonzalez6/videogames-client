import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles, defaultTheme } from "./styles/index";
import { router } from "./routes";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
);
