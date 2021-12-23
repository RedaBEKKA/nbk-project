/* eslint-disable */

/** @jsxImportSource theme-ui */
import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./StylesUseContainer";
import UseTitle from "../HeaderTilteBody/UseTitle";
import UseTable from "../../test/UseTable";
function UseContainer() {
  const classes = useStyles();
  //   const { id , status, idWallet ,idUser ,amount,Currency,paymentMethode, date} = props

  return (
    <Paper className={classes.Container}>
      <UseTitle title={"Gestion des paiements"} />
      <UseTable
        id={"Payin Id"}
        status={"PayinStatus"}
        idWallet={"Wallet Id"}
        idUser={"UserId"}
        amount={"Amount"}
        Currency={"Currency"}
        paymentMethode={"payment Methode"}
        date={"created Date"}
      />
    </Paper>
  );
}

export default UseContainer;
