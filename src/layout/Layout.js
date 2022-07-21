import React from 'react';
import Router from '~/Router';
import GlobalStyle from './styles/GlobalStyle';

function Layout () {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default Layout;
