import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory,Router, Route,IndexRoute, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar'
import {blueGrey600} from 'material-ui/styles/colors';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './views/home';
import NewsGetterComponent from 'NewsGetterComponent';
import NavComponent from 'NavComponent';
import LoginContainer from  'webclient/components/LoginContainer';
import SignupContainer from 'webclient/components/SignUpContainer';
import SavedNewsComponent from 'webclient/components/SavedNewsComponent'
import MainComponent from 'webclient/components/MainComponent';

const muiTheme=getMuiTheme({
		palette:{
			 primary1Color:'#7896a5'	 
		}
})

ReactDOM.render(

	 <MuiThemeProvider muiTheme={muiTheme}>
		<Router history={hashHistory}>
			<Route path="/" component={MainComponent}>
			<IndexRoute component={NewsGetterComponent}/>
			<Router path="/login" component={LoginContainer}/>
			<Router path="/signup" component={SignupContainer}/>
			<Router path="/savedNews" component={SavedNewsComponent}/>
			</Route>
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);
