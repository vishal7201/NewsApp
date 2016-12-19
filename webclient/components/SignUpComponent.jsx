import React from 'react'
import ReactDOM from 'react-dom'
import {Card,CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default class SignUpComponent extends React.Component{
  constructor(){
    super();
    this.onBlurName=this.onBlurName.bind(this);
    this.onBlurEmail=this.onBlurEmail.bind(this);
    this.onBlurPassword=this.onBlurPassword.bind(this);
    this.clearErrorMessageName=this.clearErrorMessageName.bind(this);
    this.clearErrorMessageEmail=this.clearErrorMessageEmail.bind(this);
    this.clearErrorMessagePassword=this.clearErrorMessagePassword.bind(this);
  }
  clearErrorMessageName(){
    this.props.clearErrorMessageName();
  }
  clearErrorMessageEmail(){
    this.props.clearErrorMessageEmail();
  }
  clearErrorMessagePassword(){
    this.props.clearErrorMessagePassword();
  }
  onBlurName(){
    console.log(this.props);
    this.props.onInputName(this.refs.name.getValue());
  }
  onBlurEmail(){
    console.log(this.props.onInputEmail.name);
    this.props.onInputEmail(this.refs.email.getValue());
  }
  onBlurPassword(){
    this.props.onInputPassword(this.refs.password.getValue());
  }

  render(){
      return (
        <Card className="container">
          <form action="/" onSubmit={this.onSubmit}>
            <h2 className="card-heading">Sign Up</h2>
            <div className="field-line">
              <TextField floatingLabelText="Name"  errorText={this.props.errors.name}  onBlur={this.onBlurName} onFocus={this.clearErrorMessageName} ref="name"/>
            </div>
            <div className="field-line">
              <TextField  floatingLabelText="Email"  errorText={this.props.errors.email} onBlur={this.onBlurEmail} ref="email" onFocus={this.clearErrorMessageEmail}/>
            </div>

            <div className="field-line">
              <TextField floatingLabelText="Password" type="password" errorText={this.props.errors.password} onBlur={this.onBlurPassword} onFocus={this.clearErrorMessagePassword} ref="password"/>
            </div>

           <div className="button-line">
             <RaisedButton type="submit" label="Create New Account" primary/>
           </div>
           <CardText>Already have an account</CardText>
          </form>
        </Card>
      );
  }
}
