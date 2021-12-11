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
    password: yup.string().min(5).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Les mots de passe doivent correspondre'),
    code: yup.string().min(5).required(),
  })
  .required();

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  },
  resend: {
    marginTop: 10,
  },
}));

export default function useConfirmReset() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    await dispatch({ type: 'RESET_REQUEST', payload: data });
  };

  return { classes, auth, onSubmit, register, handleSubmit, isSubmitting, errors };
}
