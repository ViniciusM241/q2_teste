import styled from "styled-components";

export const Container = styled.div`
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;

  overflow: hidden;
  border-collapse: separate;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
`;

export const Rows = styled.tbody`
  width: 100%;
`;
