import { combineReducers } from "redux";
import languageSlice from "./slices/languageSlice";

const rootReducer = combineReducers({
  language: languageSlice,
});

export default rootReducer;
