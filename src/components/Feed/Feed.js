import React, { Component } from 'react';

class Feed extends Component {
  componentDidMount() {
    if (this.props.messages.length == 0) {
      setTimeout(() => {
        this.props.addMessage({
          user: false,
          message: 'Welcome!'
        });
      }, 3000);
    }
  }

  render() {

    console.log('props', this.props);

    return (
      <div>
        Feed
      </div>
    )
  }
}

export default Feed