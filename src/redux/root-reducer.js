//Helps to combine all the pulled in reducers
import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});