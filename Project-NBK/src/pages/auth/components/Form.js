import React from 'react';

import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import CircularProgress from '@material-ui/core/CircularProgress';
import useLogin from '../hooks/useLogin';

export default function Form() {
  const { classes, auth, register, handleSubmit, errors, isSubmitting, onSubmit } = useLogin();
  return (
    <>
      <Box marginTop="20px" display="flex" justifyContent="center">
        <Typography component="h1" variant="h5">
          Se connecter à votre compte
        </Typography>
      </Box>
      {auth.error && <Alert severity="error">{auth.error}</Alert>}
      <Box marginTop="20px" display="flex" justifyContent="center">
        <Typography component="h1" variant="h5">
          lexoussoboiru-4108@yopmail.com{' '}
        </Typography>
      </Box>
      <Box marginTop="20px" display="flex" justifyContent="center">
        <Typography component="h1" variant="h5">
          M0oiuyt12@uiU
        </Typography>
      </Box>
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
          label="Mot de passe"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register('password')}
        />

        <Box marginY="10px" display="flex" justifyContent="space-between" alignItems="center">
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Se souvenir de moi"
          />
          <Link href="/resetPassword" variant="body2">
            Mot de passe oublié ?
          </Link>
        </Box>
        <Button
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
          Se connecter
        </Button>
      </form>
    </>
  );
}
