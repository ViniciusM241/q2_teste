import styled from "styled-components";

function calcWidth(cols) {
  const result = cols / 12 * 100;

  return result;
}

export const StyledCol = styled.div`
  display: flex;
  align-items: center;

  width: ${props => calcWidth(props.cols)}%;
  height: 100%;
`;
