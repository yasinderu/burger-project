import * as actionTypes from '../actions/actionTypes';

const initialState = {
	idToken: null,
	userId: null,
	error: null,
	loading: null,
	authRedirectPath: '/',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return {
				...state,
				error: null,
				loading: true,
			};
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				idToken: action.idToken,
				userId: action.userId,
				error: null,
				loading: null,
			};
		case actionTypes.AUTH_FAIL:
			return {
				...state,
				error: action.error,
				loading: false,
			};
		case actionTypes.AUTH_LOGOUT:
			return {
				...state,
				idToken: null,
				userId: null,
			};
		case actionTypes.SET_AUTH_REDIRECT:
			return {
				...state,
				authRedirectPath: action.path,
			};
		default:
			return state;
	}
};

export default reducer;
