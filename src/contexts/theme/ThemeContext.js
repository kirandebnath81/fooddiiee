import { useState } from "react";
import { createContext } from "react";

//create context
export const ThemeContext = createContext();

//create Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
