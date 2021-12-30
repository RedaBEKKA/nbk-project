import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as type from 'redux/types/cartesTypes';

export default function useGetSingleCart() {
  const dispatch = useDispatch();
  const carte = useSelector((state) => state.cartes.carte);
  const getSingleLoading = useSelector((state) => state.cartes.getSingleLoading);
  useEffect(() => {
    dispatch({ type: type.GET_SINGLE_CARTE_REQUEST });
  }, [dispatch]);
  return { carte, getSingleLoading };
}
