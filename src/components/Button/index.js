import React from "react";

import { ButtonContainer } from "./styles";

function Button({ onClick, title, tipo }) {
  return (
    <ButtonContainer onClick={onClick} tipo={tipo}>
      {title}
    </ButtonContainer>
  );
}

export default Button;
