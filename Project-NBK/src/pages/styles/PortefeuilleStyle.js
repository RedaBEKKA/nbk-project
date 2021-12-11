import { makeStyles } from "@material-ui/core";

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
    background: "linear-gradient(to right,  #a8e063,#56ab2f)",
    width: "100%",
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
  containerTable: {
    margin: 15,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 30px",
  },
  btn: {
    padding: "0px 10px",
  },
  infoScreen: {
    height: "92vh",
    width: "40%",
    position: "fixed",
    right: 0,
    background: "#fff",
    marginTop: 65,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    border: "1px solid #ccc",
    zIndex: 5,
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'column',
    color:'white'
  },
  boxButton:{
    margin:'20px 25px',
    alignSelf:"flex-end"
  },
  mrBtn:{
    margin:5
  }
}));
export default useStyles;
