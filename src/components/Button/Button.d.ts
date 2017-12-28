import Soshi from '../core';
declare class Button extends Soshi {
    el: HTMLElement;
    props: {
        eventName: string;
        text: string;
    };
    constructor(props: any);
    clickEvent(): void;
    template(): any;
}
export default Button;
