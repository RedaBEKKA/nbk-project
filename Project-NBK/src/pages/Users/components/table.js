/** @jsxImportSource theme-ui */

import faker from "faker";
import React, { useState, useRef, useCallback, useEffect } from "react";
import useStyles from "../../../components/test/styleTable";
import StatusFilter from "./SttatusFilter";
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
} from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";

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
        console.log("clicked outside");

        closeStatus();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, closeStatus]);

  return { closeStatus, openStatus, showStatus };
}

function MTable({ handelShow, loadingUsers, usersdata }) {
  const classes = useStyles();
  const wrapperRef = useRef(null);
  const { closeStatus, openStatus, showStatus } = useOutsideAlerter(wrapperRef);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
        <TableHead sx={{ color: "btnBackground", bg: "#000" }}>
          <TableRow>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Nom Prénom{" "}
            </TableCell>{" "}
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Email{" "}
            </TableCell>{" "}
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Téléphone{" "}
            </TableCell>{" "}
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Pays{" "}
            </TableCell>{" "}
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Ville{" "}
            </TableCell>{" "}
            <div className={classes.tableHeaderCellStatus}>
              {showStatus && (
                <div
                  ref={wrapperRef}
                  className={classes.conatinerChekc}
                  sx={{ bg: "background" }}
                >
                  <StatusFilter></StatusFilter>
                </div>
              )}
              <TableCell
                className={classes.tableHeaderCell}
                sx={{ color: "btnBackground" }}
              >
                Status{" "}
              </TableCell>
              {!showStatus && (
                <div
                  className={classes.boxIcon}
                  onClick={openStatus}
                  sx={{ color: "btnBackground" }}
                >
                  <ArrowDownward />
                </div>
              )}
              {showStatus && (
                <div
                  className={classes.boxIcon}
                  onClick={closeStatus}
                  sx={{ color: "btnBackground" }}
                >
                  <CloseIcon />
                </div>
              )}
            </div>
          </TableRow>
        </TableHead>
        {!loadingUsers && (
          <TableBody>
            {usersdata?.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          ).map((row) => (
              <TableRow
                className={classes.rowTable}
                key={row.walletId}
                onClick={handelShow}
              >
                <TableCell>
                  {row.firstname} {row.lastname}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>
                  {row.userStatus === "PENDING" && (
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor: "orange",
                      }}
                    >
                      en attendant
                    </Typography>
                  )}
                  {row.userStatus === "VALIDATED" && (
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor: "green",
                      }}
                    >
                      validé
                    </Typography>
                  )}
                  {row.userStatus === "CANCELLED" && (
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor: "red",
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

        <TableFooter className={classes.footer}>
          <TablePagination
            rowsPerPageOptions={[5, 8]}
            component="div"
            count={usersdata.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            anchor="right"
            labelRowsPerPage={""}
          />
        </TableFooter>
      </Table>
      {loadingUsers && (
        <Box
          padding="100px"
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <CircularProgress color="primary"></CircularProgress>
        </Box>
      )}
    </TableContainer>
  );
}

export default MTable;
