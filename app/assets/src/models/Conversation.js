import { observable, computed, action } from "mobx";
import MessageModel from './MessageModel'

export default class Conversation {
  @observable messages = [
    {
      message: 'Hi I\'m Paul! Seems like you\'re looking to find out some information about buying a property? I\'m going to build a personalised guide for you, but first it would be great to know if you have much experience buying properties?',
      bot: true
    }
  ];

  @action
  addMessage(message, bot) {
    this.messages.push(new MessageModel(message, bot));
  }
}