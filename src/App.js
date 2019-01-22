import React, { Component } from 'react';
import './App.css';
import Decoder from './components/Decoder';

const alphabet = {
  'a': 'f',
  'b': 'r',
  'c': 'k',
  'd': 'm',
  'e': 'q',
  'f': 'l',
  'g': 't',
  'h': 'a',
  'i': 'h',
  'j': 'g',
  'k': 'p',
  'l': 'z',
  'm': 'i',
  'n': 'j',
  'o': 'e',
  'p': 'x',
  'q': 'v',
  'r': 'b',
  's': 'd',
  't': 's',
  'u': 'n',
  'v': 'c',
  'w': 'o',
  'x': 'u',
  'y': 'w',
  'z': 'y'
};

const numbers = {
  '1': 'z',
  '2': 'q',
  '3': 'm',
  '4': 'd',
  '5': 'l',
  '6': 'b',
  '7': 'o',
  '8': 'v',
  '9': 'u',
  '10': 'j',
  '11': 'c',
  '12': 'g',
  '13': 'e',
  '14': 'x',
  '15': 'n',
  '16': 'i',
  '17': 's',
  '18': 'r',
  '19': 'h',
  '20': 'k',
  '21': 'y',
  '22': 'f',
  '23': 'w',
  '24': 't',
  '25': 'p',
  '26': 'a',
  '-': '',
}

const symbols = {
  '~': 'y',
  '=': 'd',
  '!': 'm',
  ':': 'h',
  ';': 'q',
  '@': 'x',
  '#': 'p',
  '<': 'j',
  '>': 'l',
  '$': 'c',
  '%': 't',
  '[': 'v',
  ']': 'e',
  '^': 'i',
  '&': 'w',
  '{': 'k',
  '}': 'b',
  '*': 'q',
  '(': 'f',
  ')': 'a',
  '\\': 'g',
  '/': 'u',
  '-': 'z',
  '+': 'n',
  '©': 's',
  '€': 'r'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.decode = this.decode.bind(this);
  }
  detectCodeType(character) {
    if (typeof Object.keys(alphabet).find(key => key === character)) {
      return 'alphabet';
    } else if (typeof Object.keys(numbers).find(key => key === character)) {
      return 'numbers';
    } else if (typeof Object.keys(symbols).find(key => key === character)) {
      return 'symbols';
    } else {
      return 'Is this some kind of alien language?';
    }
  }
  decode(e) {
    const originalInput = e.target.value.toLowerCase();
    const decodedGroups = originalInput.split(' ');
    const decodedText = 
      decodedGroups.map(group => {
        const codeType = this.detectCodeType(group.split('')[0]);
        switch(codeType) {
          case "alphabet":
            const characters = group.split('').map(char => char.toLowerCase());
            return characters.map(character => 
              alphabet[character] ? 
              alphabet[character] : 
              character)
              .join('');
          case "numbers":
            const words = group.split('-').map(character => 
              numbers[character] ?
              numbers[character] : 
              character)
              .join('');
            return words;
          case "symbols":
            const symChars = group.split(''); 
            return symChars.map(character => 
              symbols[character] ? 
              symbols[character] : 
              character)
              .join('');
          default:
            return originalInput.length > 0 ? 
              'You wrote something... but what?' : 
              'Nothing to decode!';
        }
      }).join(' ');
      this.setState({
        orig: originalInput,
        deco: decodedText
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bonnaroo Decoder</h1>
          <p>Copy/paste the secret codes from Bonnaroo to reveal the text!</p>
        </header>
        <Decoder decode={this.decode} originalText={this.state.orig} decodedText={this.state.deco} />
      </div>
    );
  }
}

export default App;
