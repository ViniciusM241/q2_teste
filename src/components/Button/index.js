import React from 'react';
import { StyledButton } from './styles';
import { LoadingOutlined } from '@ant-design/icons';

function Button({ children, ...props }) {
  return (
    <StyledButton disabled={!!props.isLoading} {...props}>
      {
        props.isLoading ? <LoadingOutlined /> : children
      }
    </StyledButton>
  );
}

export default Button;
