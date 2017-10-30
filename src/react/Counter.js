// @flow
import Counter from 'components/counter';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CounterReact extends Component {
  render() {
    return new Counter().render();
  }
}

//ReactDOM.render(CounterEl, document.body);
exports.modules = CounterReact;
