/* eslint-disable */

/** @jsxImportSource theme-ui */

import React from "react";
import useStyles from "./stylesVisualser";
import CloseIcon from "@material-ui/icons/Close";
import {
  ArrowDownward,
  Brush,
  Chat,
  Delete,
  Flag,
  Print,
} from "@material-ui/icons";
import { Card, CardContent, Paper, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { Text } from "@theme-ui/components";

function Visualiser({ handelShowClose }) {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <div className={classes.header}>
        <div className={classes.left}>
          <CloseIcon className={classes.icon} onClick={handelShowClose} />
        </div>
        <div className={classes.right}>
          <Flag className={classes.icon} />
          <Chat className={classes.icon} />
          <Print className={classes.icon} />
          <ArrowDownward className={classes.icon} />
          <Brush className={classes.icon} />
          <Delete className={classes.icon} />
        </div>
      </div>
      {/* <Paper className={classes.headerInfo}>
        <div>Apreçue</div>
        <div>Info</div>
        <div>BLs associés</div>
        <div>Facture</div>
      </Paper> */}
      <div className={classes.bodyInfo}>
        <Paper className={classes.Card}>
          <Box className={classes.Content}>
            <Text className={classes.title}>Nom :</Text>
            <Text className={classes.sectitle}>Amariche</Text>
          </Box>

          <Box className={classes.Content}>
            <Text className={classes.title}>Prénom :</Text>
            <Text className={classes.sectitle}>Amariche</Text>
          </Box>
        </Paper>

        <Paper className={classes.CardS}>
          <Box className={classes.ContentS}>
            <Text className={classes.titleS}>date de naissance :</Text>
            <Text className={classes.sectitleS}>08 - 07 - 1996</Text>
          </Box>

          <Box className={classes.ContentS}>
            <Text className={classes.titleS}>Lieu de naissance :</Text>
            <Text className={classes.sectitleS}>Alger </Text>
          </Box>
        </Paper>

        <Paper className={classes.CardS}>
          <Box className={classes.ContentS}>
            <Text className={classes.titleS}>Pays :</Text>
            <Text className={classes.sectitleS}>Algerie</Text>
          </Box>

          <Box className={classes.ContentS}>
            <Text className={classes.titleS}>Ville :</Text>
            <Text className={classes.sectitleS}>Khemis miliana </Text>
          </Box>
          <Box className={classes.ContentS}>
            <Text className={classes.titleS}>Code Zip  :</Text>
            <Text className={classes.sectitleS}>44013 </Text>
          </Box>
        </Paper>

        <Paper className={classes.CardS}>
          <Box className={classes.ContentS}>
            <Text className={classes.titleS}>Téléphone Portable :</Text>
            <Text className={classes.sectitleS}>0773 82 06 33</Text>
          </Box>

          <Box className={classes.ContentS}>
            <Text className={classes.titleS}>Téléphone Fix :</Text>
            <Text className={classes.sectitleS}>0221 40 25 63 </Text>
          </Box>
        </Paper>
      </div>
    </div>
  );
}

export default Visualiser;
