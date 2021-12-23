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
  Typography,
  TablePagination,
  TableFooter,

} from "@material-ui/core";

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

function UseTable(props) {
  const {
    id,
    status,
    idWallet,
    idUser,
    amount,
    Currency,
    paymentMethode,
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
              {id}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {status}
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
              {idUser}
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
              {paymentMethode}
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              {date}
            </TableCell>

            {/* <div className={classes.tableHeaderCellStatus}>
              {showStatus && (
                <div
                  className={classes.conatinerChekc}
                  sx={{ bg: "background" }}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Actif"
                      sx={{ bg: "background", color: "text" }}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Inactif"
                      sx={{ bg: "background", color: "text" }}
                    />
                  </FormGroup>
                </div>
              )}
              <TableCell
                className={classes.statusNav}
                sx={{ color: "btnBackground" }}
              >
                Status{" "}
              </TableCell>
              <div
                className={classes.boxIcon}
                onClick={handeShow}
                sx={{ color: "btnBackground" }}
              >
                <ArrowDownward />
              </div>
            </div> */}
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

export default UseTable;
