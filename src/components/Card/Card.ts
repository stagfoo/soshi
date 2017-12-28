const yo = require('yo-yo');
import Title from '../Title/Title';
import Soshi from '../core'

class Card extends Soshi {
  el: HTMLElement;
  props: {
    title: string,
      image: string,
      text: string
  }
  title: {
    node: HTMLElement,
    class: any //look at interfaces again
  }

  template(): HTMLElement {
    //TODO Fix
    const title = new Title({text: this.props.title});
    return yo`<div class="card">
      <img width="100%" src=${this.props.image} />
     ${title.node}
    <p>
      ${this.props.text}
    </p>
    </div>`;
  }
}
export default Card;
