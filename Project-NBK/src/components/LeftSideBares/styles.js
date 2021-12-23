import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
  },
  appBar: {
    background: "#5bd542",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBarSpacer: {
    [theme.breakpoints.down("xs")]: {
      ...theme.mixins.toolbar,
    },
  },
  Collaspe:{
    backgroundColor:'#ccc',
    height:'30px',
    width:'100%',
    zIndex:300
  },
  navigationLogo: {
    width: "50%",
    cursor: "pointer",
  },
  navigationLogoFirst: {
    width: "30%",
    cursor: "pointer",
  },
  TxtLym: {
    margin: "15px 0px",
    fontSize: "20px",
    fontWeight: "700",
    color: "#5bd542",
    letterSpacing: "5px",
    display: "flex",
    justifyContent: "center",
    background: "#000",
  },
  navigationLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: theme.spacing(6),
    flexDirection: "column",
    height: "12vh",
    // background: "linear-gradient(to right,  #a8e063,#56ab2f)",
  },
  navigationDrawer: {
    width: 350,
    // border: "none",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    position: "relative",
    height: "102vh",
    marginRight: "0px",
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },
  navigationToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(0),
    ...theme.mixins.toolbar,
  },
  navigationToolbarCollapse: {
    justifyContent: "center",
    paddingRight: 0,
  },
  navigationList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    borderRaduis: 8,
  },
  navigationSpacer: {
    marginBottom: "50px",
  },
  menuItemIcon: {
    width: "100%",
    // backgroundColor: "#ccc",
  },
  menuItemIconArr: {
    width: "100%",
    // backgroundColor: "#ccc",
  },
  menuItem: {
    width: "100%",
    // borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    opacity: ".7",
    // backgroundColor: '#ccc',
  },
  menuItemS: {
    width: "100%",
    // borderRadius: theme.spacing(1),
    marginLeft: theme.spacing(7),
    opacity: ".7",
    // backgroundColor: '#ccc',
  },
  menuItemActive: {
    opacity: "1",
    borderBottom: "2px solid #56ab2f",
    width: "100%",
    color: "#56ab2f",
    fontWeight: "700",
    fontSize: 17,
    // backgroundColor: '#ccc',

  },
  buttonLogOut: {
    background: "#56ab2f",
    width: "80%",
    "&:hover": {
      background: "#56ab2faa",
    },
  },
  LogOutBtnIcon: {
    backgroundColor: "#56ab2f",
    height: "40px",
    width: "40px",
    borderRaduis: "15px",
    cursor: "pointer",
    padding:5
  },
  CollapsItem:{
    backgroundColor: "#ccce",
    paddingLeft:theme.spacing(6),
    margin: '-10px 0px 15px 10px',
    padding:3
    
  }
}));
