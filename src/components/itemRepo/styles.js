import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 400px;
  border: solid 1px #000000;
  border-left: none;
  border-right: none;

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.49);
  }
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    tex-decoration: none;

    color: rgba(0, 0, 0, 0.8);
  }

  .remover {
    border: none;
    border-radius: 50px;
    background-color: #ff0000;
    cursor: pointer;
  }
  .buttonSecondary {
    position: fixed;
    padding-left: 230px;
    padding-top: 5px;
  }
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
