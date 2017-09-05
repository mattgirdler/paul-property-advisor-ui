import { observable, computed, action } from "mobx";
import Step from './Step'

export default class Conversation {
  @observable steps = [
    {key: "property", title:"Choose your property", text:"", status:"incomplete"},
    {key: "offer", title:"Make an offer", text:"Not complete", status:"incomplete"},
    {key: "insure", title:"Insure property", text:"Not complete", status:"incomplete"},
    {key: "mortgage", title:"Instant mortgage", text:"Not complete", status:"incomplete"},
    {key: "accept", title:"Offer acceptance", text:"Not complete", status:"incomplete"},
    {key: "move", title:"Move in", text:"Not complete", status:"incomplete"}
  ];

  @action
  addStep(position, key, title, text, status) {
    this.steps.splice(position, 0, new Step(key, title, text, status));
  }

  @action
  updateStep(key, text, status) {
    const stepToUpdate = this.steps.forEach((item) => {
      if(item.key === key) {
        item.text = text
        item.status = status
      }
    })
  }
}