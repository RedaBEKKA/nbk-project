import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as type from 'redux/types/cartesTypes';

export default function useFilter() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await dispatch({ type: type.FILTER_CARTES_REQUEST, payload: data });
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  };
}
