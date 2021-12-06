/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { makeStyles, useMediaQuery, useTheme, Button } from "@material-ui/core";
import HeaderAppBare from "../components/Headers/HeaderAppBare";
import MTable from "../components/test/table";
import VisualiserPortefeuille from "../components/VisualiserPortefeuille/VisualiserPortefeuille";

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
    background: "linear-gradient(to right,  #a8e063,#56ab2f)",
    width: "100%",
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
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 30px",
  },
  btn: {
    padding: "0px 10px",
  },
  infoScreen: {
    height: "100vh",
    width: "30%",
    position: "fixed",
    right: 0,
    background: "#fff",
    marginTop: 65,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    border: "1px solid #ccc",
  },
}));

const Portefeuille = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [show, setShow] = useState(false);

  const handelShowClose = () => {
    setShow(false);
  };
  const handelShow = () => {
    setShow(true);
  };
  return (
    <div className={classes.Container}>
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <div className={classes.separator}></div>

        <div className={classes.title}> Gestion des Portefeuille</div>
        {!matches && <HeaderAppBare title={"Gestion des Portefeuille"} />}
        <div className={classes.buttonContainer}>
          <Button
            className={classes.btn}
            variant="contained"
            sx={{ bg: "btnBackground", color: "inverstText", marginRight: 15 }}
          >
            exporter
          </Button>
          <Button
            variant="contained"
            sx={{ bg: "btnBackground", color: "inverstText" }}
          >
            Ajouter
          </Button>
        </div>
        <div className={classes.containerTable}>
          {/* <MaterialTable columns={columns} data={tableData} /> */}
          <MTable handelShow={handelShow} />
        </div>
      </div>
      {show && (
        <div className={classes.infoScreen}>
          <VisualiserPortefeuille handelShowClose={handelShowClose} />
        </div>
      )}
    </div>
  );
};

export default Portefeuille;
