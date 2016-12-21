import React from 'react'
import Axios from 'axios'
import FlatButton from 'material-ui/FlatButton'
import {CardText} from 'material-ui/Card';

export default class UpdateComponenet extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isUpdate:false
    }
  }

  render(){
    var style={
      "paddingTop":"0px",
      "paddingBottom":"0px"
    }
    return(
      <CardText style={style}>
        {this.state.isUpdate?<TextField ref="comments"
           value={this.props.comment}
           floatingLabelText="Comments"/>:this.props.comment}
         </CardText>
    )
  }

}
