import styled from "styled-components";

export const CardContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 50px;
    padding-bottom: 400px;
  }
`;

export const Card = styled.div`
  width: 290px;
  height: 280px;
  margin-right: 40px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }

  .btns {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }

  @media only screen and (max-width: 600px) {
    width: 155px;
    height: 160px;
    margin-right: 0px;
    margin-bottom: 20px;
    img {
      height: 115px;
    }
    .btns {
      margin-top: 10px;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  box-shadow: 0px 1px 1px 1px grey;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 15px;

  background: var(--theme-color);
  color: white;
  margin-right: 10px;
  border-radius: 5px;
  transition: 250ms background-color ease-in;
  &:hover {
    background-color: black;
  }

  @media only screen and (max-width: 600px) {
    font-size: 8px;
    padding: 1px 7px;
    border-radius: 3px;
  }
`;
