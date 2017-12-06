const yo = require('yo-yo');

class Button {
  el: HTMLElement;
  props: {
    eventName: string,
    text: string,
  }
  constructor(props) {
    this.el = null;
    this.props = props;
    this.update = this.update.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
  }
  clickEvent() {
    // Create the even
    const event = document.createEvent('Event');
    event.initEvent(this.props.eventName, true, true);
    // Listen for the event.
    // target can be any Element or other EventTarget.
    this.el.dispatchEvent(event);
    console.log(this.props.eventName);
  }
  template() {
    return yo`<button onclick=${this.clickEvent} >
          ${this.props.text}
    </button>`;
  }
  update(props) {
    this.props = props;
    const newView = this.template();
    yo.update(this.el, newView);
  }
  render() {
    this.el = this.template();
    return this.el;
  }
}
export default Button;
