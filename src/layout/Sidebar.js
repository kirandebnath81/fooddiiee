import React, { useContext } from "react";

//styles
import { Container, StyledLink } from "./styles/layout.styles";

//icons
import getCuisineIcons from "../utils/cuisineIcons";

import { ThemeContext } from "../contexts/theme/ThemeContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);

  const categories = ["Indian", "American", "Chinese", "Italian", "French"];

  return (
    <Container>
      {categories.map((category, index) => (
        <StyledLink key={index} to={`/category/${category}`} thememode={theme}>
          <div>{getCuisineIcons(category)}</div>
          <div>{category}</div>
        </StyledLink>
      ))}
    </Container>
  );
};

export default Sidebar;
