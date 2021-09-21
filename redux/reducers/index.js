import { combineReducers } from "redux";

import cartReducer from "./cartReducer";

let reducer = combineReducers({
	cartReducer: cartReducer,
});

const rootreducer = (state, action) => {
	return reducer(state, action);
};

export default rootreducer;
