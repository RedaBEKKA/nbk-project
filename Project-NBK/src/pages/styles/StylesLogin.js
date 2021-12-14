/** @jsxImportSource theme-ui */
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  BigContainer: {
    display: "flex",
    background: "linear-gradient(to bottom,  #093028, #237a57 )", //#bdc3c7, #2c3e50 //#44a08d, #093637 //#45b649,#bdc3c7  //#093028, #237a57
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerPaper: {
    backgroundColor: "#ccc",
    height: "50%",
    width: "65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "8px",
    outline: "none",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "60%",
      backgroundColor: "#ccc",
      width: "85%",
    },
  },
  ContainerBig: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to Left,#093637, #44a08d, #093637 )",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      backgroundColor: "#ccc",
    },
  },
  PaperRight: {
    width: "60%",
    background: "none",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: "700",
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "400",
    padding: 10,
  },
}));
export default useStyles;
