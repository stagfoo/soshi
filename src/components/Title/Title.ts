import {getRenderer} from '../../core';

export default function Title(props, html = getRenderer('dom')) : HTMLElement {
  return html`<h1>${props.text}</h1>`;
}
