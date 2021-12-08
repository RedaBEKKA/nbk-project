
/* eslint-disable */
/** @jsxImportSource theme-ui */

import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import React from "react";
import useStyles from './styleCheckBox'
function CheckBoxStatus() {
   const classes = useStyles()
  return (
    <div className={classes.Container} >
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Actif"
          sx={{  color: "#000" }}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Inactif"
          sx={{  color: "#000" }}
        />
      </FormGroup>
    </div>
  );
}

export default CheckBoxStatus;
