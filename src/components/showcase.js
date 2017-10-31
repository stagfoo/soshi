import Title from './Title/Title';
import Card from './Card/Card';

function CardShowcase() {
  const CardEl = new Card({
    title: 'Card Title',
    text:
      'Spicy jalapeno bacon ipsum dolor amet boudin pork loin pork bacon pig sirloin kielbasa rump ham hock ham. Spare ribs rump pork belly, ground round porchetta t-bone biltong pancetta tail. Pork belly biltong landjaeger prosciutto ham alcatra spare ribs bacon ham hock turducken tail picanha meatball rump porchetta. Pig capicola tail, ham tongue drumstick burgdoggen.',
  });
  CardEl.render();
  window.CardEl = CardEl;
  document.body.appendChild(CardEl.el);
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
  CardShowcase();
}
export default Showcase;
