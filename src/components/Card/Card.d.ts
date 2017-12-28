import Soshi from '../core';
declare class Card extends Soshi {
    el: HTMLElement;
    props: {
        title: string;
        image: string;
        text: string;
    };
    title: {
        node: HTMLElement;
        class: any;
    };
    template(): HTMLElement;
}
export default Card;
