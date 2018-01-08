import Title from './Title/Title';
import Card from './Card/Card';
import Button from './Button/Button';
import List from './List/List';
import Image from './Image/Image';

const stage = document.querySelector('.showcase.yoyo .stage');
function CardShowcase() {
  const props = {
    title: "soshi card",
    image: "https://78.media.tumblr.com/425b54637a9bb4845ee75b1f4e313375/tumblr_orfzviZEqq1wp0r4no1_1280.jpg",
    text: "Vaporwave is a microgenre of electronic music and an Internet meme that emerged in the early 2010s.[17] The music typically features a fascination with 1980s and 1990s styles of mood music such as smooth jazz, elevator music, R&B, and lounge music"
  }
  const CardEl = new Card(props);
  CardEl.render();
  window["CardEl"] = CardEl;
  stage.appendChild(CardEl.node);
}
function ButtonShowcase() {
  const ButtonEl = new Button({
    text: 'Button Text',
    eventName: 'login',
  });
  ButtonEl.render();
  window["ButtonEl"] = ButtonEl;
  stage.appendChild(ButtonEl.node);
}
function TitleShowcase() {
  const TitleEl = new Title({ text: 'Example' });
  TitleEl.render();
  TitleEl.update({ text: 'Updated' });
  // Render
  stage.appendChild(TitleEl.node);
}

function ListShowcase() {
  const ListEl = new List({items: ['test', 'test', 'more tsting'] });
  ListEl.update({items: ['updated test list', 'more items', 'less oldness']});
  // Render
  stage.appendChild(ListEl.node);
}

function ImageShowcase() {
  const ImageEl = new Image({ src: 'https://i.redd.it/4sm0zg9kl8501.png', alt: 'n64 logo', height: 300, width: 300 });
  ImageEl.update({ src: 'http://i.imgur.com/m1e7mBg.jpg', alt: 'n64 logo', height: 300, width: 300 });
  // Render
  window["ImageEl"] = ImageEl;
  stage.appendChild(ImageEl.node);
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
