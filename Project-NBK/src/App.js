/* eslint-disable */

import Dashboard from '../src/pages/Dashboard';
import Beneficiaires from '../src/pages/Beneficiaires';
import Cartes from '../src/pages/Cartes';
import Documents from '../src/pages/Documents';
import Transactions from '../src/pages/Transactions';
import opérations from '../src/pages/opérations';
import Utilisateurs from '../src/pages/Utilisateurs';
import portefeuille from '../src/pages/portefeuille';
import Transferts from './pages/Transferts';
import Wallet from 'pages/wallet';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import { useStyles } from './styles';
import { ColorMode, ThemeProvider, useColorMode } from 'theme-ui';
// import { createTheme, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import { useDispatch, useSelector } from 'react-redux';
import login from './pages/auth/Login';
import ResetPassword from './pages/auth/ResetPassword';
import ConfirmReset from './pages/auth/ConfirmReset';
import theme from '../src/theme/theme';

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (auth.isAuth ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);
const Unprotected = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!auth.isAuth ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

// const theme = createTheme({
//   palette: {
//     primary: green,
//   },
// });

const App = () => {
  const classes = useStyles();
  const [state, setstate] = useState(true);
  const auth = useSelector((state) => state.auth);
  //reset hub
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth?.accessToken) dispatch({ type: 'INITIAL_LOAD_REQUEST', payload: auth?.accessToken });
    dispatch({ type: 'GET_APP_TOKEN_REQUEST' });
    dispatch({ type: 'RESET_AUTH_STATE' });
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appRoot}>
        <Router>
          <Switch>
            <GuardedRoute exact auth={auth} path="/" component={Dashboard} />
            <GuardedRoute exact auth={auth} path="/wallet" component={Wallet} />
            <GuardedRoute exact auth={auth} path="/Beneficiaires" component={Beneficiaires} />
            <GuardedRoute exact auth={auth} path="/Cartes" component={Cartes} />
            <GuardedRoute exact auth={auth} path="/Documents" component={Documents} />
            <GuardedRoute exact auth={auth} path="/Transactions" component={Transactions} />
            <GuardedRoute exact auth={auth} path="/opérations" component={opérations} />
            <GuardedRoute exact auth={auth} path="/Utilisateurs" component={Utilisateurs} />
            <GuardedRoute exact auth={auth} path="/portefeuille" component={portefeuille} />
            <GuardedRoute exact auth={auth} path="/Transferts" component={Transferts} />
            <Unprotected auth={auth} exact path="/Login" component={login} />
            <Unprotected auth={auth} exact path="/resetPassword" component={ResetPassword} />
            <Unprotected auth={auth} exact path="/confirmReset" component={ConfirmReset} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
