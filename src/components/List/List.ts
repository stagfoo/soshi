const yo = require('yo-yo');

interface Soshi {
    el: HTMLElement;
    update: (Object) => Boolean;
    render: () => HTMLElement;
    template: () => HTMLElement;
    props?: Object;
}
type TemplateProps = {
  items: Array<string>
}

class List implements Soshi {
  el: HTMLElement;
  props: TemplateProps;
  
  constructor(props) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
  }
  //Move into listItem comp later
  childTemplate(d) {
    return yo`<li>${d}</li>`;
  }
  template() {
    return yo`<ul>${this.props.items.map((data) => { return this.childTemplate(data)}}</ul>`;
  }
  update(props) {
    this.props = props;
    const newView = this.template();
    yo.update(this.el, newView);
    return true
  }
  render() {
    this.el = this.template();
    return this.el;
  }
}
export default List;
