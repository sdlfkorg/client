import axios from 'axios';

import {AUTH_USER, AUTH_ERROR} from './type';


// in here, formProps = {email, password}
export const signup = (formProps, callback) => async dispatch => {

	try {

		const response = await axios.post('http://localhost:3090/signup', formProps);

		console.log(response);
		dispatch({type: AUTH_USER, payload: response.data.token});
		localStorage.setItem('token', response.data.token);
		callback();

	} catch (e) {
		dispatch({type: AUTH_ERROR, payload: 'This email is in used.'})
	}
	
};
	

export const signout = () =>{
	localStorage.removeItem('token');
	return {
		type: AUTH_USER,
		payload: ''
	};
}

export const signin = (formProps, callback) => async dispatch => {

	try {

		const response = await axios.post('http://localhost:3090/signin', formProps);

		console.log(response);
		dispatch({type: AUTH_USER, payload: response.data.token});
		localStorage.setItem('token', response.data.token);
		callback();

	} catch (e) {
		dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials.'})
	}
	
};
