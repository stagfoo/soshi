import Title from './Title/Title';
import Card from './Card/Card';
import Button from './Button/Button';

const stage = document.querySelector('.showcase.yoyo .stage');
function CardShowcase() {
  const CardEl = new Card({
   title: String,
   image: String,
   text: String 
  });
  CardEl.render();
  window.CardEl = CardEl;
  stage.appendChild(CardEl.el);
}
function ButtonShowcase() {
  const ButtonEl = new Button({
    text: 'Button Text',
    clickName: 'login',
  });
  ButtonEl.render();
  window.ButtonEl = ButtonEl;
  document.body.appendChild(ButtonEl.el);
}
function TitleShowcase() {
  const TitleEl = new Title({ text: 'Example' });
  TitleEl.render();
  TitleEl.update({ text: 'Updated' });
  // Render
  document.body.appendChild(TitleEl.el);
}

function Showcase() {
  // Define
  TitleShowcase();
  ButtonShowcase();
  CardShowcase();
}
export default Showcase;
