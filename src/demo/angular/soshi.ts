import Soshi from '../../core';
// import Renderer2 from '@angular/core';
import componentList from 'components/componentList'

const Components = new Soshi({
  dom: 'plaintext'
});
Components.load(componentList);
export default Components;
