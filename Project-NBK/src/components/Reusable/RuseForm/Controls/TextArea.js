import { TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container:{
    width:'100%',
    height:'90%',
    margin:5
  },
  
}));



function TextArea(props) {
  const classes = useStyles()
  const { name, label, value, onChange,placeholder } = props;
  return (
    <TextareaAutosize
    className={classes.Container}
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      style={{ width: "95%",border:'1px solid #ccc', height:65, boxSizing:"border-box",borderRadius:4,padding:15 ,fontSize:'17px',fontWeight:'500'}}
      placeholder={placeholder}
    />
  );
}

export default TextArea;
