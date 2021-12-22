/* eslint-disable */

/** @jsxImportSource theme-ui */
import { Box, Button, Paper, Tooltip } from "@material-ui/core";
import {
  Add,
  ArrowDownward,
  KeyboardReturn,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import React from "react";
import useStyles from "./styleHeaderTitle";

function UseTitle(props) {
  const {
    title,
    newUser,
    CreateUserSHowClose,
    CreateUserSHowOpen,
    handelOpen,
    showVisible,
    changeVisibble
  } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.title}>
      <Paper className={classes.ContainerPaperTitle} elevation={false}>
        {newUser && (
          <KeyboardReturn
            sx={{
              color: "background",
              paddingTop: "5px",
              fontSize: "35px",
              margin: "15px 25px 15px 5px",
              cursor: "pointer",
            }}
            onClick={CreateUserSHowClose}
          />
        )}
        <text className={classes.TextBox}>{title}</text>
        <div className={classes.buttonContainer}>
          {!newUser ? (
            <div>
              <Tooltip title="exporter">
                <Button
                  className={classes.btn}
                  variant="contained"
                  startIcon={<ArrowDownward />}
                  sx={{ bg: "backgroundS", color: "inverstText" }}
                >
                  exporter
                </Button>
              </Tooltip>

              <Tooltip title="Ajouter">
                <Button
                  variant="contained"
                  sx={{ bg: "backgroundS", color: "inverstText" }}
                  startIcon={<Add />}
                  onClick={CreateUserSHowOpen || handelOpen}
                >
                  Ajouter
                </Button>
              </Tooltip>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Paper>
      {showVisible ? (
        <Box className={classes.boC}  >
          <Visibility className={classes.iconV}  elevation={3} onClick={changeVisibble}/>
          fermer les filtres
        </Box>
      ) : (
        <Box className={classes.boC} >
          <VisibilityOff className={classes.iconV} elevation={3} onClick={changeVisibble} />
           afficher les filtres
        </Box>
      )}
    </Paper>
  );
}

export default UseTitle;
