/* eslint-disable */

/** @jsxImportSource theme-ui */

import faker from "faker";
import React, { useState } from "react";
import useStyles from "./styleTable";
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
} from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";

let USERS = [],
  STATUSES = ["Actif", "Inactif"];
for (let i = 0; i < 25; i++) {
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    address: faker.address.streetAddress(),
    joinDate: faker.date.past().toLocaleDateString("en-US"),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

function UseTableReund(props) {
  const {
    payinRefunId,
    payinRefundstatus,
    idWallet,
    PayinId,
    amount,
    Currency,
    modifiedDate,
    date,
  } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [showStatus, setShowStatus] = useState(false);
  const [OpenVisualiser, setOpenVisualiser] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handeShow = () => {
    setShowStatus(!showStatus);
  };
  const handelOpen = (name) => {
    setOpenVisualiser(true);
  };
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {payinRefunId}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {payinRefundstatus}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {idWallet}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {PayinId}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {amount}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {Currency}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {modifiedDate}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {date}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.BoxDataBody}>
          <Typography className={classes.TextNodata} >No data ...</Typography>
        </TableBody>

        <TableFooter className={classes.footerX}>
          <TablePagination
            rowsPerPageOptions={[5, 8]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            anchor="right"
            labelRowsPerPage={""}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default UseTableReund;
