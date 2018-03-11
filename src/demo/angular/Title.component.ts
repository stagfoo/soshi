import { Component, Input } from '@angular/core';
import Components from './soshi';

// Component
@Component({
  selector: 'title-angular',
  template: `${Components.r.title({text: '{{text}}'})}`
})
class TitleAngular {
  @Input() text: string;
}
export default TitleAngular;
