import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import notificationReducer from "./reducers/notificationReducer";
import blogReducer from "./reducers/blogReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
  notification: notificationReducer,
  blog: blogReducer,
  user: userReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
