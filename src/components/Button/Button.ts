import {getRenderer} from '../../core';

function clickEvent(eventName) {
      // Create the even
      const event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
      // Listen for the event.
      // target can be any Element or other EventTarget.
      return (e) => { e.target.dispatchEvent(event) };
}
export default function Button(props, html = getRenderer('dom')) : HTMLElement {
  const click = clickEvent(props.eventName);
  return html`<button onclick=${click}>${props.text}</button>`;
}
