import styled from "styled-components";

function calcWidth(breakpoints) {
  let columns = 12;
  let gap = 20;

  if (breakpoints.xs) {
    columns = 4;
    gap = 10;
  }

  if (breakpoints.sm) {
    columns = 8;
    gap = 10;
  }

  const calc = 65 * columns + 11 * gap;

  return calc;
}

export const StyledContainer = styled.div`
  display: flex;

  margin: 0 auto;
  width: ${props => calcWidth(props.breakpoints)}px;
  /* background-color: red; */
  height: 100%;
`;
