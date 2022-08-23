import React from "react";

import styled from "styled-components";

//components

import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import ThemeToggler from "../components/ThemeToggler";
import Home from "./Home";
import Category from "./Category";
import Recipe from "./Recipe";
import Search from "./Search";
import RecipeType from "./RecipeType";
import Nutrients from "./Nutrients";
import Cook from "./wishlist/Cook";
import Cooked from "./wishlist/Cooked";
import Favourite from "./wishlist/Favourite";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeContext } from "../contexts/theme/ThemeContext";
import { useContext } from "react";

const Pages = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
  };

  return (
    <Main style={styles}>
      <Router>
        <Navbar />
        <ThemeToggler />
        <Container>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:cuisine" element={<Category />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/search/:recipe" element={<Search />} />
            <Route path="recipe/type/:type" element={<RecipeType />} />
            <Route path="recipe/nutrients" element={<Nutrients />} />
            <Route path="wishlist/cook" element={<Cook />} />
            <Route path="wishlist/cooked" element={<Cooked />} />
            <Route path="wishlist/favourite" element={<Favourite />} />
          </Routes>
        </Container>
      </Router>
    </Main>
  );
};

export default Pages;

const Main = styled.div`
  padding: 14px 50px 6px;

  @media screen and (max-width: 600px) {
    padding: 20px 30px 260px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
