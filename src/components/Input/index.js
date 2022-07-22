import React from 'react';
import { StyledInput, StyledLabel } from './styles';

function Input({
  label,
  ...props
}) {
  return (
    <StyledLabel htmlFor={props.name}>
      {label}
      <StyledInput {...props} />
    </StyledLabel>
  );
}

export default Input;
