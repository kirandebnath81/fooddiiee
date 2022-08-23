import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

//slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//styled components
import { CardContainer, Card, Gradient } from "./styles/home.styles";

//context
import { ThemeContext } from "../../contexts/theme/ThemeContext";

//router
import { useNavigate } from "react-router-dom";

const Desserts = () => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    getDesserts();
  }, []);

  const getDesserts = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            number: 10,
            tags: "dessert",
          },
        }
      );

      setDesserts(data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = (id) => {
    navigate(`recipe/${id}`);
  };

  return (
    <CardContainer>
      <div className="title">Popular Desserts</div>
      <Splide
        options={{
          arrows: false,
          pagination: false,
          autoWidth: true,
          drag: true,
        }}
      >
        {desserts?.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card onClick={() => clickHandler(recipe.id)} thememode={theme}>
              <img src={recipe.image} alt="" />
              <Gradient />
              <div>{recipe.title}</div>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </CardContainer>
  );
};

export default Desserts;
