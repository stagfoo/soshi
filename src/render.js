// @flow
// import Slider from 'components/slider';
// import helloWorld from 'components/list';
import Counter from 'components/counter';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import list from 'components/yoyolist';

// const homeSlider = new Slider(document.body);
// const img = document.createElement('img')
//  homeSlider.render([
//    {name: 'beach3', content: `<img src='test' />` }
//  ]);

//
// const List = require('./components/basic-yoyo.js');
// const ListEl = list(['grizzly', 'polar', 'brown']);

const counterEl = new Counter().render();
class CounterEl extends Component {
  render() {
    return counterEl;
  }
}
ReactDOM.render(CounterEl, document.body);

// document.body.appendChild(helloWorld);
document.body.appendChild(counterEl);
//document.body.appendChild(ListEl);
