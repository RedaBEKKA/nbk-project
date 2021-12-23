/* eslint-disable */

/** @jsxImportSource theme-ui */

import { Paper, Tooltip, Button } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import useStyles from "./styles/StyleErrorPage";
import img from "../assets/error.png";
function ErrorPage() {
  const classes = useStyles();
  return (
    <Paper className={classes.Container}>
      <div className={classes.Num}>
        <text className={classes.numt}>4</text>
        <text className={classes.midelNum}>0</text>
        <text className={classes.numt}>4</text>
      </div>
      <div className={classes.Num}>
        <text className={classes.Text}>Désolé, page introuvable</text>
      </div>
      <Tooltip title="retour au tableau de bord" >
        <Button
          variant="contained"
          sx={{ bg: "btnBackground", color: "inverstText",marginTop:'15px' }}
          className={classes.mrBtn}
          startIcon={<CheckCircle />}
          size="large"
        >
          retour au tableau de bord
        </Button>
      </Tooltip>
      <img src={img} />
    </Paper>
  );
}

export default ErrorPage;
