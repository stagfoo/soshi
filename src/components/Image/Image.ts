import {getRenderer} from '../../core';

export default function Image(props, html = getRenderer('dom')) : HTMLElement {
  return html`<img src="${props.src}" alt="${props.alt}" height="${props.height}" width="${props.width}" />`;
}
