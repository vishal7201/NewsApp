import React from 'react';

import NewsGetterComponent from 'NewsGetterComponent';

//This is a view layout, hence avoid putting any business logic
export default class Home extends React.Component {
	render () {
		return <NewsGetterComponent/>
	}
}
