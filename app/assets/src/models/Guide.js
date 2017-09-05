import { observable, computed, action } from "mobx";
import Step from './Step'

export default class Conversation {
  @observable steps = [];

  @action
  addStep(title, text) {
    this.messages.push(new Step(title, text));
  }
}