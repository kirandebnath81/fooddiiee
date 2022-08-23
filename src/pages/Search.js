import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

//styled components
import {
  CardContainer,
  Card,
  Gradient,
  Container,
} from "./styles/category.styles";

//component
import Pagination from "../components/Pagination";

//context
import { RecipeContext } from "../contexts/recipe/RecipeContext";
import { ThemeContext } from "../contexts/theme/ThemeContext";

//router
import { useParams, useNavigate } from "react-router-dom";

const Search = () => {
  const { theme } = useContext(ThemeContext);
  const { recipe } = useParams();
  const navigate = useNavigate();
  const { page } = useContext(RecipeContext);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecipe(recipe);
  }, [recipe]);

  const getRecipe = async (recipe) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            query: recipe,
            number: 100,
          },
        }
      );

      setRecipes(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const displayRecipes = recipes.slice(page * 12, page * 12 + 12);

  const clickHandler = (id) => {
    navigate(`/recipe/${id}`);
  };

  const title =
    recipe.slice(0, 1).toUpperCase() +
    recipe.slice(1, recipe.length).toLowerCase();

  return (
    <Container>
      <h2>{title}</h2>

      {isLoading ? (
        <h1 style={{ textAlign: "center", margin: "20px auto" }}>Loading...</h1>
      ) : displayRecipes.length > 0 ? (
        <CardContainer>
          {displayRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              onClick={() => clickHandler(recipe.id)}
              thememode={theme}
            >
              <img src={recipe.image} alt="" />
              <Gradient />
              <div>{recipe.title}</div>
            </Card>
          ))}
          {recipes.length > 12 && <Pagination totalResults={recipes.length} />}
        </CardContainer>
      ) : (
        <h1 style={{ textAlign: "center", margin: "20px auto" }}>
          No Recipes Found.
        </h1>
      )}
    </Container>
  );
};

export default Search;
