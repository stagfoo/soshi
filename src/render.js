// @flow
import 'mdn-polyfills/Function.prototype.bind'; // 427 bytes
import Showcase from 'components/showcase';
import CardReact from './react/Card';
import React from 'react';
import ReactDOM from 'react-dom';

window.CardTitle = 'testing';
window.CardText = 'lorem Ipsum';
ReactDOM.render(<CardReact title={window.CardTitle} text={window.CardText} />, document.getElementById('mount-point'));

//Showcase();
