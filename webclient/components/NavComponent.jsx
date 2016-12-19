import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar,NavItem } from 'react-materialize';
import {Link} from 'react-router';
export default class Nav extends React.Component {
  render() {
    return (
      <Navbar className='navnFooter' brand='Daily News'right>
        <NavItem><Link to="/savedNews">Saved News</Link></NavItem>
        <NavItem><Link to="/login">Login</Link></NavItem>
        <NavItem><Link to="/signup">SignUp</Link></NavItem>
      </Navbar>
    )
  }
}
