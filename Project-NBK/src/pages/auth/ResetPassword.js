import React from 'react';
import { Box, TextField, Container, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from 'assets/logo512.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fr } from 'yup-locales';
import { setLocale } from 'yup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

setLocale(fr);

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log('qsdqd');
    console.log(data);
    history.push('/confirmReset');
  };

  console.log(watch('email'));
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
                reset password
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

              <Button
                marginY="10px"
                disabled={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <CircularProgress color="black" className={classes.circularProgress} size={20} />
                reset
              </Button>
            </form>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Login;
