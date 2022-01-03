/* eslint-disable */

import Dashboard from '../src/pages/Dashboard';
import Beneficiaires from '../src/pages/Beneficiaires';
import Cartes from 'pages/Cartes';
import Documents from '../src/pages/Documents';
import opérations from '../src/pages/opérations';
import portefeuille from '../src/pages/portefeuille/index';
import Transferts from './pages/Transferts';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useStyles } from './styles';
import { ThemeProvider } from 'theme-ui';
import Utilisateurs from '../src/pages/Users/index';
import { useDispatch, useSelector } from 'react-redux';
import login from './pages/auth/Login';
import ResetPassword from './pages/auth/ResetPassword';
import ConfirmReset from './pages/auth/ConfirmReset';
import theme from '../src/theme/theme';
import Payouts from './pages/WallettPages/Payouts';
import Payins from './pages/WallettPages/Payins';
import PayinReund from './pages/WallettPages/PayinReund';
import PayinRefund from './pages/WallettPages/PayoutRefund';
import Transaction from './pages/WallettPages/Transaction';

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
            {/* <GuardedRoute exact auth={auth} path="/wallet" component={Wallet} /> */}
            <GuardedRoute exact auth={auth} path="/Beneficiaires" component={Beneficiaires} />
            <GuardedRoute exact auth={auth} path="/Cartes" component={Cartes} />
            <GuardedRoute exact auth={auth} path="/Documents" component={Documents} />
            <GuardedRoute exact auth={auth} path="/opérations" component={opérations} />
            <GuardedRoute exact auth={auth} path="/Utilisateurs" component={Utilisateurs} />
            <GuardedRoute exact auth={auth} path="/portefeuille" component={portefeuille} />
            <GuardedRoute exact auth={auth} path="/Transferts" component={Transferts} />
            <GuardedRoute exact auth={auth} path="/PayinReund" component={PayinReund} />
            <GuardedRoute exact auth={auth} path="/Payins" component={Payins} />
            <GuardedRoute exact auth={auth} path="/PayinRefund" component={PayinRefund} />
            <GuardedRoute exact auth={auth} path="/Payouts" component={Payouts} />
            <GuardedRoute exact auth={auth} path="/Transaction" component={Transaction} />
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
