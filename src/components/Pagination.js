import React, { useContext } from "react";

//pagination
import ReactPaginate from "react-paginate";

//styled components
import { Box } from "./style/Pagination.styles";

//context
import { RecipeContext } from "../contexts/recipe/RecipeContext";
import { ACTIONS } from "../contexts/recipe/actions";
import { ThemeContext } from "../contexts/theme/ThemeContext";

const Pagination = ({ totalResults }) => {
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(RecipeContext);

  const handlePageClick = ({ selected }) => {
    dispatch({ type: ACTIONS.SET_PAGE, payload: selected });
    window.scroll(0, 0);
  };

  return (
    <Box thememode={theme}>
      <ReactPaginate
        pageCount={Math.ceil(totalResults / 12)}
        onPageChange={handlePageClick}
        containerClassName="container"
        activeClassName="active"
        previousLabel="<"
        nextLabel=">"
      />
    </Box>
  );
};

export default Pagination;
