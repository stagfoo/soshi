import React from 'react';
import ReactDom from 'react-dom';
import CardReact from './Card'
export default function ReactShowcase() {
  ReactDom.render(
    <CardReact
      title={'React Title'}
      image="https://i.redditmedia.com/RfnwNLFV3QkkmgR7JX6-yr_QFOEPFjIYThaXRaVE-eg.jpg?w=497&s=2ca1dbf89fac3178ff7c5dceb26faab6"
      text={'react card description text'}
    />,
    document.querySelector('.showcase.react .stage')
  );
}
