import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
} from '@material-ui/core';
import useFilter from '../hooks/useFilter';

export default function Filters() {
  const { register, handleSubmit, watch, errors, isSubmitting, onSubmit } = useFilter();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Box my="20px" display="flex" justifyContent="flex-end">
        <Typography onClick={handleShow} style={{ color: 'green', cursor: 'pointer' }}>
          {show ? 'masquer' : 'afficher'} les filtres
        </Typography>
      </Box>
      {show && (
        <Paper style={{ padding: 30 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box flexWrap="none" display="flex" justifyContent="space-between">
              <TextField
                required
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="type id"
                {...register('walletTypeId', { required: true })}
                variant="outlined"
              >
                <MenuItem value={9}>Electronic Money Wallet</MenuItem>
                <MenuItem value={10}>Payment Account Wallet</MenuItem>
                <MenuItem value={13}>Mirror Wallet</MenuItem>
                <MenuItem value={14}>Electronic Money Card (Internal only)</MenuItem>
              </TextField>
              <TextField
                required
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="sortBy"
                {...register('sortBy', { required: true })}
                variant="outlined"
              >
                <MenuItem value={'createdDate'}>createdDate</MenuItem>
                <MenuItem value={'walletId'}>walletId</MenuItem>
                <MenuItem value={'walletTypeId'}>walletTypeId</MenuItem>
                <MenuItem value={'userId'}>userId</MenuItem>
                <MenuItem value={'payinCount'}>payinCount</MenuItem>
                <MenuItem value={'payoutCount'}>payoutCount</MenuItem>
                <MenuItem value={'currency'}>currency</MenuItem>
              </TextField>
              <TextField
                required
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="sortOrder"
                {...register('sortOrder', { required: true })}
                variant="outlined"
              >
                <MenuItem value={'DESC'}>DESC</MenuItem>
                <MenuItem value={'ASC'}>ASC</MenuItem>
              </TextField>
            </Box>

            <Box display="flex" justifyContent="flex-end">
              <Button
                style={{ margin: 10 }}
                disabled={isSubmitting}
                type="submit"
                // fullWidth
                variant="contained"
              >
                apply
              </Button>
            </Box>
          </form>
        </Paper>
      )}
    </>
  );
}
