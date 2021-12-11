import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding:5,
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'column',
        

      },
    
   
      header: {
        display: "flex",
        width: "97%",
        backgroundColor: "#fff",
        marginBottom: 8,
        borderRadius: "6px",
        alignItems: "center",
        padding: 20,
        elevation: 1,
        margin:'15px 0px',
        alignSelf: "center",
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
      ContainerForm: {
        height: "50vh",
        width: "100%",
        padding: 10,
      },
      containerInputs: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      },
      TextInput: {
        margin: 5,
        width: "240px",
        height: "60px",
      },
      boxPaper:{
        margin:'45px 0px',
        display:'flex',
        justifyContent:'flex-end',
        '& .MuiButtonBase-root ':{
          marginLeft:20
        }
      }
}));

export default useStyles;
