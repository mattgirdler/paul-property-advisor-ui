import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Message from './Message';

@observer
class Chat extends React.Component {
  @observable newMessage = "";

  render() {
    return (
        <ul className="Chat">
          {this.props.store.messages.map(m => (
            <Message message={m}/>
          ))}
        </ul>
    );
  }

  @action
  handleMessage = e => {
    this.newMessage = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addMessage(this.newMessage, false);
    this.newMessage = "";
    e.preventDefault();
  };
}

export default Chat;
