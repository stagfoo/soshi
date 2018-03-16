import 'core-js';
import 'zone.js';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Component
@Component({
  selector: 'angular-showcase',
  template: `
  <card-angular
    [title]="'Angular Card'"
    [image]="'https://i.pinimg.com/736x/75/fb/d6/75fbd6b7db279bf412e13d0fe4f7dfb3--cyberpunk-games-ghost-in-the-shell.jpg'"
    [text]="'description of card-angular'">
  </card-angular>
  `,
})
class AppComponent {
}

// Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import TitleAngular from './Title.component';
import CardAngular from './Card.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TitleAngular,
    CardAngular,
  ],
  bootstrap: [
    AppComponent
  ]
})
class AppModule {
}

function AngularShowcase() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

export default AngularShowcase;
