/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import Navigation from '../components/LeftSideBares/Navigation';
import { useMediaQuery, useTheme, Button, Grid, Paper, Tooltip } from '@material-ui/core';
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

import HeaderAppBare from '../components/Headers/HeaderAppBare';
import MTable from '../components/test/table';
import { useColorMode } from '@theme-ui/color-modes';
import Visualiser from '../components/RightSideBares/UseVisualiser/Visualiser';
import useStyles from './styles/UsersStyle';
// import { ColorMode, ThemeProvider, useColorMode } from 'theme-ui'
import {
  Add,
  ArrowDownward,
  CheckCircle,
  Close,
  KeyboardReturn,
  Settings,
} from '@material-ui/icons';
import FormCreateUsers from '../components/Body/FormCreateUsers/FormCreateUsers';
import Separator from '../components/Reusable/Separator/Separator';
import UseTitle from '../components/Body/HeaderTilteBody/UseTitle';
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
    <Grid className={classes.Container} sx={{ background: 'primary', color: 'inverstText' }}>
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <Separator />
        {!newUser && (
          <UseTitle
            title={'Gestion des Utilisateurs'}
            newUser={newUser}
            CreateUserSHowClose={CreateUserSHowClose}
            CreateUserSHowOpen={CreateUserSHowOpen}
            showVisible={showVisible}
            changeVisibble={changeVisibble}
          />
        )}
        {newUser && (
          <UseTitle
            title={'Ajouter des Utilisateurs'}
            newUser={newUser}
            CreateUserSHowClose={CreateUserSHowClose}
            CreateUserSHowOpen={CreateUserSHowOpen}
          />
        )}
        {!matches && <HeaderAppBare title={'Gestion des Utilisateurs'} />}
        <div className={classes.buttonContainer}>
          {!newUser ? (
            <div>
              <Tooltip title="exporter">
                <Button
                  className={classes.btn}
                  variant="contained"
                  startIcon={<ArrowDownward />}
                  sx={{ bg: 'btnBackground', color: 'inverstText' }}
                >
                  exporter
                </Button>
              </Tooltip>
        {!matches && <HeaderAppBare title={"Gestion des Utilisateurs"} />}

              <Tooltip title="Ajouter">
                <Button
                  variant="contained"
                  sx={{ bg: 'btnBackground', color: 'inverstText' }}
                  startIcon={<Add />}
                  onClick={CreateUserSHowOpen}
                >
                  Ajouter
                </Button>
              </Tooltip>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={classes.containerTable}>
          {!newUser && <MTable handelShow={handelShow} showVisible={showVisible} />}
          {newUser && <FormCreateUsers />}
          <div className={classes.Absoluter}>
            <Settings
              sx={{ color: 'backgroundB', fontSize: 46 }}
              onClick={() => {
                setColorMode(colorMode === 'light' ? 'dark' : 'light');
                console.log(`colorMode`, colorMode);
              }}
            />
          </div>
        </div>
      </div>
      {/* Visualer  */}
      {show && (
        <div className={classes.infoScreen}>
          <Visualiser handelShowClose={handelShowClose} titre={'Visualiser Un Utilisateur'} />
        </div>
      )}
      {/* Visualer end */}
    </Grid>
  );
};

export default Utilisateurs;
