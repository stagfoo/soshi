export interface Soshi {
  el: HTMLElement;
  update: (Object) => Boolean;
  render: (Object) => HTMLElement;
  template: () => HTMLElement;
  props?: Object;
}
