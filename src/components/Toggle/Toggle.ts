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
    wrapper: `
    display:block;
    background: #d1d1d1;
    height: 20px;
    position:relative;
    margin: 10px;
    min-width: 50px;`,
    perl: `
    border-radius: 100%;
    height: 40px;
    width:40px;
    display:block;
    background: #999;
    overflow:hidden;
    top: -10px;
    left: -5px;
    position: absolute;
    `
  }
  return disabled ? css : {
    wrapper: ``,
    perl: ``
  };
}

export default function Toggle(props, html = getRenderer('dom')) : HTMLElement {
  const click = clickEvent(props.eventName);
  return html`<div style="${styles(props.styles).wrapper}" onclick=${click}>
    <span style="${styles(props.styles).perl}""></span>
  </div>`;
}
