import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import CircularProgress from 'material-ui/CircularProgress';
import SearchContainer from 'SearchContainer'
import DisplayNewsComponent from 'DisplayNewsComponent'
import NavComponent from 'NavComponent'
export default class NewGetterComponent extends React.Component{

    constructor(){
    super();
    this.handleSearchInput=this.handleSearchInput.bind(this);
    this.state={
      newsData:'',
      error:'',
      isHome:true
    }
  }

  render(){
    var style={
      "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "center",
    "alignItems": "center"
    }
    var imgStyle={"paddingBottom":"5px"};
    var searchBoxClass='';
    if(this.state.isHome){
      searchBoxClass='searchBox';
    }
    return(
      <div>
      <div className={searchBoxClass}>
        <div style={style} >
      {this.state.isHome?<div style={imgStyle}><img src="./images/logo.jpg"/></div>:" "}
    <SearchContainer  onSearchInput={this.handleSearchInput}/>
    </div>
     </div>
  <DisplayNewsComponent newsData={this.state.newsData} error={this.state.error}/>
  </div>
    );
  }

  handleSearchInput(inputNewsSource){
    const NEWS_API_URL='https://newsapi.org/v1/articles?apiKey=f0c1205477404fde9aa56e2dbda30d6b';
    var encodedSource=encodeURIComponent(inputNewsSource);
    var requestUrl= `${NEWS_API_URL}&source=${encodedSource}`;
    var that=this;
    axios.get(requestUrl).then(function(response){
      console.log(response)
      this.setState({newsData:response,error:null,isHome:false});
    }.bind(this))
    .catch(function(error){
      console.log(error.message);
      this.setState({newsData:null,error:error.message});
    }.bind(this))
  }
}
