import "./index.css";
import theme from "../src/theme/theme";
import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import store, { persistor } from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

ReactDOM.render(
  // <Provider store={store}>
    <ThemeProvider theme={theme}>

    {/* <PersistGate loading={null} persistor={persistor}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </PersistGate> */}
    </ThemeProvider>

  //  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
