/* eslint-disable */

/** @jsxImportSource theme-ui */

import faker from "faker";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 5,
    margin: "10px 10px",
    maxWidth: "97%",
    border: "none",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#000",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    border: "none",
    padding:'0px 25px'
  },
  tableHeaderCellStatus: {
    fontWeight: "bold",
    backgroundColor: "#000",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    padding: "0px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    height: "100%",
    padding: "0px 16px",
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.primary.dark,
    marginLeft:25
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "gry",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
    marginLeft:25
  },
  statusNav: {
    fontWeight: "bold",
    color: "white",
    border: "none",
  },
  boxIcon: {
    cursor: "pointer",
  },
  conatinerChekc: {
    background: "#fff",
    position: "absolute",
    marginLeft: -150,
    marginTop: -145,
    border: "1px solid #ccc",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 50px",
  },
  rowTable: {
    cursor: "pointer",
    "&:hover": {
      background: "#eee",
    },
  },
}));

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

function MTable({ handelShow }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
            <TableCell className={classes.tableHeaderCell}>
              Nom Prénom
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Email</TableCell>
            <TableCell className={classes.tableHeaderCell}>Téléphone</TableCell>
            <TableCell className={classes.tableHeaderCell}>Pays</TableCell>
            <TableCell className={classes.tableHeaderCell}>Ville</TableCell>

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
              <TableCell className={classes.statusNav}>Status </TableCell>
              <div className={classes.boxIcon} onClick={handeShow}>
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
                    <Avatar alt={row.name} src="." className={classes.avatar} />
                  </Grid>
                  <Grid item >
                    <Typography className={classes.name}>{row.name}</Typography>
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
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default MTable;
