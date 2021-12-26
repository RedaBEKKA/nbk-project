import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    width: "100%",
    background: "#F5F5F5",
    height: "102vh",
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

  containerTable: {
    margin: 15,
  },

  infoScreen: {
    height: "92vh",
    width: "40%",
    position: "fixed",
    right: 0,
    marginTop: 65,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    border: "1px solid #ccc",
    zIndex: 5,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    background: "#fff",
  },
  Absoluter: {
    position: "fixed",
    right: 1,
    top: "25.5%",
    zIndex: "2",
  },
  boxButton: {
    margin: "20px 25px",
    alignSelf: "flex-end",
  },
  mrBtn: {
    margin: 5,
  },
  PaperCreate: {
    width: "100%",
    height: "100%",
  },
}));
export default useStyles;
