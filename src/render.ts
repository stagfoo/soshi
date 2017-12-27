const yo = require('yo-yo');
import 'mdn-polyfills/Function.prototype.bind'; // 427 bytes
import Showcase from 'components/showcase';
import ReactShowcase from './react/showcase';
import Soshi from './core';

ReactShowcase();
Showcase();

// Example Base Class
class testComp extends Soshi {
  template(): HTMLElement {
    return yo`<h6>${this.props.text}</h6>`;
  } 
}

// Testing base class
window['Soshi'] = Soshi
window['testComp'] = testComp
