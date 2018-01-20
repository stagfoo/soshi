
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
  this.domType = options.dom;
  this.builder = getRenderer(options.dom, options.customDom);

  this.components = {
    'title': (props) => Title(props, this.builder),
    'button': (props) => Button(props, this.builder),
    'card': (props) => Card(props, this.builder),
    'image': (props) => Image(props, this.builder),
    'list': (props => List(props, this.builder))
  }

  return this.components; 
}

Soshi.prototype.add = function(name, comp){
  this.components[name] = (props) => comp(props, this.builder);
  return this.components[name]
}
