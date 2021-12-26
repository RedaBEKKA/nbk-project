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

export default function Filters(props) {
  const { register, handleSubmit, watch, errors, isSubmitting, onSubmit } = useFilter();
  const { showVisible } = props
  

  return (
    <>
   
      {showVisible && (
        <Paper style={{ padding: 30, maxWidth: '97%', margin: '10px 10px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box flexWrap="none" display="flex" justifyContent="space-between">
              <TextField
                required
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="created Date"
                {...register('createdDateFrom', { required: true })}
                variant="outlined"
              >
                <MenuItem value={'createdDateFrom'}>createdDate </MenuItem>
                <MenuItem value={'debut'}>date debut</MenuItem>
                <MenuItem value={'fin'}>date fin</MenuItem>

              </TextField>
              <TextField
                required
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="employeeType"
                {...register('employeeType', { required: true })}
                variant="outlined"
              >
                <MenuItem value={'employeeType'}>employeeType</MenuItem>
                <MenuItem value={'userId'}>userId</MenuItem>
                <MenuItem value={'userTypeId'}>userTypeId</MenuItem>
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
