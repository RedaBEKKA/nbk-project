import { makeStyles } from '@material-ui/core/styles';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fr } from 'yup-locales';
import { setLocale } from 'yup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

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

export default function useLogin() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log("data", data);
    await dispatch({ type: 'LOGIN_REQUEST', payload: data });
  };

  return { classes, matches, auth, register, handleSubmit, watch, errors, isSubmitting, onSubmit };
}
