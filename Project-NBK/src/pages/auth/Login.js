import React from "react";
import { Box, Drawer, Container, Paper } from "@material-ui/core";
import Form from "./components/Form";
import useLogin from "./hooks/useLogin";
import Carousel from "./components/Carousel";
import Logo from "../../assets/logo512.png";
import useStyles from "../styles/StylesLogin";
import RightLogin from "./components/RightLogin";

const Login = () => {
  const { classes, matches } = useLogin();
  const classe = useStyles();
  return (
    <Box className={classe.BigContainer}>
      {!matches ? (
        <Paper className={classes.PaperSmall}>
          <Form></Form>
        </Paper>
      ) : (
        <Paper className={classe.drawerPaper}>
          <Form></Form>
          <RightLogin></RightLogin>
        </Paper>
      )}
    </Box>
  );
};

export default Login;
