import React from 'react';
import { StyledInline } from './styles';

function Inline({ children, ...props }) {
  return (
    <StyledInline {...props}>
      {children}
    </StyledInline>
  );
}

export default Inline;
