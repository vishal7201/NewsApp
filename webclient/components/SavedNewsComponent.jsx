import React from 'react';
import Axios from 'axios';
import {hashHistory} from 'react-router';
import Config from 'config';
import {
    Card,
    CardActions,
    CardHeader,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

export default class SavedNewsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            savedNews: [],
            id: ''
        }
        this.changeIsUpdate = this.changeIsUpdate.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.deleteNews = this.deleteNews.bind(this);
    }

    componentDidMount() {
        this.getSavedNews();
    }
    getSavedNews() {
        var url = Config.url + '/savedNews?username=admin@admin.com';
        console.log(url);
        Axios.get(url).then((response) => {
          if(response.redirect==true){
            hashHistory.push('/login');
          }
            if (response.data.length === 0) {}
            this.setState({savedNews: response.data});
        }).catch((error) => {

        });
    }
    changeIsUpdate(idValue) {
        this.setState({id: idValue});
    }
    handleComment(e) {
        e.preventDefault();
        var url = Config.url + '/save';
        var comments = this.refs.comments.getValue();
        var newsId = this.state.id;
        Axios.put(url, {
            newsId: newsId,
            comments: comments
        }).then((response) => {
            this.getSavedNews();
            this.setState({id: ''})
        }).catch((error) => {
            alert(error);
        })
    }
    deleteNews(newsId) {
        Axios.delete(`${Config.url}/save/${newsId}`).then((response) => {
            this.getSavedNews();
        }).catch((error) => {
        });
        this.handleTouchTap();
    }
    handleTouchTap = () => {
        this.setState({open: true});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        var style = {
            "paddingTop": "0px",
            "paddingBottom": "0px"
        }
        console.log(this.state.savedNews);
        var items = this.state.savedNews.map((news) => {
            return (
                <Card id='newsCard'>
                    <CardHeader title={news.newsArticle.title} subtitle={news.newsArticle.publishedAt} avatar={news.newsArticle.urlToImage}/>
                    <CardTitle subtitle="Description"/>
                    <CardText style={style}>{news.newsArticle.description}</CardText>
                    {this.state.id === news._id
                        ? ""
                        : <CardTitle subtitle="Comments"/>}
                    <CardText style={style}>{this.state.id === news._id
                            ? <form onSubmit={this.handleComment}>
                                    <TextField ref="comments" fullWidth="true" defaultValue={news.comments} floatingLabelText="Comments"/>
                                </form>
                            : news.comments}</CardText>
                    <CardActions>
                        {this.state.id === news._id
                            ? " "
                            : <FlatButton label="Update" onClick={() => this.changeIsUpdate(news._id)}/>}
                        <FlatButton label="Delete" onClick={() => this.deleteNews(news._id)}/>
                        <Snackbar open={this.state.open} message="News Deleted" autoHideDuration={2000} onRequestClose={this.handleRequestClose}/>
                    </CardActions>
                </Card>

            );
        });
        return (
            <div>
                {items}
            </div>
        )
    }
}
