import React, { Component } from 'react';

export default class DecoderInput extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.decode} />
      </div>
    )
  }
}