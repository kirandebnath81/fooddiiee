import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

//styled components
import { ButtonTwo } from "./styles/Recipe.styles";
import {
  Card,
  Gradient,
  CardContainer,
  Container,
} from "./styles/category.styles";

//components
import Pagination from "../components/Pagination";

//router
import { useParams, useNavigate } from "react-router-dom";

//context
import { RecipeContext } from "../contexts/recipe/RecipeContext";
import { ThemeContext } from "../contexts/theme/ThemeContext";

const Category = () => {
  const navigate = useNavigate();
  const { cuisine } = useParams();

  //global state
  const { theme } = useContext(ThemeContext);
  const { page } = useContext(RecipeContext);
  //local state
  const [cuisines, setCuisines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mealType, setMealType] = useState("");

  useEffect(() => {
    getCuisines(cuisine, mealType);
  }, [cuisine, mealType]);

  const getCuisines = async (cuisine, mealType) => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: process.env.REACT_APP_API_KEY,
            cuisine: cuisine,
            number: 100,
            diet: mealType,
          },
        }
      );
      setCuisines(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const displayCuisines = cuisines.slice(page * 12, page * 12 + 12);

  //direction route
  const clickHandler = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <Container>
      {isLoading ? (
        <h1 style={{ textAlign: "center", margin: "20px auto" }}>Loading...</h1>
      ) : (
        <>
          <div className="meal-type">
            <ButtonTwo select={mealType === ""} onClick={() => setMealType("")}>
              All Meals
            </ButtonTwo>
            <ButtonTwo
              select={mealType === "vegetarian"}
              onClick={() => setMealType("vegetarian")}
            >
              Vegetarian
            </ButtonTwo>
            <ButtonTwo
              select={mealType === "vegan"}
              onClick={() => setMealType("vegan")}
            >
              Vegan
            </ButtonTwo>
          </div>

          <CardContainer>
            {displayCuisines.map((recipe) => (
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
            {cuisines.length > 12 && (
              <Pagination totalResults={cuisines.length} />
            )}
          </CardContainer>
        </>
      )}
    </Container>
  );
};

export default Category;
