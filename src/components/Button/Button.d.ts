declare class Button {
    el: HTMLElement;
    props: {
        eventName: string;
        text: string;
    };
    constructor(props: any);
    clickEvent(): void;
    template(): any;
    update(props: any): void;
    render(): HTMLElement;
}
export default Button;
