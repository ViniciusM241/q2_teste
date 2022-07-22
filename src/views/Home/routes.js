import React from 'react';
const HomePage = React.lazy(() => import('./index'));
import isLogged from '~/middlewares/isLogged';

export default [
  {
    path: '/home',
    element: HomePage,
    exact: true,
    middlewares: [
      isLogged,
    ],
  },
];
