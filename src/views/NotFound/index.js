import React from "react";
import {
  Container,
  Inline,
  T1,
  Button,
} from '~/components';
import colors from "~/utils/colors";
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <Inline className="mt-40" center>
        <T1 style={{ color: colors.LIGHT_BLUE, textAlign: 'center' }}>
          404 - Página não encontrada
        </T1>
      </Inline>
      <Inline className="mt-40" center>
        <Button
          onClick={() => navigate('/home')}
        >
          Voltar ao inicio
        </Button>
      </Inline>
    </Container>
  );
}

export default NotFound;
