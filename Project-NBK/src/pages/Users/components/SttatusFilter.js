import React, { useState } from 'react';
import { FormGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as types from '../../../redux/types/usersTypes';

export default function StatusFilter() {
  const dispatch = useDispatch();
  const [checkState, setCheckState] = useState({
    VALIDATED: true,
    PENDING: false,
    CANCELED: false,
    REJECTED: false,

  });
  const handleInputChange = (e) => {
    console.log(e.target.value, e.target.checked);
    setCheckState(() => ({
      VALIDATED: false,
      PENDING: false,
      CANCELED: false,
      REJECTED: false,
      [e.target.value]: e.target.checked,
    }));
    if (e.target.checked) {
      dispatch({ type: types.USERS_REQUEST, payload: { userStatus: e.target.value } });
    }
  };
  console.log(checkState);
  return (
    <FormGroup onChange={handleInputChange}>
      <FormControlLabel
        // onChange={handleInputChange}
        control={<Checkbox checked={checkState.VALIDATED} />}
        label="validé"
        value="VALIDATED"
        style={{ color: 'black' }}
      />
      <FormControlLabel
        // onChange={handleInputChange}
        value="PENDING"
        control={<Checkbox checked={checkState.PENDING} />}
        style={{ color: 'black' }}
        label="en attendant"
      />
      <FormControlLabel
        // onChange={handleInputChange}
        value="CANCELED"
        control={<Checkbox checked={checkState.CANCELED} />}
        style={{ color: 'black' }}
        label="annulé"
      />
        <FormControlLabel
        // onChange={handleInputChange}
        value="REJECTED"
        control={<Checkbox checked={checkState.REJECTED} />}
        style={{ color: 'black' }}
        label="rejected"
      />
    </FormGroup>
  );
}
