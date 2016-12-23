import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField';

export default class UpdateComponenet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdate: false
        };
    }

    render() {
        var style = {
            "paddingTop": "0px",
            "paddingBottom": "0px"
        }
        return (
            <CardText style={style}>
                {this.state.isUpdate
                    ? <TextField ref="comments" value={this.props.comment} floatingLabelText="Comments"/>
                    : this.props.comment}
            </CardText>
        )
    }

}
