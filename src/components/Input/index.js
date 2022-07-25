import React from 'react';
import { StyledInput, StyledLabel, StyledError } from './styles';

function Input({
  label,
  ...props
}) {
  return (
    <div style={{width: '100%'}}>
      <StyledLabel htmlFor={props.name}>
        {label}
        <StyledInput {...props} />
      </StyledLabel>
      {
        props.error && !props.disabled && (
          <StyledError>
            {props.error}
          </StyledError>
        )
      }
    </div>
  );
}

export default Input;
