/* eslint-disable */

/** @jsxImportSource theme-ui */
import { Paper } from "@material-ui/core";
import { KeyboardReturn } from "@material-ui/icons";
import React from "react";
import useStyles from "./styleHeaderTitle";

function UseTitle(props) {
    const {title,newUser ,CreateUserSHowClose } = props
   const classes = useStyles();
  return (
    <Paper className={classes.title}>
          {newUser &&  <KeyboardReturn
              sx={{ color: "background",paddingTop:"5px",fontSize:'35px', margin:'15px 25px 15px 5px' ,cursor:'pointer' }}
              onClick={CreateUserSHowClose}
            />}
      <text>{title}</text>
    </Paper>
  );
}

export default UseTitle;
