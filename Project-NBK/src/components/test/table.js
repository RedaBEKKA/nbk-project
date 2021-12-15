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
import {
  ArrowDownward,
  Filter,
  Filter3,
  Filter9Plus,
  FilterTiltShiftSharp,
  Search,
} from "@material-ui/icons";

import InputFilter from "../Reusable/InputFilter/InputFilter";
import InputFilterDate from "../Reusable/InputFilterDate/InputFilterDate";
import InputFilterSelect from "../Reusable/InputFilterSelect/InputFilterSelect";


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

function MTable({ handelShow, showVisible }) {
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
      {showVisible && (
        <Paper className={classes.boxFilter}>
          <FilterTiltShiftSharp className={classes.box} />
          <InputFilter  className={classes.box1}/>
          <InputFilterDate  className={classes.box1}/>
          <InputFilterSelect className={classes.box1} />
        </Paper>
      )}

      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.headerTable}>
          <TableRow>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Nom Prénom
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Email
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Téléphone
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Pays
            </TableCell>
            <TableCell
              className={classes.tableHeaderCell}
              sx={{ color: "btnBackground" }}
            >
              Ville
            </TableCell>

            <div className={classes.tableHeaderCellStatus}>
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
            </div>
          </TableRow>
        </TableHead>

        <TableBody>
          {USERS.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          ).map((row) => (
            <TableRow
              key={row.name}
              className={classes.rowTable}
              onClick={handelShow}
            >
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar
                      alt={row.name}
                      src="."
                      className={classes.avatar}
                      sx={{ bg: "btnBackground" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.name}
                      sx={{ color: "backgroundS" }}
                    >
                      {row.name}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="body2">
                  {row.email}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{row.phone}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">
                  {" "}
                  <Typography variant="body2">{row.jobTitle}</Typography>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">
                  {" "}
                  <Typography color="textSecondary" variant="body2">
                    {row.address}
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (row.status === "Actif" && "green") ||
                      (row.status === "Inactif" && "red"),
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className={classes.footer}>
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

export default MTable;
