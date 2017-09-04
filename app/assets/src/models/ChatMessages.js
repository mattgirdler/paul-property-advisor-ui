import { observable, computed, action } from "mobx";

export default class ChatMessages {
  @observable messages = [];

  @action
  addMessage(message) {
    this.messages.push(message);
  }
}