import React from 'react';
const HomePage = React.lazy(() => import('./index'));
const CustomerData = React.lazy(() => import('./subpages/CustomerData'));
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
  {
    path: '/home/clientes/:id/dados',
    element: CustomerData,
    exact: true,
    middlewares: [
      isLogged,
    ],
  },
];
