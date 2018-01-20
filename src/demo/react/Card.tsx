// import Card from 'components/Card/Card';
// import React, { Component } from 'react';

// class CardReact extends Component {
//   compClass: any;
//   node: HTMLElement;
//   refs: {
//     mount: HTMLElement
//   }
//   constructor(props) {
//     super();
//     this.compClass = new Card(props);
//     this.node = this.compClass.render();
//   }
//   componentWillReceiveProps(nextProps) {
//     this.node = this.compClass.update(nextProps);
//     this.refs.mount.appendChild(this.node);
//   }
//   componentDidMount() {
//     this.refs.mount.appendChild(this.node);
//   }
//   render() {
//     return <div className="react-card" ref="mount" />;
//   }
// }

// export default CardReact;
