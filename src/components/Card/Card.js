const yo = require('yo-yo');
const Title = require('../Title/Title');

class Card {
  constructor(props) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
    this.title = {
      class: new Title(props),
      el: null,
    };
  }
  template() {
    const title = this.title.class.update({ text: this.props.title });
    return yo`<div class="card">
      <img width="100%" src=${this.props.image} />
     ${this.title.el}
    <p>
      ${this.props.text}
    </p>
    </div>`;
  }
  update(props) {
    this.props = { ...this.props, ...props };
    const newView = this.template(this.props);
    yo.update(this.el, newView);
  }
  render() {
    this.title.el = this.title.class.render();
    this.el = this.template(this.numbers, this);
    return this.el;
  }
}
export default Card;
