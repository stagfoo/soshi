const yo = require('yo-yo');
type TemplateProps = {
  src: String,
  alt: String,
  height: String,
  width: String,
}
class Image {
  el: HTMLElement
  props: TemplateProps
  constructor(props: TemplateProps) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
  }
  template() {
    return yo`<img 
        src="${this.props.src}"
        alt="${this.props.alt}"
        height="${this.props.height}"
        width="${this.props.width}"
    />`;
  }
  update(props) {
    this.props = props;
    const newView = this.template();
    yo.update(this.el, newView);
  }
  render() {
    this.el = this.template();
    return this.el;
  }
}
export default Image;
