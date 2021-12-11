import { Paper } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesHederInfo";
import CloseIcon from "@material-ui/icons/Close";
import {
  ArrowDownward,
  Brush,
  Chat,
  Delete,
  Flag,
  Print,
} from "@material-ui/icons";
import CheckBoxStatus from "../CheckBOXStatus/CheckBoxStatus";

function UseHeaderInfo(props) {
  const classes = useStyles();
  const {show,titre,handelShowClose,showCheck} = props
  return (
    <Paper className={classes.header}>
      <div className={classes.left}>
        <CloseIcon className={classes.iconHeader} onClick={handelShowClose} />
        <text className={classes.textTitle}>{titre}</text>
      </div>
      <div className={classes.right}>
        {showCheck && <CheckBoxStatus />}

        <Flag className={classes.icon} onClick={show} />

        <Chat className={classes.icon} />
        <Print className={classes.icon} />
        <ArrowDownward className={classes.icon} />
        <Brush className={classes.icon} />
        <Delete className={classes.icon} />
      </div>
    </Paper>
  );
}

export default UseHeaderInfo;
