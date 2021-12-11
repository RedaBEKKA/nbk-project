/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core";
 const useStyles = makeStyles((theme) => ({
  appRoot: {
    width: "100%",
    zIndex:3
  },
  title: {
    fontWeight: "700",
    margin: "0px 0px 15px 0",
    fontSize: 25,
    background: "linear-gradient(to right, #56ab2f, #a8e063)",
    width: "100%",
    height:"12vh",
    paddingLeft: 15,
    color: "#fff",
    display:'flex',
    alignItems: 'center',
    

    [theme.breakpoints.down("xs")]: {
      background: "#fff",
      color: "#000",
    },
  },
  

}));
export default useStyles
