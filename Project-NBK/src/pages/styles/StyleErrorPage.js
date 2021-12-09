import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container: {
    width: "95%",
    height: "85%",
    backgroundColor: "#fff",
    padding: "35px",
    marginLeft:'15px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'


  },
  Num:{
      width:'20%',
      margin:'5px 0px 10px 0px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
  },
  numt:{
      fontSize:'75px',
      color:'#000',
      fontWeight:'800',
  },
  midelNum:{
    fontSize:'75px',
    color:'#56ab2f',
    fontWeight:'800',
},
Text:{
    fontSize:'25px',
    fontWeight:'700',
    color:'#ccc',


}
}));
export default useStyles;
