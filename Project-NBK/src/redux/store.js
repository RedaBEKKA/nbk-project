import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};
/* ------------- Redux Configuration ------------- */
const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composeEnhancers(...enhancers));
export const persistor = persistStore(store);

// kick off root saga
sagaMiddleware.run(rootSaga);

export default store;

// const store = composeEnhancers(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);

// sagaMiddleware.run(rootSaga);

// let persistor = persistStore(store);
