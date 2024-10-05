import { combineReducers } from "redux";

import authReducer from "./authReducers";
import postReducer from "./PostReducer";


export const reducers = combineReducers({authReducer,postReducer})