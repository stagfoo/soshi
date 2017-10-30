import Title from './Title/Title';

function Showcase() {
  //Define
  const TitleEl = new Title({ text: 'Example' });
  TitleEl.render();
  TitleEl.update({ text: 'Updated' });

  //Render
  document.body.appendChild(TitleEl.el);
}
export default Showcase;
