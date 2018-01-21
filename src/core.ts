const dom = require('bel').createElement
const vdom = require('virtual-dom');
const hyperx = require('hyperx')

export function getRenderer(type, customDom?: Function){
    switch (type) {
      case 'vdom':
        return hyperx(vdom.h);
      case 'custom':
        return hyperx(customDom);
      case 'plaintext':
        return function(d,v,i) {
          debugger
          return d.join('');
        }
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
  // return functions with the renderer passed in
  // {
  //  title: (props) => Title(props, this.builder);
  // }
  this.r = {}
  // return the list for easy use.
}

//Add your own function,
//function comp(props, html){
//  return html`<p></p>`
//}
// This would then use the rendered your chose on instancing
Soshi.prototype.add = function(name, comp){
  this.r[name] = (props) => comp(props, this.builder);
  return this.r[name]
}
// Load in a list of components at once
Soshi.prototype.load = function(cartidge) {
  this.r = cartidge(this.builder);
}
