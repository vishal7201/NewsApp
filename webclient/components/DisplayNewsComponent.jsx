import React from 'react';
import config from 'Config';
import SaveComponent from './SaveComponent';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DisplayNewsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.saveNews = this.saveNews.bind(this);
    }

    saveNews() {
        var comments = this.refs.comments.getValue();
        console.log(config.url);
    }

    render() {
        const style = {
            fontSize: "20px",
            color: "#424242"
        };
        var item;
        if (this.props.error != null) {
            return (
                <p></p>
            )
        } else {
            var that = this;
            item = this.props.newsData.data.articles.map(function(news, index) {
                return (

                    <Card id='newsCard' key={index}>
                        <CardMedia overlay={< CardTitle title = {
                            news.title
                        }
                        subtitle = {
                            news.publishedAt
                        } />}>
                            <img height="350px" src={news.urlToImage}/>
                        </CardMedia>
                        <CardText style={style}>
                            {`"${news.description}"`}
                        </CardText>
                        <CardActions>
                            <SaveComponent newsArticle={news} username="admin@admin.com"/>
                            <RaisedButton label="View More" href={news.url}/>
                        </CardActions>
                    </Card>
                )
            });
            return (
                <div>{item}</div>
            )
        }
    }

}
