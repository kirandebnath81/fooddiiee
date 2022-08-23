import React, { useContext } from "react";

//styled components
import { CardContainer, Card, Button } from "./styles/Wishlist.styles";

//context
import { RecipeContext } from "../../contexts/recipe/RecipeContext";
import { ACTIONS } from "../../contexts/recipe/actions";

//router
import { Link } from "react-router-dom";

const Favourite = () => {
  const { favourite, dispatch } = useContext(RecipeContext);

  return (
    <CardContainer>
      {favourite.length > 0 ? (
        favourite?.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={`recipe/${recipe.id}`}>
              <img src={recipe.image} alt="" />
            </Link>
            <div className="btns">
              <Button
                onClick={() => {
                  dispatch({
                    type: ACTIONS.DELETE,
                    payload: { type: "favourite", id: recipe.id },
                  });
                }}
              >
                Delete
              </Button>
            </div>
          </Card>
        ))
      ) : (
        <h2 style={{ textAlign: "center", fontSize: "1.8rem" }}>
          No items are added.
        </h2>
      )}
    </CardContainer>
  );
};

export default Favourite;
