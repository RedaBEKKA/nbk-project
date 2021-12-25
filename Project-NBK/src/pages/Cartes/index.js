/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import Navigation from 'components/LeftSideBares/Navigation';
import { makeStyles, useMediaQuery, useTheme, Button, Tooltip, Container } from '@material-ui/core';
import HeaderAppBare from 'components/Headers/HeaderAppBare';
// import MTable from 'components/test/table';
// import Visualiser from 'components/RightSideBares/UseVisualiser/Visualiser';
import useStyles from 'pages/styles/PortefeuilleStyle';
// import WalletForm from 'components/Reusable/WalletForm/WalletForm';
import UseTitle from 'components/Body/HeaderTilteBody/UseTitle';
import { Add, ArrowDown, ArrowDownward, CheckCircle, Close } from '@material-ui/icons';

// import Filters from './components/Filters';
// import Table from './components/Table';
// import useGetWallets from './hooks/useGetWallets';
const Cartes = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const [show, setShow] = useState(false);
  const [showFormUser, setShowFormUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  //   const { wallets, getLoading } = useGetWallets();
  const handelShowClose = () => {
    setShow(false);
  };
  const handelShow = () => {
    setShow(true);
  };

  const handelClose = () => {
    setShowFormUser(false);
    setNewUser(false);
  };
  const handelOpen = () => {
    setShowFormUser(true);
    setNewUser(true);
  };
  return (
    <div className={classes.Container}>
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <div className={classes.separator}></div>
        {!newUser && <UseTitle title={'Gestion des Cartes'} />}
        {newUser && (
          <UseTitle
            title={'Ajouter des Cartes'}
            newUser={newUser}
            CreateUserSHowClose={handelClose}
          />
        )}

        {!matches && <HeaderAppBare title={'Gestion des Cartes'} />}
        <div className={classes.buttonContainer}>
          <Tooltip title="exporter">
            <Button
              className={classes.btn}
              variant="contained"
              sx={{
                bg: 'btnBackground',
                color: 'inverstText',
                marginRight: 15,
              }}
              startIcon={<ArrowDownward />}
            >
              exporter
            </Button>
          </Tooltip>

          <Tooltip title="Ajouter">
            <Button
              variant="contained"
              sx={{ bg: 'btnBackground', color: 'inverstText' }}
              onClick={handelOpen}
              startIcon={<Add />}
            >
              Ajouter
            </Button>
          </Tooltip>
        </div>
        <div className={classes.containerTable}>
          <Container maxWidth="xl">
            {/* <Filters></Filters>
            <Table loading={getLoading} wallets={wallets}></Table> */}
            <h1>table and filter</h1>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Cartes;
