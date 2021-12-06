import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "5px",
    transition: "0.5s ease-out",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "60px",
    borderBottom: "1px solid #ccc",
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: "6px",
    justifyContent: "space-between",
    padding: " 0px 10px",
  },
  left: {},
  right: {
    display: "flex",
    alignItems: "center",
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
    flexDirection:'column'
  },
  icon: {
    marginLeft: 15,
    fontSize: 22,
    color: "#000",
    cursor: "pointer",
    "&:hover": {
      color: "green",
    },
  },
  Card: {
    width: "100%",
    display: "flex",
    margin: "10px 0px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 45px",
  },
  CardS: {
    width: "100%",
    display: "flex",
    flexDirection:'column',
    padding:'10px 20px',
    margin :'12px 0 0 0 '
  },
  Content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectitle: {
    color: "#000",
    opacity: 0.6,
    fontSize: "18px",
    fontWeight: "700",
    padding: "0px 0px 0px 10px",
  },
  titleS: {
    fontSize: 20,
    fontWeight: "bold",
    marignBottom:10

  },
  ContentS:{
    marginBottom:15
  },
  sectitleS: {
    color: "#000",
    opacity: 0.6,
    fontSize: "18px",
    fontWeight: "700",
    padding: "0px 0px 0px 10px",
    margin:'15px 0'
  },
}));

export default useStyles;
