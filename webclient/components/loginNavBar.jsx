import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
export default class Nav extends React.Component {
    render() {
        let style = {
            color: 'white',
            paddingTop: '8px'
        };
        let textColor = {
            color: 'white',
            fontSize: '24px',
            fontWeight: '400',
            fontFamilt: 'roboto'
        };
        let title = {
            color: 'white',
            paddingTop: '8px',
            textDecoration: 'none'
        };
        return (<AppBar title={< Link style = {
            title
        }
        to = "/" > Daily News < /Link>} iconClassNameRight="muidocs-icon-navigation-expand-more" iconElementRight={< div style = {
            style
        } > <Link to="/login">
            <FlatButton style={textColor} label="Login"/>
        </Link> < /div>}/>);
    }
}
