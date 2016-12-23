import React from 'react'
import {hashHistory} from 'react-router'
import Axios from 'axios'
import Config from 'config'

export default class LogoutComponent extends React.Component {

    render() {
        Axios.get('/logout').then(() => {
            hashHistory.push('/');
        }).catch(() => {
            hashHistory.push('/');
        })
    }

}
