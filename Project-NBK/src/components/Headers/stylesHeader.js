import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appRoot: {
    width: "100%",
  },
  toolbare: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
  logoLg: {
    display: "none",
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

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "30%",
    padding: 3,
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  inputa: {
    marginLeft: theme.spacing(2),
    color: "white",
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
  },
  searchBtn: {
    margin: 5,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
