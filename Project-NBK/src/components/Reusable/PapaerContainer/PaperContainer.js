import React from "react";
import { Paper } from "@material-ui/core";
import { Box } from "@mui/system";
import { Text } from "@theme-ui/components";
import useStyles from "./StylePaper"
function PaperContainer(props) {
    const { title , SbTitle,ScTitle,ScSbTitle } = props
  
    const classes = useStyles()
  return (
    <Paper className={classes.PaperContainer}>
      <Box className={classes.boxContainer}>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.sectitle}>{SbTitle}</Text>
      </Box>

      <Box className={classes.boxContainerSc}>
        <Text className={classes.title}>{ScTitle}</Text>
        <Text className={classes.sectitle}>{ScSbTitle}</Text>
      </Box>
    </Paper>
  );
}

export default PaperContainer;
