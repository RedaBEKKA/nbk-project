import React,{ useState } from "react";
import { useStyles } from "./stylesHeader";
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    InputBase,
    alpha,
    Badge,
    Avatar,
    IconButton,
    useMediaQuery,

  } from "@material-ui/core";

  import {
    Mail,
    Search,
    Notification,
    NotificationImportant,
    MenuOutlined,
  } from "@material-ui/icons";

const HeaderAppBare = ({ title }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false); // false=>visible

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.appRoot}>
      <AppBar position="fixed" open={open}>
      <Toolbar className={classes.toolbare}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuOutlined />
        </IconButton>
        {/* <Typography variant="h6" className={classes.logoLg}>
          Project NBK
        </Typography> */}

        {/* <MenuOutlined className={classes.logoSm} /> */}
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search…" className={classes.inputa} />
        </div>

        <div className={classes.icosn}>
          <div className={classes.lefticons}>
            <Search className={classes.searchBtn} onCLick={handleDrawerOpen} />

            <Badge
              badgeContent={5}
              color="secondary"
              className={classes.icosnBox}
            >
              <Mail />
            </Badge>
            <Badge
              badgeContent={1}
              color="secondary"
              className={classes.icosnBox}
            >
              <NotificationImportant />
            </Badge>
          </div>

          <div>
            <Avatar alt="Cindy Baker" />
          </div>
        </div>
      </Toolbar>
    </AppBar>

    </div>
  );
};

export default HeaderAppBare;
