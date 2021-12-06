import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "5px",
  },
  header: {
    display: "flex",
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: "6px",
    alignItems: "center",
    padding: 20,
    elevation: 1,
  },
  left: {
    margin: 0,
    padding: 0,
  },
  right: {
    display: "flex",
    alignItems: "center",
    color: "#000",
    marginLeft: 25,
    fontSize: 18,
    fontWeight: "700",
  },
  headerInfo: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: "6px",
  },
  bodyInfo: {
    borderRadius: "6px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  icon: {
    marginLeft: 10,
    fontSize: 22,
    color: "#56ab2f",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "50%",
    "&:hover": {
      color: "green",
    },
  },
  ContainerForm:{
      height:'50vh',
      width:'100%',
      padding:10
  },
  containerInputs:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between'
  },
  TextInput:{
      margin:5
  }
}));

export default useStyles;
