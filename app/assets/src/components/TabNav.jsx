import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TabNav extends React.Component {
// const TabNav = observer(({ tabnav }) => (

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.tabs = props.tabs
    }


    render() {
        const { title, id, children, visible } = this.props;

        var style = {
            display: this.tabs.isTabEnabled(id) ? 'block' : 'none'
        }

        var classes = 'tabs__link'
        if (this.tabs.activeTab === id) {
            classes += ' tabs__link--active'
        }

        return (
            <li className="tabs__item" style={style}>
              <a className={classes} href="#id" onClick={this.handleClick}>{title}</a>
            </li>
        )
    }

    handleClick(e) {
        e.preventDefault()
        this.tabs.setActiveTab(this.props.id)
    }
}

export default TabNav;
