import React from "react";

import "./App.css";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Pages from "./pages/Pages";

import { RecipeProvider } from "./contexts/recipe/RecipeContext";
import { ThemeProvider } from "./contexts/theme/ThemeContext";

const App = () => {
  return (
    <div className="app">
      <RecipeProvider>
        <ThemeProvider>
          <ToastContainer position="bottom-center" />
          <Pages />
        </ThemeProvider>
      </RecipeProvider>
    </div>
  );
};

export default App;
