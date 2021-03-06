import React from 'react';
import Axios from 'axios';
import Config from 'config';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
const customContentStyle = {
    width: '60%',
    maxWidth: 'none'
};

export default class SaveComponent extends React.Component {

  constructor(props) {
 super(props);
 this.state = {
   open: false,
   openSnackBar:false
 };
}

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleTouchTap = () => {
    this.setState({
      openSnackBar: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      openSnackBar: false,
    });
  };

    saveNewsArticle = () => {
        var url = Config.url + '/save';
        console.log(this.props.newsArticle);
        Axios.post(url, {
            newsArticle: this.props.newsArticle,
            username: this.props.username,
            comments: this.refs.comments.getValue()
        }).then(function(response) {
            if (response.data.saved === true) {
                this.handleTouchTap();
            } else {
                alert('Error in saving')
            }
            console.log(response);
        }.bind(this)).catch(function(error) {
            alert(error);
        });
        this.handleClose();

    };

    render() {
        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onTouchTap = {
                this.handleClose
            } />, < FlatButton label = "Save" primary = {
                true
            }
            onTouchTap = {
                this.saveNewsArticle
            } />
        ];
        const style = {
            margin: 12,
            display: "inline"
        };
        return (
            <div style={style}>
                <RaisedButton label="Save" onTouchTap={this.handleOpen}/>
                <Dialog title={this.props.newsArticle.title} actions={actions} modal={true} contentStyle={customContentStyle} open={this.state.open}>
                    <TextField floatingLabelText="Add comments" row='3' ref='comments'/>
                </Dialog>
                <Snackbar
                  open={this.state.openSnackBar}
                  message="News Saved"
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}
       />
            </div>
        );
    }
}
