  export interface Title {
  el: HTMLElement;
  update: (Object) => Boolean;
  render: (Object) => HTMLElement;
  template: () => HTMLElement;
  props?: Object;
  }

export = Title; // this exports a function that returns objects of type Emitter, and a type called Emitter
