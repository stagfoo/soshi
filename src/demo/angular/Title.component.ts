import { Component, Input } from '@angular/core';
import Components from './soshi';

// Component
@Component({
  selector: 'title-angular',
  template: `${Components.r.title({text: '{{text}}'})}`
})
export class TitleAngular {
  @Input() text: string;
}
