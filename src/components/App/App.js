import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './App.scss';
import Feed from 'components/Feed';
import Recorder from 'components/Recorder';

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    }
  }

  addMessage = ({ user, message }) => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          user,
          message
        }
      ]
    })
  }

  render() {
    return (
      <div styleName="background">
        <div styleName="container">

          <Feed 
            messages={this.state.messages}
            addMessage={this.addMessage}
          />

          <Recorder />
        </div>
      </div>
    )
  }
}

export default CSSModules(App, styles);