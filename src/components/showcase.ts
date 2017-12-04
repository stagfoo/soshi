import Title from './Title/Title';
import Card from './Card/Card';
import Button from './Button/Button';

const stage = document.querySelector('.showcase.yoyo .stage');
function CardShowcase() {
  const CardEl = new Card({
    title: 'Card Title',
    image: 'https://i.redd.it/i2lfna2rkqxz.jpg',
    text:
      'Spicy jalapeno bacon ipsum dolor amet boudin pork loin pork bacon pig sirloin kielbasa rump ham hock ham. Spare ribs rump pork belly, ground round porchetta t-bone biltong pancetta tail. Pork belly biltong landjaeger prosciutto ham alcatra spare ribs bacon ham hock turducken tail picanha meatball rump porchetta. Pig capicola tail, ham tongue drumstick burgdoggen.',
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
