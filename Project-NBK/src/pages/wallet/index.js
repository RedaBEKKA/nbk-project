import { makeStyles, Container, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import Navigation from 'components/LeftSideBares/Navigation';
import HeaderAppBare from 'components/Headers/HeaderAppBare';
import Separator from 'components/Reusable/Separator/Separator';
import UseTitle from 'components/Body/HeaderTilteBody/UseTitle';
import Filters from './components/Filters';

import ErrorPage from 'pages/ErrorPage';

import Table from './components/Table';
import useGetWallets from './hooks/useGetWallets';

const useStyles = makeStyles((theme) => ({
  Container: {
    display: 'flex',
    background: '#eee',
    width: '100%',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  diver: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(0),
    width: '100%',
  },

  title: {
    fontWeight: '700',
    margin: '0px 0px 15px 0',
    fontSize: 20,
    background: '#b1cd25 ',
    width: '99%',
    padding: '25px 0',
    paddingLeft: 15,
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      background: '#fff',
      color: '#000',
    },
  },
  separator: {
    marginTop: theme.spacing(4),
  },
  containerTable: {
    margin: 15,
  },
}));
function Documents() {
  const classes = useStyles();
  const { wallets, getLoading } = useGetWallets();
  console.log('wallet component', wallets);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.Container}>
      <div className="App">
        <Navigation />
      </div>

      <div className={classes.diver}>
        <div className={classes.separator}></div>
        {!matches && <HeaderAppBare title={'Gestion des Utilisateurs'} />}
        <Separator />
        <UseTitle title={'Gestion des Portefeuilles'} />
        <Container maxWidth="xl">
          <Filters></Filters>
          <Table loading={getLoading} wallets={wallets}></Table>
        </Container>
      </div>
    </div>
  );
}

export default Documents;
