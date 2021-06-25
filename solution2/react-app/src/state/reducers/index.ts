import { combineReducers } from "redux";
import councillors from './councillors';
import council from './council';
import affrairs from './affrairs';

export default combineReducers({
    councillors,
    council,
    affrairs
})