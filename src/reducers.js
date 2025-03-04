/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loginSignUp from "./containers/LoginSignUp/reducer";
/**
 * Merges the main reducer with the router state and other container reducers
 */
export default function createReducer(history) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    loginSignUp
  });

  return rootReducer;
}
