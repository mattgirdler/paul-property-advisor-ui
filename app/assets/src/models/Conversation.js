import { observable, computed, action } from "mobx";
import MessageModel from './MessageModel'

export default class Conversation {
  @observable messages = [];

  @action
  addMessage(message, bot) {
    this.messages.push(new MessageModel(message, bot));
  }
}