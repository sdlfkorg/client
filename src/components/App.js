import React from 'react';
import Header from './Header';

export default function({children}){
	return (
		<div>
			<Header />
			App Component Here.
			{children}
		</div>
	);
}