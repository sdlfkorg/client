import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Message from './components/Message';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';

const store = createStore(
	reducers, 
	{},
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path="/" exact component={Message} />
				<Route path="/signup"  component={Signup} />
				<Route path="/feature"  component={Feature} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);