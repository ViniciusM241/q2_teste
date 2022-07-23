import React from 'react';
import { StyledT3 } from './styles';

function T3({
  children,
  ...props
}) {
  return (
    <StyledT3 {...props}>
      {children}
    </StyledT3>
  );
}

export default T3;
