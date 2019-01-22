import React, { Component } from 'react';

export default class DecodedText extends Component {
  render() {
    return (
      <div>
        <p>{this.props.original}</p>
        <p>{this.props.decoded}</p>
      </div>
    )
  }
}