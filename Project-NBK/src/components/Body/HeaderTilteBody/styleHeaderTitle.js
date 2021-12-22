/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  appRoot: {
    width: "100%",
    zIndex: 3,
  },
  title: {
    fontWeight: "700",
    fontSize: 25,
    background: "linear-gradient(to right, #56ab2f, #a8e063)",
    width: "100%",
    height: "12vh",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      background: "#fff",
      color: "#000",
    },
  },
  buttonContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  btn: {
    margin: "0px 10px",
  },
  TextBox: {},
  ContainerPaperTitle: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 15px",
    background: "none",
  },
  boC: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize: "16px",
    padding: "1px 20px 15px 0px",
    color: "#fff",
    // backgroundColor: "#ccc",
    height: 20,
    position: "absolute",
    bottom: 0,
    right: 0,
    textShadow: "1px 2px 3px  #000",
    
  },
  iconV: {
    margin: "0px 5px",
    cursor: "pointer",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
}));
export default useStyles;
