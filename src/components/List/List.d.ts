import Soshi from '../core';
declare class List extends Soshi {
    el: HTMLElement;
    props: {
        items: Array<any>;
    };
    constructor(props: any);
    childTemplate(d: any): any;
    template(): any;
}
export default List;
