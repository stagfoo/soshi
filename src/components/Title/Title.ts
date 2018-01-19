import {getRenderer} from '../../core';
export default function Title(props, type = 'dom') : HTMLElement {
  const html = getRenderer(type);
  return html`<h1>${props.text}</h1>`;
}
