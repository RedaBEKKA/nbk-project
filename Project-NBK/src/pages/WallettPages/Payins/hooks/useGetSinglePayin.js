import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as type from 'redux/types/payinsTypes';

export default function useGetSingleCart() {
  const dispatch = useDispatch();
  const payin = useSelector((state) => state.payins.payin);
  const getSingleLoading = useSelector((state) => state.payins.getSingleLoading);
  useEffect(() => {
    dispatch({ type: type.GET_SINGLE_PAYIN_REQUEST });
  }, [dispatch]);
  return { payin, getSingleLoading };
}
