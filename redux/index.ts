import { combineReducers } from "redux";
import recipes from "./recipes/reducer";
import user from "./user/reducer";
const reducers = combineReducers({
  user,
  recipes,
});

export default reducers;
