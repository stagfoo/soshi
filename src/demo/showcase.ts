import Soshi from '../core'
import componentList from 'components/componentList';
// Get stage location
const stage = document.querySelector('.showcase.yoyo .stage');
// Choose Dom render for components
const comps = new Soshi({ dom: 'dom' });
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
  // Renders using bel because 'dom' was chosen at instance
  stage.appendChild(CardNode);
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
  const SoshiTitle = comps.r.title({text: 'Hello from inside soshi'});
  stage.appendChild(SoshiTitle);
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
  const customNode = comps.r.p({text: 'Hello Custom World'})
  console.log(customNode);
  stage.appendChild(customNode);
}

function Showcase() {
  // Define
  TitleShowcase();
  ButtonShowcase();
  CardShowcase();
  ListShowcase();
  ImageShowcase();
  CustomShowcase();
}
export default Showcase;
