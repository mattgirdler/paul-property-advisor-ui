import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TabPane extends React.Component {
    
    render() {
        const { id, children, tabs } = this.props;

        const style = {
            display: (tabs.activeTab === id) ? 'block' : 'none'
        }

        return (
            <div className="scroll-pane" style={style} id={id}>
                {children}
            </div>
        )
    }
}

export default TabPane;
