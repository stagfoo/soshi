import Soshi from '../core';
declare class Title extends Soshi {
    el: HTMLElement;
    props: {
        text: string;
    };
    template(): HTMLElement;
}
export default Title;
