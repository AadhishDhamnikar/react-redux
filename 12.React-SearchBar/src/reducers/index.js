import {combineReducers} from "redux";
import {listReducer} from "./listReducer";
import {detailsReducer} from './detailsReducer';

const rootReducer = combineReducers({
        list:listReducer,
        Details:detailsReducer
    });

export default rootReducer;
