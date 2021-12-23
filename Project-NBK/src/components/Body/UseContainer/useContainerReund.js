/* eslint-disable */

/** @jsxImportSource theme-ui */
import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./StylesUseContainer";
import UseTitle from "../HeaderTilteBody/UseTitle";
import UseTableReund from "../../test/UseTablePayinReund";
function UseContainerReund() {
  const classes = useStyles();
  //   const { id , status, idWallet ,idUser ,amount,Currency,paymentMethode, date} = props

  return (
    <Paper className={classes.Container}>
      <UseTitle title={"Gestion des Paiement en retour"} />
      <UseTableReund
        payinRefunId={"payin Refund Id"}
        payinRefundstatus={"payin Refund Status"}
        idWallet={"Wallet Id"}
        PayinId={"UserId"}
        amount={"Payin Id "}
        Currency={"Amount"}
        modifiedDate={"modified Date"}
        date={"created Date"}
      />
    </Paper>
  );
}

export default UseContainerReund;
