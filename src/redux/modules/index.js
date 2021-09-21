import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import product from "./product";
import about from "./about";

const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    default:
      const conbineReducer = combineReducers({
        product,
        about,
      });
      return conbineReducer(state, action);
  }
};

export default reducer;
