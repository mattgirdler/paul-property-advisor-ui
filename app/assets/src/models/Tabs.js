import { observable, computed, action } from "mobx";

export default class Tabs {
  @observable activeTab = 'guide';
  @observable visibleTabs = ['guide', 'traffic', 'Crime', 'CoalAuthority'];

  @action
  setActiveTab(id) {
    this.activeTab = id

    if(!this.visibleTabs.includes(id)) {
        this.visibleTabs.push(id)
    }
  }

  @action
  isTabEnabled(id) {
      return this.visibleTabs.includes(id)
  }
}