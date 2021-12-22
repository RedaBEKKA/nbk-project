import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as type from 'redux/types/walletTypes';

export default function useGetWallets() {
  const dispatch = useDispatch();
  const wallets = useSelector((state) => state.wallet.wallets);
  const getLoading = useSelector((state) => state.wallet.getLoading);
  useEffect(() => {
    dispatch({ type: type.GET_WALLETS_REQUEST });
  }, [dispatch]);
  return { wallets, getLoading };
}
