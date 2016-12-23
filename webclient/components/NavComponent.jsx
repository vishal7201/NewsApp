import React from 'react'
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar'; 
export default class Nav extends React.Component {
    render() {
        var style = {
            'color': 'white',
            'paddingTop': '8px'
        }
        var textColor = {
            color: "white",
            fontSize: "24px",
            fontWeight: '400',
            fontFamilt: 'roboto'
        }
        var title = {
            color: "white",
            'paddingTop': '8px',
            "textDecoration": "none"
        }
        return (<AppBar title={< Link style = {
            title
        }
        to = "/home" > Daily News < /Link>} iconClassNameRight="muidocs-icon-navigation-expand-more" iconElementRight={< div style = {
            style
        } > <Link to="/savedNews">
            <FlatButton style={textColor} label="Saved News"></FlatButton>
        </Link> < Link to = "/logout" > <FlatButton style={textColor} label="Logout"></FlatButton> < /Link> </div >}/>)
    }
}
