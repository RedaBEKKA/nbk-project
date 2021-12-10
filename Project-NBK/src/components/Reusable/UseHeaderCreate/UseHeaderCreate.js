import { Paper } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesUseHeaderCreate";
import CloseIcon from "@material-ui/icons/Close";

function UseHeaderCreate(props) {
  const classes = useStyles();
  const {titre,handelShowClose} = props
  return (
    <Paper className={classes.header}>
      <div className={classes.left}>
        <CloseIcon className={classes.iconHeader} onClick={handelShowClose} />
        <text className={classes.textTitle}>{titre}</text>
      </div>
    </Paper>
  );
}

export default UseHeaderCreate;
