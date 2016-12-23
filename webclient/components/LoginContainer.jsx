import React from 'react'
import LoginComponent from 'LoginComponent'
import Axios from 'axios'
import Config from 'config'
import {hashHistory} from 'react-router';
export default class LoginContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            error: {
                email: "",
                password: "",
                summary: ""
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(email, password) {

        var url = Config.url + '/login';
        Axios.post(url, {
            username: email,
            password: password
        }).then(function(response) {
            if (response.data.login == true) {
                hashHistory.push('/home');
            } else {
                hashHistory.push('/');
            }
            console.log(response);
        }.bind(this)).catch(function(err) {
            alert(err);
        }.bind(this))
    }

    render() {

        return (<LoginComponent error={this.state.error} onSubmit={this.onSubmit}/>)
    }
}
