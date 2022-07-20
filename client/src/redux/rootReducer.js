import { combineReducers } from "redux";
import couterReducer from "./Counter/counter.reducer";
import statusReducer from "./Status/reducer";

const rootReducer = combineReducers({
    counter: couterReducer,
    status: statusReducer
});

export default rootReducer;