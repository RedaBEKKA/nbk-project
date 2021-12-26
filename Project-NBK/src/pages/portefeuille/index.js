
// /* eslint-disable */

/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import Navigation from '../../components/LeftSideBares/Navigation';
import { makeStyles, useMediaQuery, useTheme, Button, Tooltip, Container } from '@material-ui/core';
import HeaderAppBare from '../../components/Headers/HeaderAppBare';
// import MTable from 'components/test/table';
import Visualiser from '../../components/RightSideBares/UseVisualiser/Visualiser';
import useStyles from '../../pages/styles/PortefeuilleStyle';
import WalletForm from '../../components/Reusable/WalletForm/WalletForm';
import UseTitle from '../../components/Body/HeaderTilteBody/UseTitle';
import { Add, ArrowDown, ArrowDownward, CheckCircle, Close } from '@material-ui/icons';

import Filters from './components/Filters';
import Table from './components/Table';
import useGetWallets from './hooks/useGetWallets';
const Portefeuille = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const [show, setShow] = useState(false);
  const [showFormUser, setShowFormUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const { wallets, getLoading } = useGetWallets();

  const [showFilter,showSetFilter] = useState(false)
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
  const handelShowFilters = () =>{
    showSetFilter(!showFilter)
  }
  return (
    <div className={classes.Container}>
      <div className="App">
        <Navigation />
      </div>
      {!matches && <HeaderAppBare  />}


      <div className={classes.diver}>
        <div className={classes.separator}></div>
        {!newUser && <UseTitle title={'Gestion des Portefeuille'} 
        handelShowFilter={handelShowFilters}
        
        />}
        {newUser && (
          <UseTitle
            title={'Ajouter des Portefeuille'}
            newUser={newUser}
            CreateUserSHowClose={handelClose}
            handelOpen={handelOpen}
          />
        )}

 
        <div className={classes.containerTable}>
          <Container maxWidth="xl">
            <Filters showVisible={showFilter}  > </Filters>
            <Table loading={getLoading} wallets={wallets}></Table>
          </Container>
        </div>
      </div>
      {show && (
        <div className={classes.infoScreen}>
          <Visualiser handelShowClose={handelShowClose} titre={'Visualiser Un Portefeuille'} />
        </div>
      )}

      {showFormUser && (
        <div className={classes.infoScreen}>
          <WalletForm handelClose={handelClose} />
        </div>
      )}
    </div>
  );
};

export default Portefeuille;
