import { observable, computed, action } from "mobx";

export default class ChatMessages {
  @observable messages = [{message:"XXXXXXXXXX", bot: true},{message:"YYYYYYYYYYYYYYY", bot: false}];

  @action
  addMessage(message, bot) {
    this.messages.push(new MessageModel(message, bot));
  }
}