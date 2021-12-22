import React from 'react';

import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Typography,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import logo from '../../../assets/logo.png';
import logo2 from '../../../assets/logo512.png';
import useLogin from '../hooks/useLogin';

export default function Form() {
  const { classes, auth, register, handleSubmit, errors, isSubmitting, onSubmit, matches } =
    useLogin();
  return (
    <Box className={classes.boxForm} elevation={'false'}>
      {/* <Box className={classes.boxLogo}>
        {matches ? (
          <img src={logo} alt="logo image" style={{ width: '70%', height: '45%' }} />
        ) : (
          <img src={logo2} alt="logo image" style={{ width: '40%', height: '80%' }} />
        )}
      </Box> */}
      <Box margin="20px 0px" display="flex" justifyContent="center" color="#237a57">
        <Typography component="h1" variant="h5" className={classes.titiel}>
          Se connecter à votre compte
        </Typography>
      </Box>
      {auth.error && <Alert severity="error">{auth.error}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          type="email"
          variant="outlined"
          margin="normal"
          required
          id="email"
          label=" Address e-mail"
          autoComplete="email"
          autoFocus
          className={classes.inputStyles}
          {...register('email')}
        />
        <TextField
          error={!!errors.password?.message}
          helperText={errors.password?.message}
          variant="outlined"
          margin="normal"
          required
          className={classes.inputStyles}
          name="password"
          label="Mot de passe"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register('password')}
        />

        <Box marginY="10px" display="flex" justifyContent="space-between" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                style={{ color: '#237a57', margin: '0px 0px', paddingLeft: '25px' }}
              />
            }
            label="Se souvenir de moi"
          />
          <Link
            href="/resetPassword"
            variant="body2"
            style={{ color: '#237a57', margin: '0px 25px' }}
          >
            Mot de passe oublié ?
          </Link>
        </Box>
        <Button
          disabled={auth.loading || isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          {auth.loading && (
            <CircularProgress color="black" className={classes.circularProgress} size={20} />
          )}
          Se connecter
        </Button>
      </form>
    </Box>
  );
}
