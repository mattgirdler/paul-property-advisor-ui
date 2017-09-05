import { observable, computed, action } from "mobx";

export default class Tabs {
  @observable activeTab = 'guide';

  @action
  setActiveTab(activeTab) {
    this.activeTab = activeTab
  }
}