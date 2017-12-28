declare class Soshi {
    node: HTMLElement;
    props: Object;
    constructor(props: any);
    template(): HTMLElement;
    update(props: any): Boolean;
    render(): HTMLElement;
}
export default Soshi;
