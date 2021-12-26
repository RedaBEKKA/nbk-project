/* eslint-disable */

/** @jsxImportSource theme-ui */
import Navigation from "../components/LeftSideBares/Navigation";
import ErrorPage from "./ErrorPage";

import useStyles from './styles/stylesDashboard'

const Dashboard = () => {
  const classes = useStyles()
  return (

    <div className={classes.Container}>
    <div className="App">
      <Navigation />
    </div>

    <div className={classes.diver}>
      <div className={classes.separator}></div>

      <ErrorPage />
    
    </div>
  </div>
  );
};

export default Dashboard;
