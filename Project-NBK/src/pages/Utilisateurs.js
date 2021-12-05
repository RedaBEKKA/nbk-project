

// import React, { useState } from "react";
// import { Container, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
// // import { Home } from "@material-ui/icons";
// import MaterialTable from "material-table";
// import Navigation from "../components/Navigation";
// import HeaderAppBare from "../components/Headers/HeaderAppBare";

// const useStyles = makeStyles((theme) => ({
//   Container: {
//     display: "flex",
//     width: "240vh",

//   },
//   item: {
//     display: "flex",
//     alignItems: "center",
//   },
//   diver: {
//     width: "140vh",
//     marginTop: theme.spacing(4),
//     marginLeft: theme.spacing(2),
//   },
//   title:{
//     fontWeight:'700',
//     margin:'0px 0px 15px 0',
//     fontSize:20
//   }
// }));

// const Utilisateurs = () => {
//   const [tableData, setTableData] = useState([]);
//   const classes = useStyles();
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("xs"));


//   const columns = [
//     { title: "Nom", field: "name" },
//     { title: "Email", field: "email" },
//     { title: "N° téléphone", field: "phone" },
//     { title: "Age", field: "age" },
//     { title: "Ville", field: "city" },
//   ];
//   return (
//     <div className={classes.Container}>
//       <div className="App">
//         <Navigation />
//       </div>
//     {!matches &&  <HeaderAppBare title={'Gestion des Utilisateurs'} />}

//       {/* <div className={classes.diver}>
//         <div className={classes.title}></div>
//         <MaterialTable columns={columns} data={tableData} />
//       </div> */}
//     </div>
//   );
// };

// export default Utilisateurs;


import React, { useState } from "react";
import MaterialTable from "material-table";
import Navigation from "../components/Navigation";
import {
  Container,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import HeaderAppBare from "../components/Headers/HeaderAppBare";
import { spacing } from "@mui/system";
import MTable from "../components/test/table";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    background: "#eee",
    width: "100%",
  },
  item: {
    display: "flex",
    alignItems: "center",
  },
  diver: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(0),
    width: "100%",
  },

  title: {
    fontWeight: "700",
    margin: "0px 0px 15px 0",
    fontSize: 20,
    background: "#b1cd25 ",
    width: "99%",
    padding: "25px 0",
    paddingLeft: 15,
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      background: "#fff",
      color: "#000",
    },
  },
  separator: {
    marginTop: theme.spacing(4),
  },
  containerTable:{
    margin:15
  }
}));

const Utilisateurs = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

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
        <div className={classes.separator}></div>

        <div className={classes.title}> Gestion des Utilisateurs</div>
        {!matches && <HeaderAppBare title={"Gestion des Utilisateurs"} />}
        <div className={classes.containerTable}>
          {/* <MaterialTable columns={columns} data={tableData} /> */}

          <MTable />
        </div>
      </div>
    </div>
  );
};

export default Utilisateurs;
