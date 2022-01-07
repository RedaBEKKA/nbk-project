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
import StatusFilter from './StatusFilter';

function useOutsideAlerter(ref) {
  const [showStatus, setShowStatus] = useState(false);

  const openStatus = useCallback(() => {
    setShowStatus(true);
  }, []);
  const closeStatus = useCallback(() => {
    setShowStatus(false);
  }, []);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('clicked outside');

        closeStatus();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, closeStatus]);

  return { closeStatus, openStatus, showStatus };
}

function MTable({ showInfo, loading, payins }) {
  const classes = useStyles();
  console.log('payins table', payins);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const { closeStatus, openStatus, showStatus } = useOutsideAlerter(wrapperRef);

  const setCartInfo = (row) => {
    dispatch({ type: types.SET_PAYIN_INFO_REQUEST, payload: row });
    showInfo();
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
              amount
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              currency
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              payment method id
            </TableCell>

            <div className={classes.tableHeaderCellStatus}>
              {showStatus && (
                <div ref={wrapperRef} className={classes.conatinerChekc} sx={{ bg: 'background' }}>
                  <StatusFilter></StatusFilter>
                </div>
              )}
              <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
                Status{' '}
              </TableCell>
              {!showStatus && (
                <div
                  className={classes.boxIcon}
                  onClick={openStatus}
                  sx={{ color: 'btnBackground' }}
                >
                  <ArrowDownward />
                </div>
              )}
              {showStatus && (
                <div
                  className={classes.boxIcon}
                  onClick={closeStatus}
                  sx={{ color: 'btnBackground' }}
                >
                  <CloseIcon />
                </div>
              )}
            </div>
          </TableRow>
        </TableHead>
        {!loading && (
          <TableBody>
            {payins?.map((row) => (
              <TableRow
                onClick={() => setCartInfo(row)}
                className={classes.rowTable}
                key={row.payinId}
              >
                <TableCell>{row.payinId}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.walletId}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell>{row.paymentMethodId}</TableCell>
                <TableCell>
                  {row.payinStatus === 'PENDING' && (
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor: 'orange',
                      }}
                    >
                      en attendant
                    </Typography>
                  )}
                  {row.payinStatus === 'VALIDATED' && (
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor: 'green',
                      }}
                    >
                      validé
                    </Typography>
                  )}
                  {row.payinStatus === 'CANCELED' && (
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor: 'red',
                      }}
                    >
                      annulé
                    </Typography>
                  )}
                </TableCell>
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
