import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { useStyles } from './styles';
import Dashboard from '../src/pages/Dashboard';
import Beneficiaires from '../src/pages/Beneficiaires';
import Cartes from '../src/pages/Cartes';
import Documents from '../src/pages/Documents';
import Transactions from '../src/pages/Transactions';
import opérations from '../src/pages/opérations';
import Utilisateurs from '../src/pages/Utilisateurs';
import portefeuille from '../src/pages/portefeuille';
import Transferts from './pages/Transferts';
import Login from './pages/auth/Login';
import ResetPassword from './pages/auth/ResetPassword';
import ConfirmReset from './pages/auth/ConfirmReset';

import { createTheme, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import { useDispatch } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: green,
  },
});

const App = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'GET_APP_TOKEN' });
  const classes = useStyles();
  const [state, setstate] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appRoot}>
        {/* <Router>
        <Navigation />
        <div>
          <div className={classes.appBarSpacer}></div>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route exact key={index} path={route.path}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </div>
      </Router> */}

        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Beneficiaires" component={Beneficiaires} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route exact path="/confirmReset" component={ConfirmReset} />
            <Route exact path="/Cartes" component={Cartes} />
            <Route exact path="/Documents" component={Documents} />
            <Route exact path="/Transactions" component={Transactions} />
            <Route exact path="/opérations" component={opérations} />
            <Route exact path="/Utilisateurs" component={Utilisateurs} />
            <Route exact path="/portefeuille" component={portefeuille} />
            <Route exact path="/Transferts" component={Transferts} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
