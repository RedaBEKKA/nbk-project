/* eslint-disable */

/** @jsxImportSource theme-ui */
import { Paper } from "@material-ui/core";
import useStyles from "./StylesUseContainer";
import UseTitle from "../HeaderTilteBody/UseTitle";
import UseTableRefund from "../../test/UseTablePayoutRefund";
function UseContainerRefund() {
  const classes = useStyles();

  return (
    <Paper className={classes.Container}>
      <UseTitle title={"Gestion des remboursement"} />
      <UseTableRefund
        id={"Id"}
        CodeStatus={"Code Status"}
        PayoutId={"Payout Id"}
        requestAmount={"request Amount"}
        requestCurrency={"request Currency"}
        refundAmount={"refund Amount"}
        refundCurrency={"refund Currency"}
        refundDate={"refund Date "}
      />
    </Paper>
  );
}

export default UseContainerRefund;
