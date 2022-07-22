import loginRoutes from '~/views/Login/routes';
import homeRoutes from '~/views/Home/routes';

const routes = [
  ...loginRoutes,
  ...homeRoutes,
];

export default routes;
