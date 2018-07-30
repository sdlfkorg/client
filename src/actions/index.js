import axios from 'axios';

import {AUTH_USER, AUTH_ERROR} from './type';

export const signup = formProps => async dispatch => {

	try {

		const response = await axios.post('http://localhost:3090/signup', formProps);

		console.log(response);
		dispatch({type: AUTH_USER, payload: response.data.token})

	} catch (e) {
		dispatch({type: AUTH_ERROR, payload: 'This email is in used.'})
	}
	
};
	
// formProps = {email, password}