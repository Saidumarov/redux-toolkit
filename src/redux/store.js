import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import teachersReducer from "./reducers/teachersReducer";
const rootReducer = combineReducers({
  teachers: teachersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
