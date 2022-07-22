import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import {
  T1,
  T2,
  Input,
  Form,
  Button,
  Inline,
} from '~/components';

import {
  Container,
  Box,
  BlueBackground,
  TextureBackground,
  Logo,
  Error,
} from './styles';

function Login() {
  // const navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = (values) => {
    if (!values.username || !values.password) return;
    setError('Usuario ou senha incorretos');
  };

  return (
    <Container>
      <BlueBackground />
      <TextureBackground />
      <Logo />
      <Box>
        <T1> Entrar </T1>
        <T2 className="mt-10"> Entre com seu usuário e senha </T2>
        <Form
          className="mt-20"
          onSubmit={onSubmit}
        >
          <Input
            className="mb-20"
            name="username"
            type="text"
            placeholder="Usuário"
            label="Usuário"
          />
          <Input
            className="mb-20"
            name="password"
            type="password"
            placeholder="Senha"
            label="Senha"
          />
          <Error>{error || '\u00A0'}</Error>
          <Inline
            className="mt-40"
            right
          >
            <Button type="submit"> Entrar </Button>
          </Inline>
        </Form>
      </Box>
    </Container>
  );
}

export default Login;
