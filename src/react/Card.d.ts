import { Component } from 'react';
declare class CardReact extends Component {
    compClass: any;
    el: HTMLElement;
    refs: {
        mount: HTMLElement;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    render(): any;
}
export default CardReact;
