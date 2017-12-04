const yo = require('yo-yo');

class Image {
  constructor(props) {
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
    this.el = this.template(this.numbers, this);
    return this.el;
  }
}
export default Image;
