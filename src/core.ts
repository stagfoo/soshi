const dom = require('bel').createElement
const vdom = require('virtual-dom');
const hyperx = require('hyperx')
const diff = require('morphdom');

function plaintext(s, ...v) {
  return s.map(((str,i) => str + (v[i] || ''))).join('');
}

export function getRenderer(type, customDom?: Function){
    switch (type) {
      case 'vdom':
        return hyperx(vdom.h);
      case 'custom':
        return hyperx(customDom);
      case 'plaintext':
        return plaintext;
      default:
        return hyperx(dom);
    }
}

export default function Soshi (
  options: {
    dom: String
    customDom?: Function,
    tags: boolean,
  }){
  // Store for debuging
  this.domType = options.dom;
  if(options.tags) {
    this.domType = 'bel';
    this.customDom = null;
  }
  // Select the render for the template lits
  this.builder = getRenderer(options.dom, options.customDom);
  // return functions with the renderer passed in
  // {
  //  title: (props) => Title(props, this.builder);
  // }
  this.r = {}
  this.registerElement = registerElement
  // return the list for easy use.
}

// TODO: change to extending
function registerElement(name, element, attr){
  // Create a new object based of the HTMLElement prototype
  const XElm = Object.create(HTMLElement.prototype);

  let anchor
  // Set up the element.innerHTML = '';
  XElm.createdCallback = function() {
      this.createShadowRoot();
      const anchor = document.createElement('div');
      this.shadowRoot.appendChild(anchor)
      anchor.appendChild(element(attr));
  };
  XElm.attributeChangedCallback = function(name, oldValue, newValue) {
    attr[name] = newValue ? newValue: oldValue;
    diff(this.shadowRoot.firstChild, element(attr));
  }
  // Register the new element.
  document.registerElement(`soshi-${name}`, { prototype: XElm });
}
//Add your own function,
//function comp(props, html){
//  return html`<p></p>`
//}
// This would then use the rendered your chose on instancing
Soshi.prototype.add = function(name, comp){
  this.r[name] = (props) => comp(props, this.builder);
  this.registerElement(name, this.r[name], {})
  return this.r[name]
}
// Load in a list of components at once
Soshi.prototype.load = function(cartidge) {
  this.r = cartidge(this.builder);
}
