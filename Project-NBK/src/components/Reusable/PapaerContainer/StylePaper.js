import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  PaperContainer: {
    display: "flex",
    padding: '20px',
    margin: "8px 0px",
    width:'96%',
    opacity:'0.9',
    background: "##fafafa38",


  },
  boxContainer: {
    width: "45%",
    marginRight: "25px",
  },
  boxContainerSc: {
    width: "55%",
    marginRight: "15px",
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
    padding: "0px 0px 0px 5px",
  },
  boxContainerTRi: {
    width: "30%",
    marginRight: "15px",
    color:'#000',
  },
  PaperContainerTRi:{
    display: "flex",
    padding: '40px 20px',
    margin: "5px 0",
    background: "##fafafa38",
    width:'96%',
    opacity:'0.9'

  }
}));

export default useStyles;
