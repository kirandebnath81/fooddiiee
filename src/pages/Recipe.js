import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

import {
  Box,
  Container,
  ContainerFluid,
  ButtonOne,
  ButtonTwo,
} from "./styles/Recipe.styles";

import { useParams } from "react-router-dom";

import { RecipeContext } from "../contexts/recipe/RecipeContext";
import { ACTIONS } from "../contexts/recipe/actions";
import { ThemeContext } from "../contexts/theme/ThemeContext";

const Recipe = () => {
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(RecipeContext);
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [viewIngredients, setViewIngredients] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecipes(id);
  }, [id]);

  const getRecipes = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: { apiKey: process.env.REACT_APP_API_KEY },
        }
      );

      setRecipe(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(recipe);

  return (
    <div>
      <Box>
        {isLoading ? (
          <h1 style={{ textAlign: "center", margin: "20px auto" }}>
            Loading...
          </h1>
        ) : (
          <>
            <Container thememode={theme}>
              <ButtonOne
                onClick={() =>
                  dispatch({ type: ACTIONS.ADD_TO_COOK, payload: recipe })
                }
              >
                Add to Cook
              </ButtonOne>
              <div>{recipe.title}</div>
              <img src={recipe.image} alt="" />
            </Container>
            <ContainerFluid>
              <div className="btns">
                <ButtonTwo
                  select={!viewIngredients && true}
                  onClick={() => setViewIngredients(false)}
                >
                  Instructions
                </ButtonTwo>
                <ButtonTwo
                  select={viewIngredients && true}
                  onClick={() => setViewIngredients(true)}
                >
                  Ingredients
                </ButtonTwo>
              </div>

              {viewIngredients ? (
                <div className="ingredients">
                  {recipe.extendedIngredients?.map((ingredient, index) => (
                    <ul key={index}>
                      <li>{ingredient.original}</li>
                    </ul>
                  ))}
                </div>
              ) : (
                <div>
                  <div
                    className="instructions"
                    dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                  ></div>
                  <div></div>
                  <div className="summary-btn">
                    <ButtonTwo onClick={() => setShowSummary((prev) => !prev)}>
                      Summary
                    </ButtonTwo>
                  </div>

                  {showSummary && (
                    <div
                      className="summary"
                      dangerouslySetInnerHTML={{ __html: recipe.summary }}
                    ></div>
                  )}
                </div>
              )}
            </ContainerFluid>
          </>
        )}
      </Box>
    </div>
  );
};

export default Recipe;
