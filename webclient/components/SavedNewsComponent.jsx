import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import Config from 'config'
export default class SavedNewsComponent extends React.Component{

  constructor(){
    super();
    this.savedNews={};
  }

  componentDidMount(){
    var url=config+'/savedNews?username=admin@gmail.com';
    Axios.get(url).then((response)=>{
        this.userNews=response.data.userNews;
        if(this.username.length==0)
        {
          alert('No news saved')
        }
        console.log(this.userNews);
    }).catch((error)=>{

    });
  }
  render(){
      return (<p>"hiiiiiiiiii"</p>)
  }
}
