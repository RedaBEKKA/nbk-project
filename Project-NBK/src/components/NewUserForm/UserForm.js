/* eslint-disable */

/** @jsxImportSource theme-ui */

import React from "react";
import useStyles from "./styleUserForm";
import CloseIcon from "@material-ui/icons/Close";
import { AccountCircle, TextFields } from "@material-ui/icons";
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import {
  Card,
  CardContent,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/system";
import { Text } from "@theme-ui/components";
import Stack from '@mui/material/Stack';
function UserForm({ handelShowClose }) {
  const classes = useStyles();

  return (
    <div className={classes.Container}>
      <Paper className={classes.header}>
        <div className={classes.left}>
          <CloseIcon className={classes.icon} onClick={handelShowClose} />
        </div>
        <div className={classes.right}>
          Ajouter un Utilisateur
          <AccountCircle className={classes.icon} />
        </div>
      </Paper>
      <Paper className={classes.ContainerForm}>
        <div className={classes.containerInputs}>
          <TextField
            className={classes.TextInput}
            id="outlined-name"
            label="nom"
            value={name}
            variant="outlined"
          />
          <TextField
            className={classes.TextInput}
            id="outlined-name"
            label="Prénom"
            value={name}
            variant="outlined"
          />
        </div>
      </Paper>
  
    </div>
  );
}

export default UserForm;
