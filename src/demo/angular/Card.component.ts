import { Component, Input } from '@angular/core';
import Components from './soshi';

// Component
@Component({
  selector: 'card-angular',
  template: `${Components.r.card({title:'{{title}}', image:'{{image}}', text: '{{text}}'})}`
})
class CardAngular {
  @Input() title: string;
  @Input() image: string;
  @Input() text: string;
}

export default CardAngular;
