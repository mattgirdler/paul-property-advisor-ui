import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import Message from 'Message';

@observer
class Chat extends React.Component {
  @observable newMessage = "";

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          Chat:
          <input
            type="text"
            value={this.newMessage}
            onChange={this.handleMessage}
          />
          <button type="submit">Send</button>
        </form>
        <hr />
        <ul>
          {this.props.store.messages.map(message => (
            <Message message={message} key={message.id} />
          ))}
        </ul>
      </div>
    );
  }

  @action
  handleMessage = e => {
    this.newMessage = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addMessage(this.newMessagee);
    this.newMessage = "";
    e.preventDefault();
  };
}

export default Chat;
