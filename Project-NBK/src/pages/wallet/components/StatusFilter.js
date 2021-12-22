import React, { useState } from 'react';
import { FormGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as types from 'redux/types/walletTypes';

export default function StatusFilter() {
  const dispatch = useDispatch();
  const [checkState, setCheckState] = useState({
    validated: true,
    pending: false,
    canceled: false,
  });
  const handleInputChange = (e) => {
    console.log(e.target.value, e.target.checked);
    setCheckState(() => ({
      validated: false,
      pending: false,
      canceled: false,
      [e.target.value]: e.target.checked,
    }));
    if (e.target.checked) {
      dispatch({ type: types.GET_WALLETS_REQUEST, payload: { walletStatus: e.target.value } });
    }
  };
  console.log(checkState);
  return (
    <FormGroup onChange={handleInputChange}>
      <FormControlLabel
        // onChange={handleInputChange}
        control={<Checkbox checked={checkState.validated} />}
        label="validé"
        value="validated"
        style={{ color: 'black' }}
      />
      <FormControlLabel
        // onChange={handleInputChange}
        value="pending"
        control={<Checkbox checked={checkState.pending} />}
        style={{ color: 'black' }}
        label="en attendant"
      />
      <FormControlLabel
        // onChange={handleInputChange}
        value="canceled"
        control={<Checkbox checked={checkState.canceled} />}
        style={{ color: 'black' }}
        label="annulé"
      />
    </FormGroup>
  );
}
