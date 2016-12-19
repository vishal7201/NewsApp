import React from 'react'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';


export default class SearchContainer extends React.Component{
  constructor(props)
  {
    super(props);
    this.getSearchInput=this.getSearchInput.bind(this);
  }
  render(){
    return(
    <div>
      <TextField placeholder="Enter news source" ref="newsSource"/>
      <FlatButton label="Get News" primary={true} onClick={this.getSearchInput} />
    </div>
  );
  }
  getSearchInput(){
    var newsSource=this.refs.newsSource.getValue()
    this.props.onSearchInput(newsSource);
  }
}
