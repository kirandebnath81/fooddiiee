import React, { useContext } from "react";

import { CardContainer, Card, Button } from "./styles/Wishlist.styles";

//context
import { RecipeContext } from "../../contexts/recipe/RecipeContext";
import { ACTIONS } from "../../contexts/recipe/actions";

//router
import { Link } from "react-router-dom";

const Cook = () => {
  const { cook, dispatch } = useContext(RecipeContext);

  return (
    <CardContainer>
      {cook.length > 0 ? (
        cook?.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt="" />
            </Link>
            <div className="btns">
              <Button
                onClick={() => {
                  dispatch({
                    type: ACTIONS.DELETE,
                    payload: { type: "cook", id: recipe.id },
                  });
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  dispatch({ type: ACTIONS.ADD_TO_COOKED, payload: recipe });
                }}
              >
                Add to cooked
              </Button>
            </div>
          </Card>
        ))
      ) : (
        <h1 style={{ textAlign: "center", fontSize: "1.8rem" }}>
          No items are added.
        </h1>
      )}
    </CardContainer>
  );
};

export default Cook;
