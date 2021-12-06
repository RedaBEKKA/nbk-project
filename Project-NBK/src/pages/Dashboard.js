/* eslint-disable */ 


import React, { useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
// import { Home } from "@material-ui/icons";
import MaterialTable from "material-table";
import Navigation from "../components/Navigation";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  diver: {
    width: "140vh",
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
  },
}));

const Dashboard = () => {
 
  return (
    <div >
      <div className="App">
        <Navigation />
      </div>
      <div >
        dashboard
      </div>
    </div>
  );
};

export default Dashboard;
