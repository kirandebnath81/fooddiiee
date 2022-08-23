import styled from "styled-components";

export const ToggleContainer = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 85px;
  left: 65px;

  box-shadow: ${({ thememode }) =>
    thememode === "dark" ? "0px 0px 6px 1px white" : "0px 0px 6px 1px black"};
  width: 48px;
  height: 21px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: ${({ thememode }) =>
    thememode === "dark" ? "flex-end" : "flex-start"};
  background-color: ${({ thememode }) =>
    thememode === "dark" ? "black" : "white"};

  @media only screen and (max-width: 600px) {
    left: 30px;
    top: 20px;
  }
`;

export const Toggle = styled.div`
  border: 1px solid #000;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${({ thememode }) =>
    thememode === "dark" ? "white" : "black"};
`;
