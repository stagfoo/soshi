import { getRenderer } from '../../core';
import Title from '../Title/Title';
import Image from '../Image/Image';

export default function Card(props, type = 'dom'): HTMLElement {
  const html = getRenderer(type);
  return html`<div class="card">
  ${Image({src:props.image, width:'100%'})}
  ${Title({text: props.title}, type)}
  <p>${props.text}</p>
  </div>`;
}
