import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Container:{
      width:'100%',
      margin:5
    },
    
  }));
export default function Select(props) {
  const classes = useStyles()

  const { name, label, value, error = null, onChange, options } = props;
  return (
    <FormControl variant="outlined" {...(error && { error: true })}  className={classes.Container} >
      <InputLabel>{label}</InputLabel>
                
      <MuiSelect label={label} name={name} value={value} onChange={onChange}   >
        <MenuItem value="">None</MenuItem>
        {options.map((item) => (
          <MenuItem value={item.id}>{item.title}</MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
