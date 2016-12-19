import React from 'react'
import LoginComponent from 'LoginComponent'
import Axios from 'axios'
import Config from 'config'
export default class LoginContainer extends React.Component{
  constructor(){
    super();
    this.state={
      error:{email:"",password:"",summary:""}
    }
    this.onSubmit=this.onSubmit.bind(this);
  }
  onSubmit(email,password){
    var url=Config.url+'/login';
    console.log(url);
    Axios.post(url,{email:email,password:password}).
    then(function(response){
        if(response.data.auth==false){
          alert('User authentication failed');
          this.state.error.summary=response.data.error;
          this.setState({error:this.state.error});
        }
        else{
          alert('User authentication passed');
        }

    }.bind(this)).
    catch(function(err){
      alert('Error in ajax call');
    }.bind(this))
  }

  render(){

    return (
      <LoginComponent
        error={this.state.error}
        onSubmit={this.onSubmit}
        />
    )
  }
}
