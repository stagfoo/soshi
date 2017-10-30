const yo = require('yo-yo');

class Counter {
  constructor() {
    this.el = null;
    this.numbers = [];
    this.update = this.update.bind(this);
  }
  template(items) {
    return yo`<div class="randomNumber" >
      Random Numbers in react 
      <ul>
      ${items.map(item => yo`<li>Item Number ${item}</li>`)}
      </ul>
      <button onclick=${this.update}>Add Random Number</button>
      </div>`;
  }
  update() {
    // add a new random number to our list
    this.numbers.push(4);
    // construct a new list and efficiently diff+morph it into the one in the DOM
    const newList = this.template(this.numbers, this);
    yo.update(this.el, newList);
  }
  render() {
    this.el = this.template(this.numbers, this);
    return this.el;
  }
}
export default Counter;
