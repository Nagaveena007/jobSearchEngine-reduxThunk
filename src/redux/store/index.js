import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // <-- this must be used with applyMiddleware
import favouriteReducer from "../reducers/favouriteReducer";
import jobReducer from "../reducers/jobReducer";

const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favourite: {
    favoCompany: [],
  },
  jobs: {
    jobsArray: [],
  },
};
const bigReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: jobReducer,
});
let configureStore = createStore(
  bigReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);
export default configureStore;
