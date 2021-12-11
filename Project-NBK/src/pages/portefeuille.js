/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import Navigation from "../components/LeftSideBares/Navigation";
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Button,
  Tooltip,
} from "@material-ui/core";
import HeaderAppBare from "../components/Headers/HeaderAppBare";
import MTable from "../components/test/table";
import Visualiser from "../components/RightSideBares/UseVisualiser/Visualiser";
import useStyles from "./styles/PortefeuilleStyle";
import WalletForm from "../components/Reusable/WalletForm/WalletForm";
import UseTitle from "../components/Body/HeaderTilteBody/UseTitle";
import { Add, ArrowDown, ArrowDownward, CheckCircle, Close } from "@material-ui/icons";
// import { ArrowCircleDown, FileDownload } from "@mui/icons-material";
const Portefeuille = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [show, setShow] = useState(false);
  const [showFormUser, setShowFormUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const handelShowClose = () => {
    setShow(false);
  };
  const handelShow = () => {
    setShow(true);
  };

  const handelClose = () => {
    setShowFormUser(false);
    setNewUser(false);
  };
  const handelOpen = () => {
    setShowFormUser(true);
    setNewUser(true);
  };
  return (
    <div className={classes.Container}>
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <div className={classes.separator}></div>
        {!newUser && <UseTitle title={"Gestion des Portefeuille"} />}
        {newUser && (
          <UseTitle
            title={"Ajouter des Portefeuille"}
            newUser={newUser}
            CreateUserSHowClose={handelClose}
          />
        )}

        {/* <div className={classes.title}> </div> */}
        {!matches && <HeaderAppBare title={"Gestion des Portefeuille"} />}

        <div className={classes.buttonContainer}>
          <Tooltip title="exporter">
            <Button
              className={classes.btn}
              variant="contained"
              sx={{
                bg: "btnBackground",
                color: "inverstText",
                marginRight: 15,
              }}
              startIcon={<ArrowDownward />}
            >
              exporter
            </Button>
          </Tooltip>

          <Tooltip title="Ajouter">
            <Button
              variant="contained"
              sx={{ bg: "btnBackground", color: "inverstText" }}
              onClick={handelOpen}
              startIcon={<Add />}
            >
              Ajouter
            </Button>
          </Tooltip>
        </div>
        <div className={classes.containerTable}>
          <MTable handelShow={handelShow} />
        </div>
      </div>
      {show && (
        <div className={classes.infoScreen}>
          <Visualiser
            handelShowClose={handelShowClose}
            titre={"Visualiser Un Portefeuille"}
          />
          {/* <div className={classes.boxButton}>
            <Tooltip title="Valider">
              <Button
                variant="contained"
                sx={{ bg: "btnBackground", color: "inverstText" }}
                className={classes.mrBtn}
                startIcon={<CheckCircle />}

              >
                Valider
              </Button>
            </Tooltip>
            <Tooltip title="Annuler">
              <Button
                variant="outlined"
                sx={{ color: "btnBackground" }}
                className={classes.mrBtn}
                startIcon={<Close />}

              >
                Annuler
              </Button>
            </Tooltip>
          </div> */}
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
