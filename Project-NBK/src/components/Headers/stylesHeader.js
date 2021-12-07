/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appRoot: {
    width: "100%",
  },
  toolbare: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottom:".5px solid #ccc"
},
  logoLg: {
    display: "none",
    marginLeft: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    marginLeft: 5,
    fontSize: 40,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    // color: "#000",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // borderRadius: theme.shape.borderRadius,
    width: "30%",
    // padding: 3,
    // [theme.breakpoints.down("sm")]: {
    //   display: (props) => (props.open ? "flex" : "none"),
    // },
  },
  iconC:{
    color:'#ccc',
    fontSize:27
  },
  inputa: {
    marginLeft: theme.spacing(2),
    color: "#000",
  },
  icosn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // display: (props) => (props.open ? "flex" : "none"),
  },
  lefticons: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 15,
    alignItems: "center",
  },
  icosnBox: {
    margin: 5,
    cursor:'pointer'
  },
  searchBtn: {
    margin: 5,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  Langue:{
    paddingLeft:theme.spacing(3),
  }
}));
