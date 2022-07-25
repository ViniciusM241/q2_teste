import React from "react";
import colors from "~/utils/colors";
import { StyledLink } from './styles';

function FloatingLink() {
  return (
    <StyledLink href={process.env.REACT_APP_GIT_URL} target="_blank">
      ViniciusM241
      <span style={{color: colors.RED}}>❤</span>
    </StyledLink>
  );
}

export default FloatingLink;
