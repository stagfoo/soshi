const yo = require('yo-yo');
// Move to common types
interface Soshi {
    el: HTMLElement;
    update: (Object) => Boolean;
    render: (Object) => HTMLElement;
    template: () => HTMLElement;
    props?: Object;
}

type TemplateProps = {
 text: string 
}
class Title implements Soshi {
  el: HTMLElement
  props: TemplateProps
  constructor(props: TemplateProps) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
  }
  template(): HTMLElement {
    return yo`<h1>${this.props.text}</h1>`;
  }
  update(props): Boolean {
    const prevEl = this.el.innerHTML;
    this.props = props;
    const newView = this.template();
    yo.update(this.el, newView);
    return prevEl == this.el.innerHTML; 
    //TODO test is returns correcct compare
  }
  render(): HTMLElement {
    this.el = this.template();
    return this.el;
  }
}
export default Title;
