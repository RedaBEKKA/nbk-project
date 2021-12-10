import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    background: "#eee",
    width: "100%",
  },
  TriRow:{
    display:'flex',
    alignItems: 'center',
    margin:5,
    padding:10
  }
  
}));
export default useStyles;
