/* eslint-disable */

/** @jsxImportSource theme-ui */

import React, { useState } from "react";

// @material-ui
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Avatar,
  Badge,
  Paper,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

// assets
// import Logo1 from "../../assets/logo.png";
import Logo2 from "../../assets/logo512.png";
import Logo1 from "../../assets/logo512.png";

// external
import clsx from "clsx";
// internal
import MenuItem from "./MenuItem";
import routes from "../../routes";
import { useStyles } from "./styles";
import { useHistory } from "react-router";

const Navigation = () => {
  const [open, setOpen] = useState(true);

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const history = useHistory();
  const toggleNavigation = () => {
    setOpen(!open);
  };

  const closeNavigation = () => {
    if (matches) {
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={toggleNavigation}
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography color="inherit" component="h1" variant="h6">
            NBK-Project
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open && classes.navigationDrawerCollapse
          ),
        }}
        variant={matches ? "temporary" : "permanent"}
        open={open}
      >
        <div
          className={clsx(
            classes.navigationToolbar,
            !open && classes.navigationToolbarCollapse
          )}
          sx={{ bg: "backgroundS" }}
        >
          <IconButton
            onClick={toggleNavigation}
            sx={{ bg: "backgroundS", color: "text" }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        {!open && (
          <div
            className={classes.navigationLogoContainer}
            sx={{ bg: "backgroundS", color: "text" }}
          >
            <img
              className={classes.navigationLogo}
              src={Logo2}
              alt="NBK Logo"
            />
          </div>
        )}

        {open && (
         <div style={{backgroundColor:'#000'}}>
         <Paper
            sx={{ bg: "backgroundS", color: "text" }}
            className={classes.navigationLogoContainer}
            onClick={() => {
              history.push("./");
            }}
          >

            <img
              className={classes.navigationLogoFirst}
              src={Logo1}
              alt="NBK Logo"
            />
          </Paper>
             <text className={classes.TxtLym}>LAYMOON</text>
</div>
        )}
        <List
          className={classes.navigationList}
          sx={{ bg: "backgroundS", color: "text" }}
        >
          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                {route.path === "/login" && (
                  <div className={classes.navigationSpacer}></div>
                )}
                <MenuItem
                 className={classes.navigationListItem}
                  label={route.label}
                  icon={route.icon}
                  activeIcon={route.activeIcon}
                  path={route.path}
                  onClick={closeNavigation}
                />
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
