
import {getRenderer} from '../../core';

function ListItem(html, text){
  return html`<li>${text}</li>`;
}

export default function List(props, type = 'dom') : HTMLElement {
  const html = getRenderer(type);
  return html`<ul>${props.items.map(data => ListItem(html, data)) }</ul>`;
}
