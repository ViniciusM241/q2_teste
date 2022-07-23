import React from "react";
import { StyledCol } from './styles';

function Col({ children, cols }) {
  return (
    <StyledCol
      cols={cols}
    >
      {children}
    </StyledCol>
  );
}

export default Col;
