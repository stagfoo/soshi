const yo = require('yo-yo');

class Card {
  constructor(props) {
    this.image = props.image;
    this.view = props.view;
  }
  template(props, self) {
    return yo`<div class="randomNumber" >
      Random Numbers in react 
      <ul>
      ${items.map(function(item) {
        return yo`<li>Item Number ${item}</li>`;
      })}
      </ul>
      <button onclick=${() => {
        self.update();
        //   self.el.dispatchEvent(this.addEvent);
      }}>Add Random Number</button>
      </div>`;
  }
  updateProps(props) {
    this.image = image;
    const newTemplate = this.template(props);
  }
  render() {
    this.el = this.template(this.numbers, this);
    return this.el;
  }
}
export default Counter;
