import {getRenderer} from '../../core';

function clickEvent(eventName) {
  // Create the even
  const event = document.createEvent('Event');
  event.initEvent(eventName, true, true);
  // Listen for the event.
  // target can be any Element or other EventTarget.
  return (e) => { e.target.dispatchEvent(event) };
}

function styles(disabled: boolean) {
  const css = {
    wrapper: ``,
    perl: ``
  }
  return disabled ? css : {
    wrapper: ``,
    perl: ``
  };
}

export default function Toggle(props, html = getRenderer('dom')) : HTMLElement {
  const click = clickEvent(props.eventName);
  return html`<div style="${styles(props.styles).wrapper}" onclick=${click}>
    <span class="${styles(props.styles).perl}""></span>
  </div>`;
}
