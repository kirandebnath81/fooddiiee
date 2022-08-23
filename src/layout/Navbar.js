import React, { useContext, useState } from "react";

//icon
import { GiForkKnifeSpoon } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

//styled components
import {
  Nav,
  StyledForm,
  StyledInput,
  StyledSelect,
} from "./styles/layout.styles";

import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../contexts/theme/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [recipeType, setRecipeType] = useState("");
  const [wishlist, setWishlist] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchInput("");
    navigate(`/search/${searchInput}`);
    setRecipeType("");
    setWishlist("");
  };

  const recipesHandler = (e) => {
    const type = e.target.value;
    setRecipeType(type);

    if (type !== "") {
      if (type === "nutrients") {
        navigate(`/recipe/nutrients`);
      } else {
        navigate(`/recipe/type/${type}`);
      }
    }
    setWishlist("");
  };

  const wishlistHandler = (e) => {
    const wishlist = e.target.value;
    setWishlist(wishlist);

    if (wishlist !== "") {
      navigate(`/wishlist/${wishlist}`);
    }
    setRecipeType("");
  };

  const clickHandler = () => {
    navigate("/");
    setRecipeType("");
    setWishlist("");
  };

  return (
    <Nav>
      <div className="brand" onClick={clickHandler}>
        <div>
          <GiForkKnifeSpoon />
        </div>
        <div>Foodie</div>
      </div>

      <StyledForm
        className="search-recipe"
        onSubmit={submitHandler}
        thememode={theme}
      >
        <AiOutlineSearch className="icon" />
        <StyledInput
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </StyledForm>

      <div className="nav-items">
        <StyledSelect
          value={recipeType}
          onChange={(e) => recipesHandler(e)}
          thememode={theme}
        >
          <option value="">Diets</option>
          <option value="meat">Non-veg</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="Gluten Free">Gluten Free</option>
          <option value="Ketogenic">Ketogenic</option>
          <option value="Whole30">Whole30</option>
          <option value="nutrients">Nutrients</option>
          <option value="dessert">Desserts</option>
        </StyledSelect>
        <StyledSelect
          value={wishlist}
          onChange={(e) => wishlistHandler(e)}
          thememode={theme}
        >
          <option value="">Wishlist</option>
          <option value="cook">cook</option>
          <option value="cooked">cooked</option>
          <option value="favourite">favourite</option>
        </StyledSelect>
      </div>
    </Nav>
  );
};

export default Navbar;
