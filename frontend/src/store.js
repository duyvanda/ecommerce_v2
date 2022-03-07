import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	productListReducers,
	productDetailsReducers,
	productDeleteReducer,
	productCreateReducer,
	productUpdateReducer,
	productReviewCreateReducer,
	productTopRatedReducer,
} from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";
import {
	userLoginReducers,
	userRegisterReducers,
	userDetailsReducers,
	userUpdateProfileReducers,
	userListReducer,
	userDeleteReducer,
	userUpdateReducer,
} from "./reducers/userReducers";

import {
	orderCreateReducers,
	orderDetailsReducer,
	orderPayReducer,
	orderListMyReducer,
	orderListReducer,
	orderDeliverReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
	// productList: productListReducers,
	productListReducers,
	// productDetails: productDetailsReducers,
	productDetailsReducers,
	productDelete: productDeleteReducer,
	productCreate: productCreateReducer,
	productUpdate: productUpdateReducer,
	productReviewCreate: productReviewCreateReducer,
	productTopRated: productTopRatedReducer,
	// cart: cartReducers,
	cartReducers,
	userLoginReducers,
	userRegisterReducers,
	userDetailsReducers,
	userUpdateProfileReducers,
	orderCreateReducers,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderListMy: orderListMyReducer,
	orderList: orderListReducer,
	orderDeliver: orderDeliverReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
});

const cartItemsFormStorage = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
	? JSON.parse(localStorage.getItem("shippingAddress"))
	: {};

const initialState = {
	cartReducers: {
		cartItems: cartItemsFormStorage,
		shippingAddress: shippingAddressFromStorage,
	},
	userLoginReducers: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
