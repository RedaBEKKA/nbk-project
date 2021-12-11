import Login from 'pages/auth/Login';
import ResetPassword from 'pages/auth/ResetPassword';
const routes = [
  {
    label: 'Login',
    path: '/login',
    component: Login,
  },
  {
    label: 'ResetPassword',
    path: '/resetPassword',
    component: ResetPassword,
  },
];

export default routes;
