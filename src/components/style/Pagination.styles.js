import styled from "styled-components";

export const Box = styled.div`
  margin: 50px auto;
  .container {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
    height: 50px;
    box-shadow: ${({ thememode }) =>
      thememode === "dark"
        ? "0px 0px 5px 0px white"
        : "0px 0px 5px 0px var(--theme-color)"};
    border-radius: 4px;
    margin: 0px auto 0px;

    a {
      color: ${({ thememode }) =>
        thememode === "dark" ? "white" : "var(--theme-color)"};
      font-weight: bold;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
      transition: 250ms background-color ease-in, 200ms color ease-in;

      &:hover {
        background-color: ${({ thememode }) =>
          thememode === "dark" ? "white" : "var(--theme-color)"};
        color: ${({ thememode }) =>
          thememode === "dark" ? "var(--theme-color)" : "white"};
      }
    }
  }
  .active {
    a {
      background-color: ${({ thememode }) =>
        thememode === "dark" ? "white" : "var(--theme-color)"};
      color: ${({ thememode }) =>
        thememode === "dark" ? "var(--theme-color)" : "white"};
    }
  }

  @media only screen and (max-width: 600px) {
    margin: 30px auto;
    .container {
      width: 320px;
      height: 40px;
      a {
        font-size: 13px;
        padding: 4px 8px;
      }
    }
  }
`;
