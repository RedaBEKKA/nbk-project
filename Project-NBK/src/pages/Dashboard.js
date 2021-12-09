/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import {  Paper } from "@material-ui/core";
// import { Home } from "@material-ui/icons";
import MaterialTable from "material-table";
import Navigation from "../components/LeftSideBares/Navigation";
import ErrorPage from "./ErrorPage";

import useStyles from './styles/stylesDashboard'

const Dashboard = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.Container}>
      <div className="App">
        <Navigation />
      </div>
        <ErrorPage />
    </Paper>
  );
};

export default Dashboard;
