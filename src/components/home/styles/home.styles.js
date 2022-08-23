import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  position: relative;

  .title {
    font-size: 1rem;
    margin-bottom: 16px;
    letter-spacing: 2px;
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
    .title {
      text-align: center;
      margin-bottom: 25px;
      font-size: 1.2rem;
    }
  }
`;

export const Card = styled.div`
  margin-bottom: 15px;
  width: 320px;
  height: 200px;
  margin-right: 30px;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: ${({ thememode }) =>
    thememode
      ? "rgba(235, 245, 240, 0.5) 0px 0px 9px 0px"
      : "rgba(0, 0, 0, 0.3) 0px 3px 15px"};

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 10px;
  }

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 14px 9px;
    text-align: center;
    font-size: 12px;
    line-height: 1.2rem;
    word-spacing: 1px;
    font-weight: 500;
    border-radius: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 320px;
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 60%,
    rgba(0, 0, 0, 0.85)
  );
`;
