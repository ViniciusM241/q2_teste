import React from 'react';
import Router from '~/layout/Router';

import GlobalStyle from './styles/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';

function Layout () {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default Layout;
