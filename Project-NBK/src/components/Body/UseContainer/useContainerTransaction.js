/* eslint-disable */

/** @jsxImportSource theme-ui */
import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./StylesUseContainer";
import UseTitle from "../HeaderTilteBody/UseTitle";
import UseTableTransaction from "../../test/UseTablePayoutTransaction";
function UseContainerTransaction() {
  const classes = useStyles();
  return (
    <Paper className={classes.Container}>
      <UseTitle title={"Gestion des Transactions:"} />
      <UseTableTransaction
        TransactionId={"Transaction Id"}
        walletDebitId={"wallet Debit Id"}
        walletCreditId={"wallet Credit Id"}
        transactionType={"transaction Type"}
        executionDate={"execution Date"}
        amount={"amount"}
        valueDate={"value Date"}
        createdDate={"created Date"}
      />
    </Paper>
  );
}

export default UseContainerTransaction;
