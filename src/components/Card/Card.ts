const yo = require('yo-yo');
import Title from '../Title/Title';

type TemplateProps = {
  title: string,
  image: string,
  text: string
}

class Card {
  el: HTMLElement;
  props: TemplateProps;
  title: {
    el: HTMLElement,
      class: any //TODO fix interfaces
   }
  constructor(props: TemplateProps) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
    this.title = {
      class: new Title({text: props.title}),
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
    const prevEl = this.el.innerHTML;
    this.props = { ...this.props, ...props };
    const newView = this.template(); //TODO test doesn't need props
    yo.update(this.el, newView);
    return prevEl == this.el.innerHTML; //TODO test is returns correcct compare
  }
  render(): HTMLElement {
    this.title.el = this.title.class.render();
    this.el = this.template();
    return this.el;
  }
}
export default Card;
