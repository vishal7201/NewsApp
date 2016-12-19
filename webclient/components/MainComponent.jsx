import React from 'react'
import ReactDOM from 'react-dom'
import {browserHistory, Route, Router, IndexRoute,hashHistory} from 'react-router';
import NavComponent from 'webclient/components/NavComponent'
import FooterComponent from 'webclient/components/FooterComponent'
import {Row} from 'react-materialize'
export default class MainComponent extends React.Component{
  render(){
    return(
      <Row>
        <NavComponent/>
        {this.props.children}
      </Row>
    );
  }
}
