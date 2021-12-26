import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    Width: 650,
  },
  tableContainer: {
    borderRadius: 5,
    margin: "10px",
    maxWidth: "97%",
    border: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    // backgroundColor: "#14d",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    border: "none",
    padding: "0px 25px",
    overflow: "none",
    boxSizing: "border-box",
    outline: "hidden",
  },
  tableHeaderCellStatus: {
    fontWeight: "bold",
    // backgroundColor: "#000",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    padding: "0px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    height: "100%",
    padding: "0px 16px",
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.primary.dark,
    marginLeft: 25,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "gry",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
    marginLeft: 25,
  },
  statusNav: {
    fontWeight: "bold",
    color: "white",
    border: "none",
  },
  boxIcon: {
    cursor: "pointer",
  },
  conatinerChekc: {
    background: "#fff",
    position: "absolute",
    marginLeft: -150,
    marginTop: -115,
    border: "1px solid #ccc",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 30px",
    zIndex: 4,
  },
  rowTable: {
    cursor: "pointer",
    "&:hover": {
      background: "#eee",
    },
  },

  footer: {
    display: "flex ",
    justifyContent: "flex-end",
    width: "300%",
  },
  boxFilter: {
    height: "8vh",
    width: "100%",
    // backgroundColor: "#ccc",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
    overflow: "hidden",
  },
  headerTable: {
    backgroundColor: "#000",
    borderRadius: "8px",
    overflow: "hidden",
    boxSizing: "border-box",
    outline: "hidden",
  },
  box:{
    width:"5%",
  },
  box1:{
    width:"30%",
    backgroundColor:'#000'
  },
  footer: {
    display: 'flex ',
    justifyContent: 'flex-end',
    width: '300%',
  },
  footerX: {
    width: '300%',
  },
  BoxDataBody: {
    width: '100%',
  },
  TextNodata: {
    padding: '30px',
    color: '#000',
    fontSize: '26px',
    fontWeight: '600',
  },
}));


  

export default useStyles;
