import React, { createContext, useReducer } from "react";
import { useEffect } from "react";

import reducer from "./reducer";

//create context
export const RecipeContext = createContext();

// create provider
export const RecipeProvider = ({ children }) => {
  const initialState = {
    page: 0,
    cook: JSON.parse(localStorage.getItem("wishlist"))?.cook || [],
    cooked: JSON.parse(localStorage.getItem("wishlist"))?.cooked || [],
    favourite: JSON.parse(localStorage.getItem("wishlist"))?.favourite || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { page, cook, cooked, favourite } = state;

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state));
  }, [state]);

  return (
    <RecipeContext.Provider value={{ page, cook, cooked, favourite, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
