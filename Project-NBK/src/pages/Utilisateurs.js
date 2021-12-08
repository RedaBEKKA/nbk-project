/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import Navigation from "../components/LeftSideBares/Navigation";
import { useMediaQuery, useTheme, Button, Grid } from "@material-ui/core";
import HeaderAppBare from "../components/Headers/HeaderAppBare";
import MTable from "../components/test/table";
import { useColorMode } from "@theme-ui/color-modes";
import Visualiser from "../components/RightSideBares/UseVisualiser/Visualiser";
import useStyles from "./styles/UsersStyle";
import Separator from "../components/Reusable/Separator/Separator";
import { Add, KeyboardReturn, Settings } from "@material-ui/icons";
import FormCreateUsers from "../components/Body/FormCreateUsers/FormCreateUsers";
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
    <Grid
      className={classes.Container}
      sx={{ background: "primary", color: "inverstText" }}
    >
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <Separator />
        {!newUser &&<div className={classes.title}> Gestion des Utilisateurs</div>}
        {newUser &&<div className={classes.title}> Ajouter des Utilisateurs</div>}
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
          {newUser && <FormCreateUsers />}
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
          <Visualiser handelShowClose={handelShowClose} titre={'Visualiser Un Utilisateur'} />
          <div className={classes.boxButton}>
            <Button variant="contained" sx={{bg:'btnBackground' , color:'inverstText'}} className={classes.mrBtn}>Valider</Button>
            <Button variant="outlined" sx={{ color:'btnBackground'}} className={classes.mrBtn}>Annuler</Button>
          </div>
        </div>
      )}
    </Grid>
  );
};

export default Utilisateurs;
