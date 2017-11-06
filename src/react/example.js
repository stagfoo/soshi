import Counter from 'components/counter';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const counterEl = new Counter().render();
class CounterEl extends Component {
  render() {
    return counterEl;
  }
}
ReactDOM.render(CounterEl, document.body);
