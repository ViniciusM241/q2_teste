import styled from "styled-components";
import colors from "~/utils/colors";

export const Thead = styled.thead`
  background-color: ${colors.LIGHT_BLUE};
  color: ${colors.WHITE};
`;

export const Tr = styled.tr`

`;

export const Th = styled.th`
  font-weight: 500;
  padding: 16px 35px;
  text-align: left;
`;

export const StyledP = styled.p`
  cursor: pointer;
  display: inline;

  &:hover {
    text-decoration: underline;
  }
`
