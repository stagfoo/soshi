const yo = require('yo-yo');

class Title {
  constructor(props) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
  }
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
