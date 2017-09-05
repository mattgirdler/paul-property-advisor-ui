import { observable } from "mobx";

export default class Steps {
  @observable title;
  @observable text;
  
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}
