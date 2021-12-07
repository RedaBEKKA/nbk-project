/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useMediaQuery, useTheme, Button } from "@material-ui/core";
import HeaderAppBare from "../components/Headers/HeaderAppBare";
import MTable from "../components/test/table";
import { useColorMode } from "@theme-ui/color-modes";
import Visualiser from "../components/Visualiser/Visualiser";
import UserForm from "../components/WalletForm/WalletForm";
import useStyles from "./styles/UsersStyle";
import Separator from "../components/Separator/Separator";
import { Add, KeyboardReturn, Settings } from "@material-ui/icons";
// import  from "@material-ui/icons/DarkMode";
import CreateNewUser from "./CreateNewUser";
const Utilisateurs = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  // functions
  const handelShow = () => {
    setShow(true);
  };
  const handelShowClose = () => {
    setShow(false);
  };
  const CreateUserSHowOpen = () => {
    setNewUser(true);
  };
  const CreateUserSHowClose = () => {
    setNewUser(false);
  };

  return (
    <div
      className={classes.Container}
      sx={{ background: "primary", color: "inverstText" }}
    >
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <Separator />
        <div className={classes.title}> Gestion des Utilisateurs</div>
        {!matches && <HeaderAppBare title={"Gestion des Utilisateurs"} />}
        <div className={classes.buttonContainer}>
          {newUser ? (
            <KeyboardReturn
              sx={{ color: "btnBackground" }}
              onClick={CreateUserSHowClose}
            />
          ) : (
            <div></div>
          )}
          {!newUser ? (
            <div>
              <Button
                className={classes.btn}
                variant="contained"
                startIcon={<Add />}
                sx={{ bg: "btnBackground", color: "inverstText" }}
              >
                exporter
              </Button>
              <Button
                variant="contained"
                sx={{ bg: "btnBackground", color: "inverstText" }}
                startIcon={<Add />}
                onClick={CreateUserSHowOpen}
              >
                Ajouter
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={classes.containerTable}>
          {!newUser && <MTable handelShow={handelShow} />}
          {newUser && <CreateNewUser />}
          <div className={classes.Absoluter}>
            <Settings
              sx={{ color: "text", fontSize: 46 }}
              onClick={() => {
                setColorMode(colorMode === "light" ? "dark" : "light");
                console.log(`colorMode`, colorMode);
              }}
            />
          </div>
        </div>
      </div>
      {show && (
        <div className={classes.infoScreen}>
          <Visualiser handelShowClose={handelShowClose} />
        </div>
      )}
    </div>
  );
};

export default Utilisateurs;
