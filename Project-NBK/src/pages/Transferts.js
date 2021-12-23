
/* eslint-disable */

/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core";
import React from "react";
import Navigation from "../components/LeftSideBares/Navigation";
import ErrorPage from "./ErrorPage";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    background: "#eee",
    width: "100%",
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  diver: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(0),
    width: "100%",
  },

  title: {
    fontWeight: "700",
    margin: "0px 0px 15px 0",
    fontSize: 20,
    background: "#b1cd25 ",
    width: "99%",
    padding: "25px 0",
    paddingLeft: 15,
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      background: "#fff",
      color: "#000",
    },
  },
  separator: {
    marginTop: theme.spacing(4),
  },
  containerTable: {
    margin: 15,
  },
}));
function Transferts() {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
    <div className="App">
      <Navigation />
    </div>

    <div className={classes.diver}>
      <div className={classes.separator}></div>

      <ErrorPage />
    
    </div>
  </div>
  );
}

export default Transferts;

