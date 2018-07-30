import axios from 'axios';

import {AUTH_USER, AUTH_ERROR} from './type';

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
	
// formProps = {email, password}