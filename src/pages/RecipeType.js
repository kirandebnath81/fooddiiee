import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

//styled components
import { CardContainer, Card, Gradient } from "./styles/category.styles";

//router
import { useParams, useNavigate } from "react-router-dom";

//component
import Pagination from "../components/Pagination";

//context
import { RecipeContext } from "../contexts/recipe/RecipeContext";
import { ThemeContext } from "../contexts/theme/ThemeContext";

const RecipeType = () => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const { type } = useParams();
  const { page } = useContext(RecipeContext);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecipes(type);
  }, [type]);

  const getRecipes = async (type) => {
    setIsLoading(true);

    try {
      if (type === "meat" || type === "dessert") {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/random`,
          {
            params: {
              apiKey: process.env.REACT_APP_API_KEY,
              number: 100,
              tags: type,
            },
          }
        );

        setRecipes(data.recipes);
      } else {
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch`,
          {
            params: {
              apiKey: process.env.REACT_APP_API_KEY,
              number: 100,
              diet: type,
            },
          }
        );

        setRecipes(data.results);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const displayRecipes = recipes.slice(page * 12, page * 12 + 12);

  const clickHandler = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <CardContainer>
      {isLoading ? (
        <h1 style={{ textAlign: "center", margin: "20px auto" }}>Loading...</h1>
      ) : (
        <>
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
        </>
      )}
    </CardContainer>
  );
};

export default RecipeType;
