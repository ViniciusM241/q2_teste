import React from "react";
import { Container } from './styles';
import { LoadingOutlined } from '@ant-design/icons';

function SuspenseLoading() {
  return (
    <Container>
      <LoadingOutlined style={{ fontSize: '2rem' }} />
    </Container>
  );
}

export default SuspenseLoading;
