/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import {
  ButtonGroup,
  makeStyles,
  Switch,
  useMediaQuery,
  useTheme,
  Button,
} from "@material-ui/core";
import HeaderAppBare from "../components/Headers/HeaderAppBare";
import MTable from "../components/test/table";
import { useColorMode } from "@theme-ui/color-modes";
import Visualiser from "../components/Visualiser/Visualiser";
import UserForm from "../components/NewUserForm/UserForm";
const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
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
    background: "linear-gradient(to right, #56ab2f, #a8e063)",
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
    margin: "0px 10px",
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

const Utilisateurs = () => {
  const [showFormUser, setShowFormUser] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const handelShow = () =>{
    setShow(true)
  }
  const handelShowClose = () =>{
    setShow(false)
  }
  const columns = [
    { title: "Nom", field: "name" },
    { title: "Email", field: "email" },
    { title: "N° téléphone", field: "phone" },
    { title: "Age", field: "age" },
    { title: "Ville", field: "city" },
  ];
  return (
    <div
      className={classes.Container}
      sx={{ background: "primary", color: "inverstText" }}
    >
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <div className={classes.separator}></div>
        <div className={classes.title}> Gestion des Utilisateurs</div>
        {!matches && <HeaderAppBare title={"Gestion des Utilisateurs"} />}
        <div className={classes.buttonContainer}>
          <Button
            className={classes.btn}
            variant="contained"
            sx={{ bg: "btnBackground", color: "inverstText" }}
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
          <MTable handelShow={handelShow}/>
          <Button
            variant="contained"
            sx={{ bg: "primary", color: "text" }}
            onClick={() => {
              setColorMode(colorMode === "light" ? "dark" : "light");
              console.log(`colorMode`, colorMode);
            }}
          >
            activer
          </Button>
        </div>
      </div>
      {show && (
        <div className={classes.infoScreen}>
          <Visualiser handelShowClose={handelShowClose}/>
        </div>
      )}
       {showFormUser && (
        <div className={classes.infoScreen}>
          <UserForm handelShowClose={handelShowClose}/>
        </div>
      )}
    </div>
  );
};

export default Utilisateurs;
