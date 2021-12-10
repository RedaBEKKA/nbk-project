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

  navigationLogo: {
    width: "50%",
    cursor: "pointer",
  },
  navigationLogoFirst: {
    width: "30%",
    cursor: "pointer",
  },
  TxtLym:{
    margin:'15px 0px',
    fontSize:'20px',
    fontWeight:'700',
    color:'#5bd542',
    letterSpacing: '5px',
    display:'flex',
    justifyContent:'center',
    background:'#000'
  },
  navigationLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: theme.spacing(6),
    flexDirection:'column',
    height:"12vh",
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
    borderRaduis:8
    
  },

  navigationSpacer: {
    flex: 1,
  },
  menuItemIcon: {
    width: "100%",
  },
  menuItem: {
    width: "80%",
    // borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    opacity: ".7",
  },
  menuItemActive: {
    opacity: "1",
    borderBottom:"2px solid #56ab2f",
    width:"82%",
    color:'#56ab2f',
    fontWeight:'700',
    fontSize:17
  },
}));
