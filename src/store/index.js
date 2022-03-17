import { createStore, combineReducers } from "redux";
import filterReducer from "./FormReducer";
import HomeReducer from "./HomeReducer";

const rootReducer = combineReducers({
  filterReducer: filterReducer,
  homeReducer: HomeReducer,
});

const store = createStore(rootReducer);

export default store;
