import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as type from 'redux/types/payinsTypes';

export default function useGetPayins() {
  const dispatch = useDispatch();
  const payins = useSelector((state) => state.payins.payins);
  const getAllLoading = useSelector((state) => state.payins.getAllLoading);
  useEffect(() => {
    dispatch({ type: type.GET_PAYINS_REQUEST });
  }, [dispatch]);
  console.log('hook get payins', payins);
  return { payins, getAllLoading };
}
