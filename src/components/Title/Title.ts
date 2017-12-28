const yo = require('yo-yo');
import Soshi from '../core'

class Title extends Soshi {
  el: HTMLElement
  props: {
   text: string,
  }
  
  template(): HTMLElement {
    return yo`<h1>${this.props.text}</h1>`;
  }
}
export default Title;
