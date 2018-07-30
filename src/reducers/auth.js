import {AUTH_USER} from '../actions/type';

const INITIAL_STATE = {
	authenticated: '',
	errorMessage: ''
};

export default function(state = INITIAL_STATE, action){
	switch (action.type){
		case AUTH_USER:
			return {...state, authenticated: action.payload};
		default:
			return state;
	}
}