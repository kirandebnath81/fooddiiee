import styled from "styled-components";

export const Box = styled.div`
  width: 80vw;
  display: flex;
  padding-top: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;

export const Container = styled.div`
  flex-basis: 36%;
  margin-right: 80px;

  div {
    font-size: 1.2rem;
    margin: 15px 0px;
    font-weight: 600;
    line-height: 1.3rem;
  }

  img {
    width: 100%;
    height: 270px;
    border-radius: 15px;
    box-shadow: ${({ thememode }) =>
      thememode === "dark"
        ? "rgba(215, 200, 225, 0.7) 0px 3px 10px 0px"
        : "rgba(0, 0, 0, 0.3) 0px 3px 15px"};
  }

  @media screen and (max-width: 600px) {
    flex-basis: 100%;
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      margin: 10px 0px 25px;
    }
  }
`;

export const ContainerFluid = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;

  .btns {
    margin-bottom: 20px;
  }

  .summary,
  .instructions {
    font-weight: 400;
    line-height: 1.4rem;
    letter-spacing: 1px;
    word-spacing: 2px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .ingredients {
    ul li {
      margin-bottom: 20px;
      font-family: "Poppins", sans-serif;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .summary-btn {
      display: flex;
      justify-content: center;
    }

    .summary,
    .instructions {
      width: 280px;
      font-weight: 400;
      line-height: 1.3rem;
      letter-spacing: 1px;
      word-spacing: 1px;
      font-size: 12px;
      margin-bottom: 30px;
    }

    .ingredients {
      width: 280px;
      margin-top: 20px;
    }
  }
`;

export const ButtonOne = styled.button`
  font-size: 12.5px;
  font-weight: 500;
  padding: 4px 15px;
  border: 1px solid #000;
  color: white;
  background-color: var(--theme-color);
  margin-right: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px white;

  &:hover {
    background-color: black;
  }
`;

export const ButtonTwo = styled.button`
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px white;
  font-size: 12.5px;
  font-weight: 500;
  padding: 2px 15px;
  border: 1px solid #000;
  background-color: ${({ select }) =>
    select ? "var(--theme-color)" : "white"};
  color: ${({ select }) => (select ? "white" : "black")};
  margin-right: 10px;
  border-radius: 5px;
  transition: 250ms background-color ease-in, 200ms color ease-in;
  &:hover {
    background-color: var(--theme-color);
    color: white;
  }
`;
