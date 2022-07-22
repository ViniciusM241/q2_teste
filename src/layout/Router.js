import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import routes from '~/routes';

function CustomRouter () {

  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({
            middlewares,
            element: Component,
            path,
            exact,
            ...props
          }, index) => {
            const Element = () => {
              const next = () => {
                return {
                  element: Component && <Component {...props} />,
                  success: true,
                };
              }

              const redirect = (to) => {
                return {
                  element: <Navigate to={to} {...props} />,
                  success: false,
                };
              }

              if (middlewares && middlewares.length) {
                let response = null;

                for (let i = 0; i < middlewares.length; i++) {
                  const _middleware = middlewares[i](next, redirect);
                  response = _middleware()
                  if (response.success === false) {
                    break;
                  }
                }

                return response.element;
              } else {
                return (
                  Component && <Component {...props} />
                )
              }
            };

            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                element={<Element {...props} />}
              />
            );
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRouter;
