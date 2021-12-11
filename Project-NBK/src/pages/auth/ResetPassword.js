import React from 'react';
import { Box, TextField, Container, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import CircularProgress from '@material-ui/core/CircularProgress';

import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/logo512.png';

import useResetPassword from './hooks/useResetPassword';

const ResetPassword = () => {
  const { classes, auth, register, handleSubmit, onSubmit, errors, isSubmitting } =
    useResetPassword();
  return (
    <>
      <Box width="100%" display="flex" justifyContent="center" alignItems="center">
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Box marginTop="100px" display="flex" justifyContent="center">
              <img src={Logo} alt="NBK Logo" />
            </Box>
            <Box marginTop="20px" display="flex" justifyContent="center">
              <Typography component="h1" variant="h5">
                réinitialiser le mot de passe
              </Typography>
            </Box>

            {auth.forgetError && <Alert severity="error">{auth.forgetError}</Alert>}

            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <TextField
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label=" Address e-mail"
                autoComplete="email"
                autoFocus
                {...register('email')}
              />

              <Button
                marginY="10px"
                disabled={auth.loading || isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {auth.loading && (
                  <CircularProgress color="black" className={classes.circularProgress} size={20} />
                )}
                demander le code de réinitialisation
              </Button>
            </form>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default ResetPassword;
