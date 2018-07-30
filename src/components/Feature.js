import React, {Component} from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
	render(){
		return (
			<div>
				Here will be feature page.
			</div>
		);
	}
}

export default requireAuth(Feature);