import { observable } from "mobx";

export default class MessageModel {
  @observable title;
  @observable text;
  
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}
