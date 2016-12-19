import React from 'react'
import {Link} from 'react-router'
import {Card,CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginComponent extends React.Component{

  constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
  }
  onSubmit(){
      var email=this.refs.email.getValue();
      var password=this.refs.password.getValue();
      this.props.onSubmit(email,password);
  }
  render(){

    return(
      <Card className="container">
        <form action='/' onSubmit={this.onSubmit}>
          <h2 className="card-heading">Login</h2>
            {this.props.error.summary && <p className="error-message">{this.props.error.summary}</p>}
          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              ref="email"
              />
          </div>

          <div className="field-line">
            <TextField
              type='password'
              floatingLabelText="Password"
              ref="password"
              />
          </div>

          <div>
            <RaisedButton type="submit" label="Log in" primary/>
          </div>

          <CardText>Don't have an account</CardText>
        </form>
      </Card>
    )
  }
}
