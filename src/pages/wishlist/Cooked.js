import React, { useContext } from "react";

//styled components
import { CardContainer, Card, Button } from "./styles/Wishlist.styles";

//context
import { RecipeContext } from "../../contexts/recipe/RecipeContext";
import { ACTIONS } from "../../contexts/recipe/actions";

//router
import { Link } from "react-router-dom";

const Cooked = () => {
  const { cooked, dispatch } = useContext(RecipeContext);

  return (
    <CardContainer>
      {cooked.length > 0 ? (
        cooked?.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt="" />
            </Link>
            <div className="btns">
              <Button
                onClick={() => {
                  dispatch({
                    type: ACTIONS.DELETE,
                    payload: { type: "cooked", id: recipe.id },
                  });
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  dispatch({ type: ACTIONS.ADD_TO_FAVOURITE, payload: recipe });
                }}
              >
                Add to favourite
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

export default Cooked;
