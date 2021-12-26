import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../../redux/types/usersTypes';

export default function useGetUses() {
  const dispatch = useDispatch();
  const usersdata = useSelector((state) => state.users);
  useEffect(() => {
    dispatch({ type: type.USERS_REQUEST });
    console.log(`dispatch`, )
  }, [dispatch]);
  return { usersdata };
}
