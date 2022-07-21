import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import routes from '~/routes';

function CustomRouter () {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element()}
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRouter;
