/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { makeStyles, useMediaQuery, useTheme, Button } from "@material-ui/core";
import HeaderAppBare from "../components/Headers/HeaderAppBare";
import MTable from "../components/test/table";
import VisualiserPortefeuille from "../components/VisualiserPortefeuille/VisualiserPortefeuille";
import useStyles from "./styles/PortefeuilleStyle";
import WalletForm from "../components/WalletForm/WalletForm";
const Portefeuille = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [show, setShow] = useState(false);
  const [showFormUser, setShowFormUser] = useState(false);

  const handelShowClose = () => {
    setShow(false);
  };
  const handelShow = () => {
    setShow(true);
  };

  const handelClose = () => {
    setShowFormUser(false);
  };
  const handelOpen = () => {
    setShowFormUser(true);
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
            onClick={handelOpen}
          >
            Ajouter
          </Button>
        </div>
        <div className={classes.containerTable}>
          <MTable handelShow={handelShow} />
        </div>
      </div>
      {show && (
        <div className={classes.infoScreen}>
          <VisualiserPortefeuille handelShowClose={handelShowClose} />
        </div>
      )}

      {showFormUser && (
        <div className={classes.infoScreen}>
          <WalletForm handelClose={handelClose} />
        </div>
      )}
    </div>
  );
};

export default Portefeuille;
