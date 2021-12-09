import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ContainerX1:{
    display: "flex",
    flexDirection: "column",
    alignItems:'center',
  },
  
  Container: {
    display: "flex",
    width: "96%",
    flexDirection: "column",
    padding: "5px",
    background: "#fff",
    borderRadius: "8px",
    alignItems:'center',
    margin:'15px 0'
    
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "80px",
    border: ".5px solid #fff",
    width: "100%",
    background: "linear-gradient(to right, #56ab2f, #a8e063)",
    marginBottom: 8,
    borderRadius: "6px",
    justifyContent: "space-between",
    padding: " 0px 10px 0 0 ",
    elevation: 5,
    opacity: "0.9",
  },
  left: {
    display:'flex',
    alignItems:'center'
  },
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
    flexDirection: "column",
  },
  iconHeader: {
    margin: "0px 14px 0 7px",
    fontSize: 22,
    color: "#fff",
    cursor: "pointer",
    border: "1px solid white",
    borderRadius: "50%",
    padding: 5,
    height: 30,
    width: 30,
    "&:hover": {
      color: "white",
      border: "1px solid white",
      boxShadow: "2px 1px 12px #fff",
      height: 35,
      width: 35,
      borderRadius: "50%",
      transition:'.35s ease-in'
    },
  },
  textTitle:{
    fontWeight:'700',
    fontSize:'18px'
  },
  icon: {
    marginLeft: 15,
    fontSize: 22,
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
      height: 30,
      width: 30,
      transition:'.35s ease-in'
    },
  },
  Card: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 15,
  },
  CardS: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px 20px",
    margin: "12px 0 0 0 ",
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
    marignBottom: 10,
  },
  ContentS: {
    marginBottom: 15,
  },
  sectitleS: {
    color: "#000",
    opacity: 0.6,
    fontSize: "18px",
    fontWeight: "700",
    padding: "0px 0px 0px 10px",
    margin: "15px 0",
  },
  PaperContainer: {
    display: "flex",
    padding: 20,
  },
  boxConatiner: {
    width: "45%",
    marginRight: "15px",
  },
}));

export default useStyles;
