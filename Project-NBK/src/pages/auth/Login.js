import React from 'react';
import { Box, Drawer, Container } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import useLogin from './hooks/useLogin';
import Carousel from './components/Carousel';

import Logo from 'assets/logo512.png';

const Login = () => {
  const { classes, matches } = useLogin();
  return (
    <>
      {!matches ? (
        <Box width="100%" display="flex" justifyContent="center" alignItems="center">
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <Box marginTop="100px" display="flex" justifyContent="center">
                <img src={Logo} alt="NBK Logo" />
              </Box>

              <Form></Form>
            </div>
          </Container>
        </Box>
      ) : (
        <>
          <Carousel></Carousel>
          <Drawer
            variant="permanent"
            anchor="right"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Container component="main" maxWidth="xs">
              <div className={classes.paper}>
                <Form></Form>
              </div>
            </Container>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Login;
