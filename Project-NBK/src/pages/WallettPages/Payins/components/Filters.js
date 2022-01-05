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
  const { showVisible } = props;

  return (
    <>
      {showVisible && (
        <Paper style={{ padding: 30, maxWidth: '97%', margin: '10px 10px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box flexWrap="none" display="flex" justifyContent="space-between">
              <TextField
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="lock status"
                {...register('lockStatus')}
                variant="outlined"
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={0}>Card Unblocked</MenuItem>
                <MenuItem value={1}>Card blocked</MenuItem>
                <MenuItem value={2}>Lost card</MenuItem>
                <MenuItem value={3}>Stolen card</MenuItem>
              </TextField>
              <TextField
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="is physical"
                {...register('isPhysical')}
                variant="outlined"
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={0}>Physical card</MenuItem>
                <MenuItem value={1}>Virtual card</MenuItem>
              </TextField>
              <TextField
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="is converted"
                {...register('isConverted')}
                variant="outlined"
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={0}>Physical card converted in a virtual card</MenuItem>
                <MenuItem value={1}>Not converted</MenuItem>
              </TextField>
              <TextField
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="sortBy"
                {...register('sortBy')}
                variant="outlined"
              >
                <MenuItem value={''}>none</MenuItem>
                <MenuItem value={'createdDate'}>createdDate</MenuItem>
                <MenuItem value={'createdDateFrom'}>createdDateFrom</MenuItem>
              </TextField>
              <TextField
                style={{ margin: 10 }}
                fullWidth
                select // tell TextField to render select
                label="sortOrder"
                {...register('sortOrder')}
                variant="outlined"
              >
                <MenuItem value={''}>none</MenuItem>
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
