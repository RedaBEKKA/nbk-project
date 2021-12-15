/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import Navigation from "../components/LeftSideBares/Navigation";
import {
  useMediaQuery,
  useTheme,
  Button,
  Grid,
  Paper,
  Tooltip,
} from "@material-ui/core";

import HeaderAppBare from "../components/Headers/HeaderAppBare";
import MTable from "../components/test/table";
import { useColorMode } from "@theme-ui/color-modes";
import Visualiser from "../components/RightSideBares/UseVisualiser/Visualiser";
import useStyles from "./styles/UsersStyle";
import Separator from "../components/Reusable/Separator/Separator";
// import { ColorMode, ThemeProvider, useColorMode } from 'theme-ui'
import {
  Add,
  ArrowDownward,
  CheckCircle,
  Close,
  KeyboardReturn,
  Settings,
} from "@material-ui/icons";
import FormCreateUsers from "../components/Body/FormCreateUsers/FormCreateUsers";
import UseTitle from "../components/Body/HeaderTilteBody/UseTitle";
import { useDispatch, useSelector } from "react-redux";

const Utilisateurs = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [showVisible, setshowVisible] = useState(false);
  // console.log(`test`,users)

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
  const changeVisibble = () => {
    setshowVisible(!showVisible);
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
        {!newUser && (
          <UseTitle
            title={"Gestion des Utilisateurs"}
            newUser={newUser}
            CreateUserSHowClose={CreateUserSHowClose}
            CreateUserSHowOpen={CreateUserSHowOpen}
            showVisible={showVisible}
            changeVisibble={changeVisibble}
          />
        )}
        {newUser && (
          <UseTitle
            title={"Ajouter des Utilisateurs"}
            newUser={newUser}
            CreateUserSHowClose={CreateUserSHowClose}
            CreateUserSHowOpen={CreateUserSHowOpen}
          />
        )}
        {!matches && <HeaderAppBare title={"Gestion des Utilisateurs"} />}

        <div className={classes.containerTable}>
          {!newUser && <MTable handelShow={handelShow} showVisible={showVisible} />}
          {newUser && <FormCreateUsers />}
          <div className={classes.Absoluter}>
            <Settings
              sx={{ color: "backgroundB", fontSize: 46 }}
              onClick={() => {
                setColorMode(colorMode === "light" ? "dark" : "light");
              }}
            />
          </div>
        </div>
      </div>
      {/* Visualer  */}
      {show && (
        <div className={classes.infoScreen}>
          <Visualiser
            handelShowClose={handelShowClose}
            titre={"Visualiser Un Utilisateur"}
          />
        </div>
      )}
      {/* Visualer end */}
    </Grid>
  );
};

export default Utilisateurs;
