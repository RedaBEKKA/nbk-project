import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as type from '../../../redux/types/usersTypes';

export default function useGetUses() {
  const dispatch = useDispatch();
  const usersdata = useSelector((state) => state.users.users);
  const loadingUsers = useSelector((state) => state.users.loadingUsers);

  useEffect(() => {
    dispatch({ type: type.USERS_REQUEST });
  }, [dispatch]);
  return { usersdata ,loadingUsers };
}
