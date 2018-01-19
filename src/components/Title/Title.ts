import {getRenderer} from '../../core';
export default function Title(type, props) : HTMLElement {
  const html = getRenderer(type);
  return html`<h1>${props.text}</h1>`;

}
