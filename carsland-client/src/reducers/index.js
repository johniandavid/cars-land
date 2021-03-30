import cartReducer from "./cart";
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  cart: cartReducer
})
export default createRootReducer
