import React from "react";
import useStyles from "./style";
function Separator() {
  const classes = useStyles();

  return (
      <div className={classes.separator}></div>
  );
}

export default Separator;
