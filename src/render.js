//@flow
//import Slider from 'components/slider';
//import helloWorld from 'components/list';
import Counter from 'components/counter';

//const homeSlider = new Slider(document.body);
//const img = document.createElement('img')
//  homeSlider.render([
//    {name: 'beach3', content: `<img src='test' />` }
//  ]);
//
const counterEl = new Counter().render();
// document.body.appendChild(helloWorld);
document.body.appendChild(counterEl);

counterEl.addEventListener('updated', function (e) {
  console.log(e, 'update');
  // e.target matches elem
}, false);

counterEl.addEventListener('add_new', function (e) {
  console.log(e, 'add_new');
  // e.target matches elem
}, false);

