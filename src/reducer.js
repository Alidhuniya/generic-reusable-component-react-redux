import { combineReducers } from "redux";
import { reducer as payments } from './components/InfoCard1/reducer';

export const rootReducer = combineReducers({ payments });
