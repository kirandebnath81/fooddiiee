import React from "react";

//components
import Meals from "../components/home/Meals";
import Desserts from "../components/home/Desserts";

import { Container } from "../components/home/styles/home.styles";

const Home = () => {
  return (
    <Container>
      <Meals />
      <Desserts />
    </Container>
  );
};

export default Home;
