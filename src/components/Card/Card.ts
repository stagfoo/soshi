import { getRenderer } from '../../core';
import Title from '../Title/Title';
import Image from '../Image/Image';

export default function Card(props, html = getRenderer('dom')): HTMLElement {
  return html`<div class="card">
  ${Image({src:props.image, width:'100%'}, html)}
  ${Title({text: props.title}, html)}
  <p>${props.text}</p>
  </div>`;
}
