const yo = require('yo-yo');

interface Sosh1i {
    el: HTMLElement;
    update: (Object) => Boolean;
    render: (Object) => HTMLElement;
    template: () => HTMLElement;
    props?: Object;
}

type TemplateProps = {
 text: string 
}
class Soshi {
  el: HTMLElement
  props: {
    text: String
  }
  constructor(
    props
  ) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.render();
  }
  template(): HTMLElement {
    return null;
  }
  
  update(props): Boolean {
    const prevEl = this.el.innerHTML;
    this.props = props;
    const newView = this.template();
    yo.update(this.el, newView);
    return prevEl !== this.el.innerHTML; 
  }
  
  render(): HTMLElement {
    this.el = this.template();
    return this.el;
  }
}
export default Soshi;
