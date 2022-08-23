import styled from "styled-components";

import { NavLink } from "react-router-dom";

//Sidebar
export const Container = styled.div`
  width: 80px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  padding: 5px 0px;
  margin-bottom: 8px;
  @media screen and (max-width: 600px) {
    flex-direction: row;
    width: 100%;
    height: 100px;
    margin-top: 0px;
    margin-bottom: 15px;
    justify-content: space-between;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 9px;
  font-weight: 500;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-color);
  color: white;
  box-shadow: ${({ thememode }) =>
    thememode === "dark" ? "0px 0px 8px 1px white" : "0px 0px 4px 0px black"};

  transition: background-image 300ms ease-in;

  &:hover {
    background-image: linear-gradient(
      180deg,
      rgba(255, 91, 3) 50%,
      rgba(255, 74, 54)
    );
  }

  &.active {
    background-image: linear-gradient(
      180deg,
      rgba(255, 91, 3) 50%,
      rgba(255, 74, 54)
    );
  }

  @media screen and (max-width: 600px) {
    font-size: 9px;
    width: 53px;
    height: 53px;
  }
`;

//Navbar
export const Nav = styled.nav`
  padding-left: 172px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    font-weight: bold;
    font-family: "Oswald", sans-serif;
    font-size: 2.1rem;
    cursor: pointer;
  }

  .nav-items {
    width: 275px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 160px;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .brand {
      width: 125px;
      font-size: 1.6rem;
    }
  }
`;

export const StyledForm = styled.form`
  width: 300px;
  height: 36px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: var(--theme-color);
  display: flex;
  align-items: center;
  padding: 0px 10px;
  box-shadow: ${({ thememode }) =>
    thememode === "dark" ? "0px 1px 5px 0px white" : ""};

  &:hover {
    box-shadow: ${({ thememode }) =>
      thememode === "dark" ? "0px 4px 12px 0px white" : "0px 2px 6px 0px grey"};
  }

  .icon {
    color: white;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 600px) {
    width: 240px;
    height: 30px;
    .icon {
      font-size: 1rem;
    }
  }
`;

export const StyledInput = styled.input`
  border: none;
  width: 260px;
  height: 35px;
  user-select: none;
  outline: none;
  text-indent: 15px;
  font-size: 1rem;
  color: white;
  background-color: var(--theme-color);
  @media screen and (max-width: 600px) {
    width: 200px;
    font-size: 15px;
    text-indent: 10px;
    height: 28px;
    font-size: 15px;
  }
`;

export const StyledSelect = styled.select`
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ thememode }) =>
    thememode === "dark" ? "black" : "white"};
  color: ${({ thememode }) =>
    thememode === "dark" ? "white" : "var(--theme-color)"};
  padding: 3px 5px;
  box-shadow: ${({ thememode }) =>
    thememode === "dark"
      ? "0px 0px 5px 1px white"
      : "0px 0px 5px 0px var(--theme-color)"};
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    padding: 2px 4px;
    font-size: 15px;
  }
`;
