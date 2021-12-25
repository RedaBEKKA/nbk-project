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

function MTable({ handelShow, loading, cartes }) {
  const classes = useStyles();
  console.log('cartes table', cartes);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              id{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              userid{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              walletid{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              status code{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              masked pan{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              perms group{' '}
            </TableCell>{' '}
          </TableRow>
        </TableHead>
        {!loading && (
          <TableBody>
            {cartes?.map((row) => (
              <TableRow className={classes.rowTable} key={row.walletId} onClick={handelShow}>
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
