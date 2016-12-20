import React from 'react'
import Axios from 'axios'
import config from 'Config'
import SaveComponent from './SaveComponent'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DisplayNewsComponent extends React.Component{
  constructor(props){
    super(props);
    this.saveNews=this.saveNews.bind(this);
    }


    saveNews(){
        var comments=this.refs.comments.getValue();
        console.log(config.url);
    }

  render(){
    const style = {
  margin: 12,
};
    var item;
    if(this.props.error!=null){
      return (<p>{this.props.error}</p>)
    }
    else{
       var that=this;
        item=this.props.newsData.data.articles.map(function(news,index){
          return(

             <Card  id='newsCard' key={index}>
                <CardMedia
      overlay={<CardTitle title={news.title} subtitle={news.publishedAt} />}
        >
      <img height="350px"  src={news.urlToImage} />
    </CardMedia>
    <CardText>
      {news.description}
    </CardText>
    <CardActions>
      <SaveComponent style={style} newsArticle={news} username="admin@admin.com"/>
      <RaisedButton label="View More" href={news.url}  style={style} />
    </CardActions>
  </Card>
)
});
return(<div>{item}</div>)
  }
}

}
