import React from 'react'
import ReactDOM from 'react-dom'
import AutoComplete from 'material-ui/AutoComplete';
import Axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';

export default class SearchContainer extends React.Component{
  constructor(props)
  {
    super(props);
    this.newsSourceIds=[];
    this.newsSourceName=[];
    this.searchText="";
    this.state={
      searchProgress:false
    }
  }
  componentDidMount(){
    const NEWS_API_URL='https://newsapi.org/v1/sources?language=en';
    Axios.get(NEWS_API_URL).then((response)=>{
      response.data.sources.forEach((source)=>{
        this.newsSourceIds.push(source.id);
        this.newsSourceName.push(source.name);

      })
    }).catch((error)=>{
      alert(error)
    });
    }
    getSearchData(value,index){
      this.props.onSearchInput(this.newsSourceIds[index]);
    }
  render(){
    var style={
      width:"100%"
    }
    return(
      <div>
    <AutoComplete
    textFieldStyle={style}
    floatingLabelText="Search News by provider"
    filter={AutoComplete.fuzzyFilter}
    dataSource={this.newsSourceName}
    maxSearchResults={5}
    onNewRequest={this.getSearchData.bind(this)}    />
{this.state.searchProgress?<CircularProgress size={40} thickness={7}/>:""}
</div>
  );
  }
}
