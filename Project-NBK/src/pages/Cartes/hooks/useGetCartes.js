import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as type from 'redux/types/cartesTypes';

export default function useGetCartes() {
  const dispatch = useDispatch();
  const cartes = useSelector((state) => state.cartes.cartes);
  const getAllLoading = useSelector((state) => state.cartes.getAllLoading);
  useEffect(() => {
    dispatch({ type: type.GET_CARTES_REQUEST });
  }, [dispatch]);
  console.log('hook get cartes', cartes);
  return { cartes, getAllLoading };
}
