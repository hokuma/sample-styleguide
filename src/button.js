import React, { PropTypes, Component } from 'react';

export default class Button extends Component {
  static get propTypes() {
    return {
      onClick: PropTypes.func
    };
　}
  render() {
    return <button onClick={this.props.onClick}>Click</button>;
  }
}
