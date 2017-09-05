import React, { Component } from "react";

class Panel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        active: false
    }

    this.handleClick = this.handleClick.bind(this)
  }
    
  render() {
    const { level, title, children } = this.props

    var classes = 'panel panel--guide panel--collapsible'
    classes += ' panel--' + level

    if (this.state.active) {
        classes += ' panel--active'
    }

    return (
        <div className={classes}>
            <h2><a href="#" onClick={this.handleClick}>{title}</a></h2>
            <div className="panel__contents">
                {children}
            </div>
        </div>
    );
  }

  handleClick(e) {
    e.preventDefault()
    this.setState((prevState, props) => ({
        active: !prevState.active 
    }));
  }
}

export default Panel;
