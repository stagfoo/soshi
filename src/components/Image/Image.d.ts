import Soshi from '../core';
declare class Image extends Soshi {
    el: HTMLElement;
    props: {
        src: String;
        alt: String;
        height: Number;
        width: Number;
    };
    template(): any;
}
export default Image;
