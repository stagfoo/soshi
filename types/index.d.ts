export namespace TitleType {  
  export interface Title {
      el: HTMLElement;
      update: (Object) => Boolean;
      render: (Object) => HTMLElement;
      template: () => HTMLElement;
      props?: Object;
    }
}
