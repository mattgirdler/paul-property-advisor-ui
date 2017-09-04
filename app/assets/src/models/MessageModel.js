import { observable } from "mobx";

export default class TodoModel {
  id = Math.random();
  @observable message;
  
  constructor(title) {
    this.message = message;
  }
}
