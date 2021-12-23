/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";

// @material-ui
import Icon from "@material-ui/core/Icon";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
// external
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

// internal
import { useStyles } from "./styles";
import { Collapse, List } from "@material-ui/core";

const MenuItem = ({
  label,
  icon,
  activeIcon,
  path,
  onClick,
  collaps,
  activeItem,
  iconArrow,
  itemList,
}) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    if (path === "/sign-out") {
      setActive(true);
      return;
    }

    setActive(location.pathname === path);
  }, [location, path]);

  return (
    <List
      sx={{
        bg: "backgroundS",
        color: "text",
        width: "90%",
        alignSelf: "center",
      }}
    >
      <ListItem
        button
        component={collaps ? null : Link}
        to={!collaps ? path : null}
        className={clsx(classes.menuItem, active && classes.menuItemActive)}
        onClick={collaps ? onClick : null}
      >
        <ListItemIcon>
          <Icon>
            <img
              className={classes.menuItemIcon}
              src={activeIcon}
              alt={label}
            />
          </Icon>
        </ListItemIcon>
        <ListItemText
          primary={label}
          primaryTypographyProps={{ variant: "body", backgroundColor: "#ccc" }}
        />
        {collaps && (
          <ListItemIcon>
            <Icon>
              <img
                className={classes.menuItemIconArr}
                src={iconArrow}
                alt={label}
              />
            </Icon>
          </ListItemIcon>
        )}
      </ListItem>
      {collaps && (
        <List>
          <Collapse in={activeItem}>
            {itemList.map((i, index) => {
              return (
                  <ListItem
                    button
                    component={Link}
                    to={i.path}
                    className={
                      classes.menuItemS
                      
                    }
                  >
                    <ListItemText

                    //  onClick={onClick}
                    >
                      {i.label}
                    </ListItemText>
                  </ListItem>
              );
            })}
          </Collapse>
        </List>
      )}
    </List>
  );
};

export default MenuItem;

// <ListItem
// button
// component={Link}
// to={"/"}
// className={clsx(classes.menuItem, active && classes.menuItemActive)}
// onClick={onClick}
// Selected ={"/" === location.pathname }

// >
// <ListItemIcon>
//   <Icon>
//     <img
//       className={classes.menuItemIcon}
//       src={DashboardIconActive}
//       alt={"Dashboard"}
//     />
//   </Icon>
// </ListItemIcon>
// <ListItemText
//   primary={"Dashboard"}
//   primaryTypographyProps={{
//     variant: "body",
//     backgroundColor: "#ccc",
//   }}
// />
// </ListItem>
// <ListItem
// button
// // component={Link}
// // to={"/Utilisateurs"}
// // className={clsx(classes.menuItem,
// //   //  active && classes.menuItemActive
// //    )}
// onClick={handleClick}
// Selected ={"/" === location.pathname }
// >
// <ListItemIcon>
//   <Icon>
//     <img
//       className={classes.menuItemIcon}
//       src={DashboardIconActive}
//       alt={"Operation"}
//     />
//   </Icon>
// </ListItemIcon>
// <ListItemText
//   primary={"Operation"}
//   primaryTypographyProps={{
//     variant: "body",
//     backgroundColor: "#ccc",
//   }}
// />
// <ListItemIcon>
//   <Icon>
//     <img
//       className={classes.menuItemIcon}
//       src={DashboardIconActive}
//       alt={"Operation"}
//     />
//   </Icon>
// </ListItemIcon>
// </ListItem>
// <List>
// <Collapse in={openT}  >
//   <List disablePadding>
//     <ListItem button>
//       <ListItemText

// >Item</ListItemText>
//     </ListItem>
//     <ListItem button>
//       <ListItemText>Item 2</ListItemText>
//     </ListItem>
//   </List>
// </Collapse>
// </List>
// <ListItem
// button
// component={Link}
// to={"/portefeuille"}
// className={clsx(classes.menuItem, active && classes.menuItemActive)}
// // onClick={onClick}
// Selected ={"/portefeuille" === location.pathname }

// >
// <ListItemIcon>
//   <Icon>
//     <img
//       className={classes.menuItemIcon}
//       src={DashboardIconActive}
//       alt={"portefeuille"}
//     />
//   </Icon>
// </ListItemIcon>
// <ListItemText
//   primary={"Portefeuille"}
//   primaryTypographyProps={{
//     variant: "body",
//     backgroundColor: "#ccc",
//   }}
// />
// </ListItem>
