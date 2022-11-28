import React from "react";

import { InputContainer } from "./style";

const Input = ({ value, onChange }) => {
  return (
    <>
      <InputContainer value={value} onChange={onChange}>
        <input />
      </InputContainer>
    </>
  );
};

export default Input;
