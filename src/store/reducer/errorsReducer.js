import * as actionTypes from '../action/actionTypes';

const initState = {}

export default function errorsReducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.GET_ERRORS:
			return action.payload	
		default:
			return state;
	}
}