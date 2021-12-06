import React from 'react';
import {
  Box,
  Drawer,
  TextField,
  Container,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from 'assets/logo512.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fr } from 'yup-locales';
import { setLocale } from 'yup';
import { useDispatch } from 'react-redux';

setLocale(fr);

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  })
  .required();

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    padding: 10,
  },
  loginCarousel: {
    height: '100vh',
    marginRight: 400,
  },
  carouselImages: {
    height: '100vh',
  },
  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  },
}));

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();

  //   const {
  //     control,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(schema),
  //   });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log('qsdqd');
    console.log(data);
    await dispatch({ type: 'LOGIN', payload: data });
  };

  console.log(watch('email'));
  return (
    <>
      {!matches ? (
        <Box width="100%" display="flex" justifyContent="center" alignItems="center">
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <Box marginTop="100px" display="flex" justifyContent="center">
                <img src={Logo} alt="NBK Logo" />
              </Box>
              <Box marginTop="20px" display="flex" justifyContent="center">
                <Typography component="h1" variant="h5">
                  Se connecter à votre compte
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

                <Box
                  marginY="10px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Se souvenir de moi"
                  />
                  <Link href="/resetPassword" variant="body2">
                    Mot de passe oublié ?
                  </Link>
                </Box>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  <CircularProgress color="black" className={classes.circularProgress} size={20} />
                  Se connecter
                </Button>
              </form>
            </div>
          </Container>
        </Box>
      ) : (
        <>
          <Box className={classes.loginCarousel}>
            <Carousel
              styles={{ height: '100%' }}
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              dynamicHeight={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={2000}
              transitionTime={500}
            >
              <div>
                <img
                  alt=""
                  className={classes.carouselImages}
                  src="http://react-responsive-carousel.js.org/assets/5.jpeg"
                />
              </div>
              <div>
                <img
                  alt=""
                  className={classes.carouselImages}
                  src="http://react-responsive-carousel.js.org/assets/2.jpeg"
                />
              </div>
              <div>
                <img
                  alt=""
                  className={classes.carouselImages}
                  src="http://react-responsive-carousel.js.org/assets/3.jpeg"
                />
              </div>
            </Carousel>
          </Box>
          <Drawer
            variant="permanent"
            anchor="right"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Container component="main" maxWidth="xs">
              <div className={classes.paper}>
                <Box marginTop="100px" display="flex" justifyContent="center">
                  <Typography component="h1" variant="h5">
                    Se connecter à votre compte
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

                  <Box
                    marginY="10px"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Se souvenir de moi"
                    />
                    <Link href="#" variant="body2">
                      Mot de passe oublié ?
                    </Link>
                  </Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Se connecter
                  </Button>
                </form>
              </div>
            </Container>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Login;
