
import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import UseContainerReund from "../../components/Body/UseContainer/useContainerReund";
import HeaderAppBare from "../../components/Headers/HeaderAppBare";
import Navigation from "../../components/LeftSideBares/Navigation";
import Separator from "../../components/Reusable/Separator/Separator";
import ErrorPage from "../ErrorPage";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    width: "100%",
  },
  item: {
    display: "flex",
    alignItems: "center",
  },

  title: {
    fontWeight: "700",
    margin: "0px 0px 15px 0",
    fontSize: 20,
    background: "#b1cd25 ",
    width: "99%",
    padding: "25px 0",
    paddingLeft: 15,
    color: "#fff",

    [theme.breakpoints.down("xs")]: {
      background: "#fff",
      color: "#000",
    },
  },
  separator: {
    marginTop: theme.spacing(4),
  },
  containerTable: {
    margin: 15,
  },
  CenterItemsContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    display: "felx",
    alignItems: "center",
    justifyContent: "center",
    padding:"10px 10px 10px 10px"
  },
}));
function PayinReund() {
  const classes = useStyles();

  return (
    <Paper className={classes.Container}>
      <Navigation />
      <HeaderAppBare />
      <Paper className={classes.CenterItemsContainer}>
      <Separator />

        <UseContainerReund />
      </Paper>
    </Paper>
  );
}

export default PayinReund;
