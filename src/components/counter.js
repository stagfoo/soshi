const yo = require('yo-yo');
function toInteger(number) {
  return Math.round(
    // round to nearest integer
    Number(number) // type cast your input
  );
}
function getRand(min, max) {
  return toInteger(Math.random() * (max - min) + min);
}

class Counter {
  constructor() {
    this.numbers = [];
    this.el = null;
    // this.addEvent = new Event('add_new');
    // this.updateEvent = new Event('updated');
  }
  template(items, self) {
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
  update() {
    // this.el.dispatchEvent(this.updateEvent);
    // add a new random number to our list
    this.numbers.push(getRand(10, 1000));
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
