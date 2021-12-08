/* eslint-disable */ 

import React, { useState } from "react";
// import Navigation from "./components/LeftSideBares/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import routes from "./components/LeftSideBares/routes";
import Dashboard from "../src/pages/Dashboard"
import Beneficiaires from "../src/pages/Beneficiaires"
import Cartes from "../src/pages/Cartes"
import Documents from "../src/pages/Documents"
import Transactions from "../src/pages/Transactions"
import opérations from "../src/pages/opérations"
import Utilisateurs from "../src/pages/Utilisateurs";
import portefeuille from "../src/pages/portefeuille";
import Transferts from "./pages/Transferts";


const App = () => {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Beneficiaires" component={Beneficiaires} />
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
  );
};

export default App;
