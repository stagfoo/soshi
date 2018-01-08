const yo = require('yo-yo');
import Soshi from '../core'

class List extends Soshi {
  el: HTMLElement;
  props: {
    items: Array<any>
  }
  constructor(props){
    super(props);
  }
  //Move into listItem comp later
  childTemplate(d) {
    return yo`<li>${d}</li>`;
  }
  template() {
    return yo`<ul>${this.props.items.map((data) => this.childTemplate(data)) }</ul>`;
  }
}
export default List;
