/** @jsxImportSource theme-ui */

import faker from 'faker';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import useStyles from '../../../components/test/styleTable';
import StatusFilter from './StatusFilter';
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

function MTable({ handelShow, loading, wallets }) {
  const classes = useStyles();
  const wrapperRef = useRef(null);
  const { closeStatus, openStatus, showStatus } = useOutsideAlerter(wrapperRef);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [OpenVisualiser, setOpenVisualiser] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handelOpen = (name) => {
    setOpenVisualiser(true);
  };
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              id{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              type id{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              user id{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              pay in count{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              pay out count{' '}
            </TableCell>{' '}
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              currency{' '}
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
            {wallets?.map((row) => (
              <TableRow className={classes.rowTable} key={row.walletId} onClick={handelShow}>
                <TableCell>{row.walletId}</TableCell>
                <TableCell>{row.walletTypeId}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.payinCount}</TableCell>
                <TableCell>{row.payoutCount}</TableCell>
                <TableCell>{row.currency}</TableCell>
                <TableCell>
                  {row.walletStatus === 'PENDING' && (
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor: 'orange',
                      }}
                    >
                      en attendant
                    </Typography>
                  )}
                  {row.walletStatus === 'VALIDATED' && (
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor: 'green',
                      }}
                    >
                      validé
                    </Typography>
                  )}
                  {row.walletStatus === 'CANCELLED' && (
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

        {/* <TableFooter className={classes.footer}>
          <TablePagination
            rowsPerPageOptions={[5, 8]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            anchor="right"
            labelRowsPerPage={''}
          />
        </TableFooter> */}
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
