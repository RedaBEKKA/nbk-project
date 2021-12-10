import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Navigation from 'components/Navigation';
import { Switch, Route, useHistory } from 'react-router-dom';
import routes from 'routes';
import authroutes from 'routes/authroutes';
import { useStyles } from 'styles';

export default function Layout() {
  const classes = useStyles();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const publicRoutes = useMemo(() => ['/login', '/resetpassword'], []);

  console.log(isAuth);
  //   const history = useHistory();

  //   useEffect(() => {
  //     if (!isAuth) history.push('/login');

  //     return history.listen((location) => {
  //       console.log(`You changed the page to: ${location?.pathname}`);
  //       if (isAuth) {
  //         if (!publicRoutes.includes(location?.pathname)) return;
  //         window.location.replace('/');
  //       } else {
  //         if (publicRoutes.includes(location?.pathname)) return;
  //         window.location.replace('/login');
  //       }
  //     });
  //   }, [history, isAuth, publicRoutes]);
  return (
    <>
      {/* <div>
        <Navigation />
        <div>
          <div className={classes.appBarSpacer}></div>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route exact key={index} path={route.path}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </div>
      </div> */}
      {isAuth ? (
        <div>
          <Navigation />
          <div>
            <div className={classes.appBarSpacer}></div>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route exact key={index} path={route.path}>
                    {route.component}
                  </Route>
                );
              })}
            </Switch>
          </div>
        </div>
      ) : (
        <Switch>
          {authroutes.map((route, index) => {
            return (
              <Route exact key={index} path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      )}
    </>
  );
}
