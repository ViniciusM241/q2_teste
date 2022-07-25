import styled from "styled-components";
import colors from "~/utils/colors";

export const StyledLine = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 8px;
  background-color: ${props => props.color || colors.GRAY};
`;
