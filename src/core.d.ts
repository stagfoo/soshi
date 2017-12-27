declare class Soshi {
    el: HTMLElement;
    props: {
        text: String;
    };
    constructor(props: any);
    template(): HTMLElement;
    update(props: any): Boolean;
    render(): HTMLElement;
}
export default Soshi;
