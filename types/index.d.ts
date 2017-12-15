export namespace Title {  
  export interface Title {
      el: HTMLElement;
      update: (Object) => Boolean;
      render: (Object) => HTMLElement;
      template: () => HTMLElement;
      props?: Object;
    }
}
