const yo = require('yo-yo');

class Soshi {
  node: HTMLElement
  props: Object
  constructor(
    props
  ) {
    this.node = null;
    this.props = props;
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.render();
  }
  template(): HTMLElement {
    return null;
  }
  
  update(props): Boolean {
    const prevEl = this.node.innerHTML;
    this.props = props;
    const newView = this.template();
    yo.update(this.node, newView);
    return prevEl !== this.node.innerHTML; 
  }
  
  render(): HTMLElement {
    this.node = this.template();
    return this.node;
  }
}
export default Soshi;
