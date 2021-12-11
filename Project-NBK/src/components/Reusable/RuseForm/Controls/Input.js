import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container:{
    width:'100%',
    height:'90%',
    margin:5
  },
  
}));



function Input(props) {
  const classes = useStyles()
  const { name, label, value, onChange } = props;
  return (
    <TextField
    className={classes.Container}
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;
