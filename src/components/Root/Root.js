import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Root.scss';

import ChatBubble from 'components/ChatBubble';
import Recorder from 'components/Recorder';

class Root extends Component {
  render() {
    return (
      <div>
        <ChatBubble icon="bot" />

        <Recorder />
      </div>
    )
  }
}

export default CSSModules(Root, styles);