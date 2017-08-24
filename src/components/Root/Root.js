import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Root.scss';

class Root extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default CSSModules(Root, styles);