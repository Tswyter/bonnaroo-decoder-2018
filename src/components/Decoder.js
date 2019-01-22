import React, { Component } from 'react';
import DecoderInput from './DecoderInput';
import DecodedText from './DecodedText';

export default class Decoder extends Component {
  render() {
    return (
      <div style={{ minHeight: '200px'}}>
        <DecoderInput decode={this.props.decode}/>
        <DecodedText original={this.props.originalText} decoded={this.props.decodedText} />
      </div>
    )
  }
}