import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./modules/index";
import rootSaga from "./sagas/rootSaga";

const configureStore = (_context) => {
  const sagaMW = createSagaMiddleware();
  const middlewares = [sagaMW];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMW.run(rootSaga);

  return store;
};

const wrapper = createWrapper(configureStore);

export default wrapper;
