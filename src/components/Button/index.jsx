import React from "react";
import { ButtonContainer } from "./style";
import search from "../../img/search.svg";

function Button({ onClick }) {
  return (
    <>
      <ButtonContainer onClick={onClick}>
        <img src={search} width={32} height={32} />
      </ButtonContainer>
    </>
  );
}

export default Button;
