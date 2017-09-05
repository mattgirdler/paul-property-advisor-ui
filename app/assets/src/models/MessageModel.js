import { observable } from "mobx";

export default class MessageModel {
  id = Math.random();
  @observable message;
  @observable bot;
  
  constructor(message, bot) {
    this.message = message;
    this.bot = bot;
  }
}
