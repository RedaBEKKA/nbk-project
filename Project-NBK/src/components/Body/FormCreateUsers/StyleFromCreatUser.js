import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    background: "#eee",
    width: "100%",
  },
  TriRow: {
    display: "flex",
    alignItems: "center",
    margin: 5,
    padding: 10,
  },
  InformationUser: {
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "space-between",
    marginBottom:5
  },
  TriRowLeft: {
    display: "flex",
    alignItems: "center",
    margin: 5,
    padding: 10,
    width: "100%",
  },
  TriRowRight: {
    display: "flex",
    alignItems: "center",
    margin: 5,
    padding: 10,
    flexDirection: "column",
    width: "39%",
  },
  row: {
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-start",
    width: "100%",
  },
  TextCheck: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#ccc",
    marginLeft: "15px",
  },
  Box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    margin: 5,
    padding: 10,
  },
  LeftInfoUSer: {
    margin: 5,
    padding: 10,
    width:"35%",
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
  },
  RightInfoUSer:{ 
    margin: 5,
    padding: 10,
    width:"75%"
  },
  InformationUserSec: {
    backgroundColor: "#ccc",
    display: "flex",
    justifyContent: "space-between",
    flexDirection:'column',
    marginTop:5
  },
  boxBtn:{
    width:'100%',
    display:'flex',
    justifyContent:'flex-end'
  },

  btn:{
    margin:15,
    backgroundColor:'#b1cd25',
  },
  btnR:{
    margin:15,
    backgroundColor:'#ccc',
  }
}));
export default useStyles;
