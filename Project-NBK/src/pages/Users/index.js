/* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { useMediaQuery, useTheme, Grid, Button, Container } from "@material-ui/core";
import { ArrowDownward, Settings } from "@material-ui/icons";
import FormCreateUsers from "../../components/Body/FormCreateUsers/FormCreateUsers";
import Visualiser from "../../components/RightSideBares/UseVisualiser/Visualiser";
import Navigation from "../../components/LeftSideBares/Navigation";
import HeaderAppBare from "../../components/Headers/HeaderAppBare";
import Separator from "../../components/Reusable/Separator/Separator";
import UseTitle from "../../components/Body/HeaderTilteBody/UseTitle";
import useStyles from "./styles";
import { useColorMode } from "@theme-ui/color-modes";
import { useSelector, useDispatch } from "react-redux";
import useGetUses from "./hooks/useGetUsers";
import { USERS_REQUEST } from "../../redux/types/usersTypes";
import Filters from "./components/Filter";
import Table from './components/table'
const Utilisateurs = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { usersdata , loadingUsers  } = useGetUses();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [showVisible, setshowVisible] = useState(false);

  // functions
  const handelShow = () => {
    setShow(true);
  };
  const handelShowClose = () => {
    setShow(false);
  };
  const CreateUserSHowOpen = () => {
    setNewUser(true);
  };
  const CreateUserSHowClose = () => {
    setNewUser(false);
  };
  const changeVisibble = () => {
    setshowVisible(!showVisible);
  };

  return (
    <Grid
      className={classes.Container}
      sx={{ background: "primary", color: "inverstText" }}
    >
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <Separator />
        {!newUser && (
          <UseTitle
            title={"Gestion des Utilisateurs"}
            newUser={newUser}
            CreateUserSHowClose={CreateUserSHowClose}
            CreateUserSHowOpen={CreateUserSHowOpen}
            changeVisibble={changeVisibble}
          />
        )}
        {newUser && (
          <UseTitle
            title={"Ajouter des Utilisateurs"}
            newUser={newUser}
            CreateUserSHowClose={CreateUserSHowClose}
            CreateUserSHowOpen={CreateUserSHowOpen}
          />
        )}
        {!matches && <HeaderAppBare title={"Gestion des Utilisateurs"} />}
        {/* table Users */}
        <div className={classes.containerTable}>
          {/* {!newUser && (
            <MTable handelShow={handelShow} showVisible={showVisible} />
          )} */}
          <div className={classes.containerTable}>
            <Container maxWidth="xl">
      {   !newUser &&     <Filters changeVisibble={changeVisibble} showVisible={showVisible} > </Filters>}
          { !newUser &&   <Table loadingUsers={loadingUsers} usersdata={usersdata}></Table>}
            </Container>
          </div>

          {newUser && <FormCreateUsers />}
          <div className={classes.Absoluter}>
            <Settings
              sx={{ color: "backgroundB", fontSize: 46 }}
              onClick={() => {
                setColorMode(colorMode === "light" ? "dark" : "light");
                console.log(`colorMode`, colorMode);
              }}
            />
          </div>
        </div>
      </div>
      {/* Visualer  */}
      {show && (
        <div className={classes.infoScreen}>
          <Visualiser
            handelShowClose={handelShowClose}
            titre={"Visualiser Un Utilisateur"}
          />
        </div>
      )}
      {/* Visualer end */}
    </Grid>
  );
};

export default Utilisateurs;

{
  /* <div className={classes.buttonContainer}>
{!newUser ? (
  <div>
    <Tooltip title="exporter">
      <Button
        className={classes.btn}
        variant="contained"
        startIcon={<ArrowDownward />}
        sx={{ bg: "btnBackground", color: "inverstText" }}
      >
        exporter
      </Button>
    </Tooltip>
    {!matches && <HeaderAppBare title={"Gestion des Utilisateurs"} />}

    <Tooltip title="Ajouter">
      <Button
        variant="contained"
        sx={{ bg: "btnBackground", color: "inverstText" }}
        startIcon={<Add />}
        onClick={CreateUserSHowOpen}
      >
        Ajouter
      </Button>
    </Tooltip>
  </div>
) : (
  <div></div>
)}
</div> */
}
