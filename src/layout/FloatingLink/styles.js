import styled from "styled-components";
import colors from "~/utils/colors";

export const StyledLink = styled.a`
  font-size: .8rem;
  color: ${colors.LIGHT_TEXT};
  text-decoration: none;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
