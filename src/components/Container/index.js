import React from "react";
import { StyledContainer } from './styles';
import useBreakpoints from "~/hooks/useBreakpoints";

function Container({ children }) {
  const breakpoints = useBreakpoints();

  return (
    <StyledContainer breakpoints={breakpoints}>
      {children}
    </StyledContainer>
  );
}

export default Container;
