import { ACTIONS } from "./actions";

//taost
import { toast } from "react-toastify";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PAGE:
      return { ...state, page: action.payload };

    case ACTIONS.ADD_TO_COOK:
      if (state.cook.length === 0) {
        toast.info("Recipe is added to cook list");
        return { ...state, cook: [...state.cook, action.payload] };
      } else {
        if (state.cook.every((recipe) => recipe.id !== action.payload.id)) {
          toast.info("Recipe is added to cook list");
          return { ...state, cook: [...state.cook, action.payload] };
        } else {
          toast.warning("Recipe is already added");
          return state;
        }
      }

    case ACTIONS.ADD_TO_COOKED:
      if (state.cooked.length > 0) {
        if (state.cooked.every((recipe) => recipe.id !== action.payload.id)) {
          toast.info("Recipe is added to cooked list");
          return {
            ...state,
            cooked: [...state.cooked, action.payload],
            cook: state.cook.filter(
              (recipe) => recipe.id !== action.payload.id
            ),
          };
        } else {
          toast.warning("Recipe is already added");
          return state;
        }
      } else {
        toast.info("Recipe is added to cooked list");
        return {
          ...state,
          cooked: [...state.cooked, action.payload],
          cook: state.cook.filter((recipe) => recipe.id !== action.payload.id),
        };
      }

    case ACTIONS.ADD_TO_FAVOURITE:
      if (state.favourite.length > 0) {
        if (
          state.favourite.every((recipe) => recipe.id !== action.payload.id)
        ) {
          toast.info("Recipe is added to favourite list");
          return { ...state, favourite: [...state.favourite, action.payload] };
        } else {
          toast.warning("Recipe is already added");
          return state;
        }
      } else {
        toast.info("Recipe is added to favourite list");
        return { ...state, favourite: [...state.favourite, action.payload] };
      }

    case ACTIONS.DELETE:
      if (action.payload.type === "cook") {
        toast.info("Recipe is deleted from cook list");
        return {
          ...state,
          cook: state.cook.filter((recipe) => recipe.id !== action.payload.id),
        };
      } else if (action.payload.type === "cooked") {
        toast.info("Recipe is deleted from cooked list");
        return {
          ...state,
          cooked: state.cooked.filter(
            (recipe) => recipe.id !== action.payload.id
          ),
        };
      } else {
        toast.info("Recipe is deleted from favourite list");
        return {
          ...state,
          favourite: state.favourite.filter(
            (recipe) => recipe.id !== action.payload.id
          ),
        };
      }

    default:
      return state;
  }
};

export default reducer;
