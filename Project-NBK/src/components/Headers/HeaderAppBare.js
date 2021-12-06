/* eslint-disable */ 

/** @jsxImportSource theme-ui */

import React, { useState } from "react";
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
  Button,
  Popper ,
  Grow,
  Paper ,
  ClickAwayListener ,
  MenuList,
  MenuItem
} from "@material-ui/core";

import {
  Mail,
  Search,
  Notification,
  NotificationImportant,
  MenuOutlined,
  ArrowDropDownCircleOutlined,
} from "@material-ui/icons";
import { buttonGroupClasses } from "@mui/material";
const options = [
  "Français",
  "English",
  "العربية",
];
const HeaderAppBare = ({ title }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false); // false=>visible
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={classes.appRoot}>
      <AppBar position="fixed" open={open} elevation={0} >
        <Toolbar className={classes.toolbare} sx={{bg:'background'}}>
          <Typography variant="h6" className={classes.logoLg}>
            {/* {title} */}
          </Typography>

          {/* <MenuOutlined className={classes.logoSm} /> */}
          <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search…" className={classes.inputa} />
          </div>

          <div className={classes.icosn}>
            <div className={classes.lefticons}>
              <Search
                className={classes.searchBtn}
                onClick={handleDrawerOpen}
              />

              <Badge
                badgeContent={5}
                color="secondary"
                className={classes.icosnBox}
              >
                <Mail className={classes.iconC} />
              </Badge>
              <Badge
                badgeContent={1}
                color="secondary"
                className={classes.icosnBox}
              >
                <NotificationImportant className={classes.iconC} />
              </Badge>
            </div>

            <div>
              <Avatar alt="Cindy Baker" />
            </div>

            <div className={classes.Langue}>
              <React.Fragment>
                <buttonGroupClasses
                  variant="contained"
                  ref={anchorRef}
                  aria-label="split button"
                >
                  <Button onClick={handleClick}>
                    {options[selectedIndex]}
                  </Button>
                  <Button
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <ArrowDropDownCircleOutlined />
                  </Button>
                </buttonGroupClasses>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu">
                            {options.map((option, index) => (
                              <MenuItem
                                key={option}
                                disabled={index === 2 && 1}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  handleMenuItemClick(event, index)
                                }
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </React.Fragment>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderAppBare;
