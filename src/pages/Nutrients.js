import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

import { CardContainer, Card, Gradient } from "./styles/category.styles";

import { RecipeContext } from "../contexts/recipe/RecipeContext";

import Pagination from "../components/Pagination";

import { useNavigate } from "react-router-dom";

const Nutrients = () => {
  const navigate = useNavigate();
  const { page } = useContext(RecipeContext);

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&minProtein=10&maxProtein=50&minFat=5&minCalcium=10&minVitaminA=10&minFiber=10`,
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            number: 100,
          },
        }
      );

      setRecipes(data);
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
          {displayRecipes?.map((recipe) => (
            <Card key={recipe.id} onClick={() => clickHandler(recipe.id)}>
              <img src={recipe.image} alt="" />
              <Gradient />
              <div>{recipe.title}</div>
            </Card>
          ))}
          <Pagination totalResults={recipes.length} />
        </>
      )}
    </CardContainer>
  );
};

export default Nutrients;
