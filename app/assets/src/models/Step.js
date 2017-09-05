import { observable } from "mobx";

export default class Step {
  @observable key;
  @observable title;
  @observable text;
  @observable status;
  
  constructor(key, title, text, status) {
    this.key = key;
    this.title = title;
    this.text = text;
    this.status = status;
  }
}
