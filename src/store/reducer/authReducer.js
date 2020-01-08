import * as actionTypes from '../action/actionTypes';
const isEmpty = require("is-empty");

const initState = {
	user: [],
	isAuthenticated: false
}

export default function authReducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.registerSuccess:
			return state
		case actionTypes.SET_CURRENT_USER:

			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}
			
		default:
			return state;
	}
}