import React from "react";
import {
  Container,
  Inline,
  T1,
} from '~/components';

function NotFound() {
  return (
    <Container>
      <Inline className="mt-40" center>
        <T1>
          404 - Não encontrado
        </T1>
      </Inline>
    </Container>
  );
}

export default NotFound;
