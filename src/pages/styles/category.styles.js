import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .meal-type {
    margin: 5px 0px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    .meal-type {
      margin: 20px 0px;
    }
  }
`;

export const CardContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 8px;

  @media only screen and (max-width: 600px) {
    margin-right: 0px;
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 230px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  box-shadow: ${({ thememode }) =>
    thememode === "dark"
      ? "0px 0px 5px 0px white"
      : "0px 2px 4px 0px var(--theme-color)"};

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
  }

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
    font-size: 11px;
    color: white;
    font-weight: 500;
    letter-spacing: 0.5;
    line-height: 1.2rem;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 155px;
    height: 110px;
    margin-bottom: 35px;

    div {
      font-size: 9px;
      line-height: 1.1rem;
      padding: 8px;
    }
  }
`;
export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.9)
  );
  border-radius: 10px;
`;
