const yo = require('yo-yo');
const Title = require('../Title/Title');
type TemplateProps = {
  title: String,
  image: String,
  text: String
}

class Card {
  el: HTMLElement;
  props: TemplateProps;
  title: {
    el: HTMLElement,
    class: {
      update: (Object) => HTMLElement
      render: () => HTMLElement
    }
  }
  constructor(props) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
    this.title = {
      class: new Title(props),
      el: null,
    };
  }
  template(): HTMLElement {
    this.title.class.update({ text: this.props.title });
    return yo`<div class="card">
      <img width="100%" src=${this.props.image} />
     ${this.title.el}
    <p>
      ${this.props.text}
    </p>
    </div>`;
  }
  update(props: TemplateProps): Boolean {
    const prevEl = this.el;
    this.props = { ...this.props, ...props };
    const newView = this.template(); //TODO test doesn't need props
    yo.update(this.el, newView);
    return prevEl.innerHTML == this.el.innerHTML; //TODO test is returns correcct compare
  }
  render(): HTMLElement {
    this.title.el = this.title.class.render();
    this.el = this.template();
    return this.el;
  }
}
export default Card;
