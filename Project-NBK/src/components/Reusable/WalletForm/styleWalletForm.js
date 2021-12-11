import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  PaperContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
    // backgroundColor: "red",
  },
  BoxOne: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "95%",
    // backgroundColor: "#ccc",
  },

  Form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    // backgroundColor:'#ccc',
    alignSelf: "center",
  },
  boxContainer: {
    width: "100%",
  },
  RowPaper: {
    display: "flex",
    width: "100%",
    margin: "15px 0",
    padding: "10px 10px",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "white",
  },
  ColumnPaper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 25,
  },
  footer: {
    width: "95%",
    marginTop: "115px",
    // height: "10%",
    display: "flex",
    justifyContent: "flex-end",
    padding: 15,
    margin: 5,
    "& .MuiButton-root": {
      marginLeft: "15px",
    },
  },
}));

export default useStyles;
