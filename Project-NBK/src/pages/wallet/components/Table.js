import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  makeStyles,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Chip,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';
import useStyles from 'components/test/styleTable';
import StatusFilter from './StatusFilter';

function useOutsideAlerter(ref) {
  const [showStatus, setShowStatus] = useState(false);
  const handeShow = useCallback(() => {
    setShowStatus(!showStatus);
  }, [showStatus]);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('clicked outside');
        handeShow();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handeShow]);

  return { handeShow, showStatus };
}

export default function BasicTable({ loading, wallets }) {
  const classes = useStyles();
  const wrapperRef = useRef(null);
  const { handeShow, showStatus } = useOutsideAlerter(wrapperRef);

  return (
    <TableContainer component={Paper} style={{ marginTop: 20 }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              id
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              type id
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              user id
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              pay in count
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              pay out count
            </TableCell>
            <TableCell className={classes.tableHeaderCell} sx={{ color: 'btnBackground' }}>
              currency
            </TableCell>

            <div className={classes.tableHeaderCellStatus}>
              {showStatus && (
                <div ref={wrapperRef} className={classes.conatinerChekc} sx={{ bg: 'background' }}>
                  <StatusFilter></StatusFilter>
                </div>
              )}
              <TableCell className={classes.statusNav} sx={{ color: 'btnBackground' }}>
                Status{' '}
              </TableCell>
              <div className={classes.boxIcon} onClick={handeShow} sx={{ color: 'btnBackground' }}>
                <ArrowDownward />
              </div>
            </div>
            {/* <TableCell align="right">statut</TableCell> */}
          </TableRow>
        </TableHead>
        {!loading && (
          <TableBody>
            {wallets?.map((row) => (
              <TableRow key={row.walletId}>
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
      </Table>
      {loading && (
        <Box padding="100px" width="100%" display="flex" justifyContent="center">
          <CircularProgress color="primary"></CircularProgress>
        </Box>
      )}
    </TableContainer>
  );
}
