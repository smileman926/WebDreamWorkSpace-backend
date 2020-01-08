import * as actionTypes from '../action/actionTypes';


const initState = {
	pageDatas: [],
	loading: true
}

export default function pageDatasReducer (state=initState, action) {
	switch(action.type) {
		case actionTypes.getPageDatas:
			return {pageDatas:action.pagedatas, loading:false};
		default:
			return state;
	}
}