import React from 'react';
import { StyledRow } from './styles';

function Row({ children, ...props }) {
  return (
    <StyledRow {...props}>
      {children}
    </StyledRow>
  );
}

export default Row;
