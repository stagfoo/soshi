// @flow
// import Slider from 'components/slider';
// import helloWorld from 'components/list';
import Counter from 'components/counter';
import list from 'components/yoyolist';
// const homeSlider = new Slider(document.body);
// const img = document.createElement('img')
//  homeSlider.render([
//    {name: 'beach3', content: `<img src='test' />` }
//  ]);
//
// const List = require('./components/basic-yoyo.js');
const ListEl = list(['grizzly', 'polar', 'brown']);
const counterEl = new Counter().render();
// document.body.appendChild(helloWorld);
document.body.appendChild(counterEl);
document.body.appendChild(ListEl);

counterEl.addEventListener(
  'updated',
  e => {
    console.log(e, 'update');
    // e.target matches elem
  },
  false
);

counterEl.addEventListener(
  'add_new',
  e => {
    console.log(e, 'add_new');
    // e.target matches elem
  },
  false
);
