import styled from "styled-components";

function calcWidth(cols, breakpoints) {
  const gap = breakpoints.sm || breakpoints.xs ? 10 : 20;
  const column = 65;
  const gapQty = cols;
  const result = cols * column + gapQty * gap;

  return result;
}

export const StyledCol = styled.div`
  display: flex;
  align-items: center;

  width: ${props => calcWidth(props.cols, props.breakpoints)}px;
  /* background-color: blue; */
  height: 100%;
`;
