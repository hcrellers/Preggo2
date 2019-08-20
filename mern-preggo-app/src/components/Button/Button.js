import React, { Component }  from 'react';

export default class Button extends Component {


render() {
    return(
        <div
            onClick={this.props.onClick}>
            {this.props.label}
        </div>
    )
}
}
