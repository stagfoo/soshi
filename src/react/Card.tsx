import Card from 'components/Card/Card';
import React, { Component } from 'react';

class CardReact extends Component {
  compClass: any;
  el: HTMLElement;
  refs: {
    mount: HTMLElement
  }
  constructor(props) {
    super();
    this.compClass = new Card(props);
    this.el = this.compClass.render();
  }
  componentWillReceiveProps(nextProps) {
    this.el = this.compClass.update(nextProps);
    this.refs.mount.appendChild(this.el);
  }
  componentDidMount() {
    this.refs.mount.appendChild(this.el);
  }
  render() {
    return <div className="react-card" ref="mount" />;
  }
}

export default CardReact;
