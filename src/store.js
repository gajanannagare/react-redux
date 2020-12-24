import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({users: usersReducer}),
composeEnhancer(applyMiddleware(thunk))
);
export default store;
