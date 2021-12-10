import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    display: "flex",
    alignItems: "center",
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
    fontSize:'18px',
    color:'#fff'
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
}));

export default useStyles;
