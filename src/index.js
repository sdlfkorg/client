import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';
import Message from './components/Message';

ReactDOM.render(
	<BrowserRouter>
		<App>
			<Route path="/" exact component={Message} />
		</App>
	</BrowserRouter>,
	document.querySelector('#root')
);