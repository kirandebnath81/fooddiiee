import React, { useContext } from "react";

//styled components
import { ToggleContainer, Toggle } from "./style/ThemeToggler.styles";

//context
import { ThemeContext } from "../contexts/theme/ThemeContext";

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ToggleContainer
      onClick={() => setTheme((prev) => (prev === "white" ? "dark" : "white"))}
      thememode={theme}
    >
      <Toggle thememode={theme}></Toggle>
    </ToggleContainer>
  );
};

export default ThemeToggler;
