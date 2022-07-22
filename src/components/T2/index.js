import React from 'react';
import { StyledT2 } from './styles';

function T2({
  children,
  ...props
}) {
  return (
    <StyledT2 {...props}>
      {children}
    </StyledT2>
  );
}

export default T2;
