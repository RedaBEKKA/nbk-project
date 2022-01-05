/** @jsxImportSource theme-ui */

import faker from 'faker';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import useStyles from 'components/test/styleTable';
// import StatusFilter from './StatusFilter';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
  Container,
  FormGroup,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  Box,
} from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import * as types from 'redux/types/payinsTypes';

function MTable({ handelShow, loading, payins }) {
  const classes = useStyles();
  console.log('payins table', payins);
  const dispatch = useDispatch();

  const setCartInfo = (row) => {
    dispatch({ type: types.SET_PAYIN_INFO_REQUEST, payload: row });
    handelShow();
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              id
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              userid
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              walletid
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              status code
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              masked pan
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              perms group
            </TableCell>
          </TableRow>
        </TableHead>
        {!loading && (
          <TableBody>
            {payins?.map((row) => (
              <TableRow
                onClick={() => setCartInfo(row)}
                className={classes.rowTable}
                key={row.walletId}
              >
                <TableCell>{row.cardId}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.walletId}</TableCell>
                <TableCell>{row.statusCode}</TableCell>
                <TableCell>{row.maskedPan}</TableCell>
                <TableCell>{row.permsGroup}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      {loading && (
        <Box padding="100px" width="100%" display="flex" justifyContent="center">
          <CircularProgress color="primary"></CircularProgress>
        </Box>
      )}
    </TableContainer>
  );
}

export default MTable;
