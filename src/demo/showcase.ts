import Soshi from '../core'

// Get stage location
const stage = document.querySelector('.showcase.yoyo .stage');
// Choose Dom render for components
const comps = new Soshi({ dom: 'dom' });

function CardShowcase() {
  //Create Props for Card
  const props = {
    title: "soshi card",
    image: "https://heroichollywood.b-cdn.net/wp-content/uploads/2017/03/GHOST-1024x564.png?x42694",
    text: "Vaporwave is a microgenre of electronic music and an Internet meme that emerged in the early 2010s.[17] The music typically features a fascination with 1980s and 1990s styles of mood music such as smooth jazz, elevator music, R&B, and lounge music"
  }
  // Get the Card function from inside Soshi
  const CardNode = comps.card(props);
  // Renders using bel because 'dom' was chosen at instance
  stage.appendChild(CardNode);
}

function ButtonShowcase() {
  const ButtonNode = comps.button({
    text: 'Button Text',
    eventName: 'login',
  });
  // add event listner to check custom event name
  ButtonNode.addEventListener('login', function (e) { console.log(e) }, false);
  stage.appendChild(ButtonNode);
}

function TitleShowcase() {
  const SoshiTitle = comps.title({text: 'Hello from inside soshi'});
  stage.appendChild(SoshiTitle);
}

function ListShowcase() {
  const ListNode = comps.list({items: ['test', 'test', 'more testing'] });
  // Render
  stage.appendChild(ListNode);
}

 function ImageShowcase() {
   const ImageEl = comps.image({ src: 'https://static.gamespot.com/uploads/screen_kubrick/1557/15576725/3272262-blade-runner-2049-image.jpg', alt: 'n64 logo', height: 300, width: 300 });
   // Render
   window["ImageEl"] = ImageEl;
   stage.appendChild(ImageEl);
}

function Showcase() {
  // Define
  TitleShowcase();
  ButtonShowcase();
  CardShowcase();
  ListShowcase();
  ImageShowcase();
}
export default Showcase;
