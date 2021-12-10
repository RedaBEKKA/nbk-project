import { makeStyles } from '@material-ui/core/styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fr } from 'yup-locales';
import { setLocale } from 'yup';
import { useDispatch, useSelector } from 'react-redux';

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

export default function useResetPassword() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    dispatch({ type: 'FORGET_REQUEST', payload: data });
  };

  console.log(watch('email'));
  return { classes, auth, register, handleSubmit, onSubmit, errors, isSubmitting };
}
