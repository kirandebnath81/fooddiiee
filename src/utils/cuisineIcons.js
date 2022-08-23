import React from "react";

//icons
import { GiNoodles, GiFrenchFries } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { MdEmojiFoodBeverage } from "react-icons/md";

const getCuisineIcons = (cuisine) => {
  const styles = {
    fontSize: "15px",
  };

  switch (cuisine) {
    case "Indian":
      return <MdEmojiFoodBeverage style={styles} />;
    case "American":
      return <FaHamburger style={styles} />;
    case "Chinese":
      return <GiNoodles style={styles} />;
    case "Italian":
      return <FaPizzaSlice style={styles} />;
    case "French":
      return <GiFrenchFries style={styles} />;

    default:
      return cuisine;
  }
};

export default getCuisineIcons;
