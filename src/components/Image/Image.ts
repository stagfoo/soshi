import {getRenderer} from '../../core';

export default function Image(props, type = 'dom') : HTMLElement {
  const html = getRenderer(type);
  return html`<img src="${props.src}" alt="${props.alt}" height="${props.height}" width="${props.width}" />`;
}
