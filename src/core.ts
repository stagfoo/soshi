
import Title from 'components/Title/Title';
import List from 'components/List/List';
import Card from 'components/Card/Card';
import Image from 'components/Image/Image';
import Button from 'components/Button/Button';

const dom = require('bel').createElement
const vdom = require('virtual-dom');
const hyperx = require('hyperx')

export function getRenderer(type, customDom?: Function){
    switch (type) {
      case 'vdom':
        return hyperx(vdom.h);
      case 'custom':
        return hyperx(customDom);
      default:
        return hyperx(dom);
    }
}

export default function Soshi (
  options: {
    dom: String
    customDom?: Function,
  }){
  // Store for debuging
  this.domType = options.dom;
  // Select the render for the template lits
  this.builder = getRenderer(options.dom, options.customDom);
  // return function with the renderer passed in
  this.r = {
    'title': (props) => Title(props, this.builder),
    'button': (props) => Button(props, this.builder),
    'card': (props) => Card(props, this.builder),
    'image': (props) => Image(props, this.builder),
    'list': (props => List(props, this.builder))
  }
  // return the list for easy use.
}
//Untested but add your own function,
//function comp(props, html){
//  return html`<p></p>`
//}
// This would then use the rendered your chose on instancing
Soshi.prototype.add = function(name, comp){
  this.r[name] = (props) => comp(props, this.builder);
  return this.r[name]
}
