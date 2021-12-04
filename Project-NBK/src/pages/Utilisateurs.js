

import React, { useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
// import { Home } from "@material-ui/icons";
import MaterialTable from "material-table";
import Navigation from "../components/Navigation";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  diver: {
    width: "140vh",
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
  },
  title:{
    fontWeight:'700',
    margin:'0px 0px 15px 0',
    fontSize:20
  }
}));

const Utilisateurs = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  // const [tableData, settableData] = useState([]);
  // const columns = [];
  const columns = [
    { title: "Nom", field: "name" },
    { title: "Email", field: "email" },
    { title: "N° téléphone", field: "phone" },
    { title: "Age", field: "age" },
    { title: "Ville", field: "city" },
  ];
  return (
    <div className={classes.Container}>
      <div className="App">
        <Navigation />
      </div>
      <div className={classes.diver}>
        <div className={classes.title}>Gestion des Utilisateurs :</div>
        <MaterialTable columns={columns} data={tableData} />
      </div>
    </div>
  );
};

export default Utilisateurs;
