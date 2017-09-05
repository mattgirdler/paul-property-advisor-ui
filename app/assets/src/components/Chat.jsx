import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Message from './Message';

@observer
class Chat extends React.Component {
  render() {
    return (
      <div ref="scrollpane" className="scroll-pane chat-scroll-pane">
        <p><small><center>Conversation started 4 Sept, 13:03</center></small></p>
        <ul className="Chat">
          {this.props.store.messages.map(m => (
            <Message message={m} key={Math.random()}/>
          ))}
        </ul>
      </div>
    );
  }

  componentDidUpdate() {
    this.refs.scrollpane.scrollTop = this.refs.scrollpane.scrollHeight;
  }
}

export default Chat;
