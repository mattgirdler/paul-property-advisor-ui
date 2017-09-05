import { observable } from "mobx";

export default class Step {
  @observable title;
  @observable text;
  
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}
