/* eslint-disable */

/** @jsxImportSource theme-ui */
import { Paper } from "@material-ui/core";
import useStyles from "./StylesUseContainer";
import UseTitle from "../HeaderTilteBody/UseTitle";
import UseTablePayout from "../../test/UseTablePayout";
function UseContainerPayout() {
  const classes = useStyles();

  return (
    <Paper className={classes.Container}>
      <UseTitle title={"Gestion des paiements (Payout)"} />
      <UseTablePayout
        PayoutId={"Payout Id"} 
        payoutStatus={"Payout Status"}
        walletId={"Wallet Id"}
        userId={"UserId"}
        amount={"Amount"}
        currency={"Currency"}
        createdDate={"created Date"}
      />
    </Paper>
  );
}

export default UseContainerPayout;
