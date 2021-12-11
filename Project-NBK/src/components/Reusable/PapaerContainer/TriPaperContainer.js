import React from "react";
import { Paper } from "@material-ui/core";
import { Box } from "@mui/system";
import { Text } from "@theme-ui/components";
import useStyles from "./StylePaper"
function TriPaperContainer(props) {
    const { titleA , SbTitleA,titleB,SbTitleB,titleC,SbTitleC } = props

    const classes = useStyles()
  return (
    <Paper className={classes.PaperContainerTRi} 

    >
      <Box className={classes.boxContainerTRi}>
        <Text className={classes.title}>{titleA}</Text>
        <Text className={classes.sectitle}>{SbTitleA}</Text>
      </Box>

      <Box className={classes.boxContainerTRi}>
        <Text className={classes.title}>{titleB}</Text>
        <Text className={classes.sectitle}>{SbTitleB}</Text>
      </Box>

      
      <Box className={classes.boxContainerTRi}>
        <Text className={classes.title}>{titleC}</Text>
        <Text className={classes.sectitle}>{SbTitleC}</Text>
      </Box>
    </Paper>
  );
}

export default TriPaperContainer;
