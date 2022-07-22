import { combineReducers } from "redux";
import couterReducer from "./Counter/counter.reducer";
import statusReducer from "./Status/reducer";
import cartReducer from "./Cart/reducer";

const rootReducer = combineReducers({
    counter: couterReducer,
    status: statusReducer,
    cart: cartReducer
});

export default rootReducer;