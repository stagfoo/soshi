const yo = require('yo-yo');
type TemplateProps = {
 text: string 
}
class Title {
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
