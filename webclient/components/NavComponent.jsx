import React from 'react'
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton'
export default class Nav extends React.Component {
  render() {
    var style={
      'color':'white',
      'paddingTop':'8px'
    }
    var textColor={
      color:"white",
      fontSize:"24px",
      fontWeight:'400',
      fontFamilt:'roboto'
    }
    var title={
      color:"white",
      'paddingTop':'8px',
      "textDecoration":"none"
    }
    return (
      <AppBar
title={<Link style={title} to="/">Daily News</Link>}
iconClassNameRight="muidocs-icon-navigation-expand-more"
iconElementRight={<div style={style}>
<Link  to="/savedNews"><FlatButton style={textColor} label="Saved News"></FlatButton></Link>
<Link  to="/login"><FlatButton style={textColor} label="Login"></FlatButton></Link>
<Link  to="/signup"><FlatButton style={textColor} label="Sign Up"></FlatButton></Link>
</div>
}
/>
          )
  }
}
