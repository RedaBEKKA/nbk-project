/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import Navigation from 'components/LeftSideBares/Navigation';
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Button,
  Tooltip,
  Container,
  Grid,
} from '@material-ui/core';
import HeaderAppBare from 'components/Headers/HeaderAppBare';
// import MTable from 'components/test/table';
// import Visualiser from 'components/RightSideBares/UseVisualiser/Visualiser';
import Info from './components/Info';
import useStyles from 'pages/styles/PortefeuilleStyle';
import UseTitle from 'components/Body/HeaderTilteBody/UseTitle';
import { Add, ArrowDown, ArrowDownward, CheckCircle, Close } from '@material-ui/icons';

import Filters from './components/Filters';
import Table from './components/Table';
import useGetPayins from './hooks/useGetPayins';
const Cartes = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const [show, setShow] = useState(false);
  const [showFormUser, setShowFormUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const { cartes, getAllLoading } = useGetPayins();
  const [showFilter, showSetFilter] = useState(false);

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
  const handelShowFilters = () => {
    console.log('filter');
    showSetFilter(!showFilter);
  };
  return (
    <Grid className={classes.Container} sx={{ background: 'primary', color: 'inverstText' }}>
      <div className={classes.Container}>
        <div className="App">
          <Navigation />
        </div>

        <div className={classes.diver}>
          <div className={classes.separator}></div>
          {!newUser && (
            <UseTitle title={'Gestion des Payins'} handelShowFilter={handelShowFilters} />
          )}
          {newUser && (
            <UseTitle
              title={'Ajouter des Payins'}
              newUser={newUser}
              CreateUserSHowClose={handelClose}
            />
          )}

          {!matches && <HeaderAppBare title={'Gestion des Payins'} />}

          <div className={classes.containerTable}>
            <Container maxWidth="xl">
              <Filters showVisible={showFilter}></Filters>
              <Table handelShow={handelShow} loading={getAllLoading} cartes={cartes}></Table>
            </Container>
          </div>
        </div>
      </div>
      {show && (
        <div className={classes.infoScreen}>
          <Info handelShowClose={handelShowClose} titre={'Visualiser Un Cart'} />
        </div>
      )}
    </Grid>
  );
};

export default Cartes;
