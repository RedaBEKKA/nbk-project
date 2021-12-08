/* eslint-disable */

/** @jsxImportSource theme-ui */

import React, { useState } from "react";
import useStyles from "./styleUserForm";
import CloseIcon from "@material-ui/icons/Close";
import { AccountCircle, TextFields } from "@material-ui/icons";
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { ButtonGroup, Grid, Paper, TextField, Button } from "@material-ui/core";
import { useForm, Form } from "../Reusable/RuseForm/UseForm";
import Controls from "../Reusable/RuseForm/Controls/Controls";
import initialFValues from "../../Services/walletService";
import { WalletTypeId } from "../../Services/walletTypeId";
import { AccurencyWallet } from "../../Services/AccurencyWallet";
// import { Button } from "@mui/material";

function WalletForm({ handelClose }) {
  const classes = useStyles();
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true);

  return (
    <Grid className={classes.root}>
      <Paper className={classes.header}>
        <div className={classes.left}>
          <CloseIcon className={classes.icon} onClick={handelClose} />
        </div>
        <div className={classes.right}>Ajouter un Portefeuille</div>
      </Paper>
      <Form>
        <Grid className={classes.ContainerForm} paper>
          <Grid container>
            <Grid xs={10} item>
              <Controls.Input
                id="classe portefeuille"
                label="Classe portefeuille"
                value={values.walletTag}
                onChange={handleInputChange}
                name="walletTag"
              />
            </Grid>
            <Grid xs={6} item>
              <Controls.Select
                id="Type de portefeuille"
                label="Type de portefeuille"
                value={values.walletTypeId}
                onChange={handleInputChange}
                name="walletTypeId"
                options={WalletTypeId()}
              />
            </Grid>

            <Grid xs={6} item>
              <Controls.Select
                id="devise"
                label="Devise"
                value={values.currency}
                onChange={handleInputChange}
                name="devise"
                variant="outlined"
                options={AccurencyWallet()}

              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6} item>
              <Controls.Input
                id="l'événement"
                label="Nom de l'événement"
                value={values.eventName}
                onChange={handleInputChange}
                name="eventName"
              />
            </Grid>

            <Grid xs={6} item>
              <Controls.Input
                id="surnoml'événement"
                label="nom de l'événement"
                value={values.eventAlias}
                onChange={handleInputChange}
                name="eventAlias"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6} lg={12} item>
              <Controls.DatePicker
                id="date"
                label="date de l'événement"
                value={values.eventDate}
                onChange={handleInputChange}
                name="eventDate"
              />
            </Grid>

            <Grid xs={6} lg={12} item>
              <Controls.Input
                id="Message"
                label="Message"
                value={values.eventMessage}
                onChange={handleInputChange}
                name="eventMessage"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={6} lg={6} item>
              <Controls.DatePicker
                id="paiement"
                label="Date début de paiement"
                value={values.eventPayinStartDate}
                onChange={handleInputChange}
                name="eventPayinStartDate"
              />
            </Grid>

            <Grid xs={6} lg={6} item>
              <Controls.DatePicker
                id="paiement"
                label="Date de fin de paiement"
                value={values.eventPayinEndDate}
                onChange={handleInputChange}
                name="eventPayinEndDate"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
      </Form>
      <Grid
        container
        sx={{ justifyContent: "flex-end", marginTop: 35 ,marginRight:25}}
        className={classes.boxPaper}
      >
        <Button variant="outlined" >Annuler</Button>

        <Button variant="contained" sx={{bg:'btnBackground'}}>Confirmer</Button>
      </Grid>
    </Grid>
  );
}

export default WalletForm;
