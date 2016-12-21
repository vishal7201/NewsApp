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
    this.getSearchInput=this.getSearchInput.bind(this);
    this.passSearchData=this.passSearchData.bind(this);
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
    getSearchInput(input){
      this.searchText=input;
    }
    passSearchData(){
      if(this.searchText!="")
      {
      var sourceIdIndex=this.newsSourceName.indexOf(this.searchText);
      this.setState({searchProgress:true});
      this.props.onSearchInput(this.newsSourceIds[sourceIdIndex]);
    }
    }
  render(){
    return(
      <div>
    <AutoComplete
    floatingLabelText="Search News by provider"
    filter={AutoComplete.fuzzyFilter}
    dataSource={this.newsSourceName}
    maxSearchResults={5}
    onUpdateInput={this.getSearchInput}
    onClose={this.passSearchData}
  />
{this.state.searchProgress?<CircularProgress size={40} thickness={7}/>:""}
</div>
  );
  }
}
