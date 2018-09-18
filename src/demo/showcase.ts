import Soshi from '../core'
import componentList from 'components/componentList';
import bodyTag from './styles'
const morphdom = require('morphdom');
const patch = require('virtual-dom/patch')
// Get stage location
const stage = document.querySelector('.showcase.yoyo .stage');
// Choose Dom render for components
const comps = new Soshi({
  dom: 'bel',
  tags: true
});
comps.load(componentList);
function CardShowcase() {
  //Create Props for Card
  const props = {
    title: "soshi card",
    image: "https://heroichollywood.b-cdn.net/wp-content/uploads/2017/03/GHOST-1024x564.png?x42694",
    text: "Vaporwave is a microgenre of electronic music and an Internet meme that emerged in the early 2010s.[17] The music typically features a fascination with 1980s and 1990s styles of mood music such as smooth jazz, elevator music, R&B, and lounge music"
  }
  // Get the Card function from inside Soshi
  const CardNode = comps.r.card(props);
  console.log(CardNode);

  // stage.appendChild(test);
}

function ButtonShowcase() {
  const ButtonNode = comps.r.button({
    text: 'Button Text',
    eventName: 'login',
  });
  // add event listner to check custom event name
  ButtonNode.addEventListener('login', function (e) { console.log(e) }, false);
  stage.appendChild(ButtonNode);
}

function TitleShowcase() {
  comps.registerElement('title', comps.r.title, {text: 'More from inside soshi'});
  // Renders using bel because 'dom' was chosen at instance
  const test = document.createElement('soshi-title');
  stage.appendChild(test);
}

function ListShowcase() {
  const ListNode = comps.r.list({items: ['test', 'test', 'more testing'] });
  // Render
  stage.appendChild(ListNode);
}

 function ImageShowcase() {
   const ImageNode = comps.r.image({ src: 'https://static.gamespot.com/uploads/screen_kubrick/1557/15576725/3272262-blade-runner-2049-image.jpg', alt: 'n64 logo', height: 300, width: 300 });
   // Render
   stage.appendChild(ImageNode);
}
function customComp(props, html){
  return html`<p>${props.text}</p>`;
}
function CustomShowcase() {
  comps.add('p', customComp);
  console.log(comps)
  const customNode = document.createElement('soshi-p');
  customNode.setAttribute('text', 'hello custom world')
  console.log(customNode);
  stage.appendChild(customNode);
}

function Showcase() {
  // Define
  document.body.appendChild(bodyTag);
  TitleShowcase();
  // ButtonShowcase();
  // CardShowcase();
  // ListShowcase();
  // ImageShowcase();
  CustomShowcase();
}
export default Showcase;
