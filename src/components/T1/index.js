import React from 'react';
import { StyledT1 } from './styles';

function T1({
  children,
  ...props
}) {
  return (
    <StyledT1 {...props}>
      {children}
    </StyledT1>
  );
}

export default T1;
