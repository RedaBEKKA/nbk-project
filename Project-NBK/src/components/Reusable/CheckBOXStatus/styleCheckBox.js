import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Container: {
    display: "flex",
    background:'#fff', 
    position:'Absolute',
    top:'1.5%',
    right:'30%',
    borderRadius:'8px',
    width:"20%",
    alignItem:'center',
    justifyContent: 'center',
    border:'1px solid #000',
  },
  
}));
export default useStyles;
