const yo = require('yo-yo');
type TemplateProps = {
  
}
class Title {
  el: HTMLElement,
  
  constructor(props) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
  }
  // investigrate multiple header tags
  // yo`${title}` or yo`<h2>` yo`<h3>`
  template() {
    return yo`<h1>${this.props.text}</h1>`;
  }
  update(props) {
    this.props = props;
    const newView = this.template();
    yo.update(this.el, newView);
  }
  render() {
    this.el = this.template(this.numbers, this);
    return this.el;
  }
}
export default Title;
