import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, Route, Router, IndexRoute,hashHistory} from 'react-router';
import NavComponent from 'webclient/components/NavComponent'

export default class MainComponent extends React.Component{
  render(){
    return(
      <div>
        <NavComponent/>
        {this.props.children}
      </div>
    );
  }
}
