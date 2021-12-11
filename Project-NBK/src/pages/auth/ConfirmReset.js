import React from 'react';
import { Box, TextField, Container, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import Alert from '@material-ui/lab/Alert';

import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/logo512.png';

import useConfirmReset from './hooks/useConfirmReset';

const ConfirmReset = () => {
  const { classes, auth, onSubmit, register, handleSubmit, isSubmitting, errors } =
    useConfirmReset();

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
            {auth.resetError && <Alert severity="error">{auth.resetError}</Alert>}
            {auth.forgetStatus === 'success' && (
              <Alert severity="success">vérifiez votre e-mail pour le code</Alert>
            )}
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

              <TextField
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="nouveau mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('password')}
              />
              <TextField
                error={!!errors.confirmPassword?.message}
                helperText={errors.confirmPassword?.message}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="confirmer le nouveau mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register('confirmPassword')}
              />

              <TextField
                error={!!errors.code?.message}
                helperText={errors.code?.message}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="code"
                label="Code"
                type="text"
                id="password"
                {...register('code')}
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
                réinitialiser
              </Button>
            </form>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default ConfirmReset;
