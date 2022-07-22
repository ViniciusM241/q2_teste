import styled from "styled-components";
import colors from "~/utils/colors";

export const StyledButton = styled.button`
  width: 150px;
  padding: 8px;

  color: ${colors.WHITE};
  font-weight: 700;
  font-size: 1rem;
  outline: none;

  border-radius: 5px;
  background-color: ${colors.LIGHT_BLUE};
  border: none;
  cursor: pointer;
`;
