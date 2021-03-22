import cartReducer from "./cart";
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    cart : cartReducer
})
export default rootReducer;

