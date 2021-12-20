import { Box, Paper } from "@material-ui/core";
import React from "react";
import useStyle from "../../styles/StylesLogin";
function RightLogin() {
  const classes = useStyle();
  return (
    <Box className={classes.ContainerBig} elevation={"false"}>
      <Paper className={classes.PaperRight} elevation={false}>
        <text className={classes.title}>Bienvenue parmi NOUS!</text>
        <text className={classes.text}>
          s simply dummy text of the printing and typesetting industry. Lorem
      
        </text>
      </Paper>
    </Box>
  );
}

export default RightLogin;
