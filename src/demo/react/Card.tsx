
import React, { Component } from 'react';
import Components from './soshi';

class CardReact extends Component {
  props: any
  constructor(props) {
    super(props);
  }

  render() {
    return Components.card(this.props);
  }
}

export default CardReact;
