import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import SignUpComponent from 'SignUpComponent'
import Config from 'Config'

export default class SignUpContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      errors:{name:"",email:"",password:""},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };
    this.handleInputName=this.handleInputName.bind(this);
    this.handleInputEmail=this.handleInputEmail.bind(this);
    this.handleInputPassword=this.handleInputPassword.bind(this);
    this.processForm = this.handleForm.bind(this);
  }

  handleInputName(name){
    if(name.length==0)
    {
      this.state.errors.name='You must have a name buddy';
      this.setState({errors:this.state.errors});
    }
  }

  handleInputEmail(email){
    console.log("Email handeler");
    if(email.length==0){
      this.state.errors.email='You got to enter ur mail id';
      this.setState({errors:this.state.errors});
    }
    else{
      var url=Config.url+'/signup/email';
      Axios.post(url, {email:email})
      .then(function(response){
        if(!response.exists){
          this.state.errors.email='Email already registered';
          this.setState({errors:this.state.errors});
        }
      }.bind(this))
      .catch(function(error){
        console.log(url);
        console.log('Error in ajax call of email to server');
      }.bind(this));
    }
  }

  handleInputPassword(password){
    if(password.length==0){
      this.state.errors.password='password required';
      this.setState({errors:this.state.errors});
    }
  }
  HandleClearErrorMessageName(){
    this.state.errors.name='';
    this.setState({errors:this.state.errors});
  }
  HandleClearErrorMessageEmail(){
    this.state.errors.email='';
    this.setState({errors:this.state.errors});
  }
  HandleClearErrorMessagePassword(){
    this.state.errors.password='';
    this.setState({errors:this.state.errors});
  }
   handleForm(event) {
    event.preventDefault();

    }

  render() {
    return (
      <SignUpComponent
        onSubmit={this.handleForm} clearErrorMessageName={this.HandleClearErrorMessageName.bind(this)}
        onInputName={this.handleInputName} clearErrorMessageEmail={this.HandleClearErrorMessageEmail.bind(this)}
         onInputEmail={this.handleInputEmail} clearErrorMessagePassword={this.HandleClearErrorMessagePassword.bind(this)}
          onInputPassword={this.handleInputPassword} errors={this.state.errors} />
    );
  }
}
