import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { Nav, NavItem, Tabs, Tab, Grid, Row, Col, Navbar, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Guide from './components/Guide'
import Traffic from './components/Traffic'

import ChatMessages from "./models/ChatMessages";

const store = new ChatMessages();

const fullHeightStyle = {
  height: '100%'
}

const flexRow = {
  display: 'flex',
  flexWrap: 'wrap',
  height: '100%'
}

const flexColumnPrimary = {
  flexGrow: 1
}

const flexColumnSide = {
  flexGrow: 0,
  flexShrink: 0,
  position: 'relative'
}

const stuckToBottom = {
  position: 'absolute',
  bottom: 0,
  left: 0
}

const tabsContainerStyle = {
  position: 'relative'
}

const tabsStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%'
}

render(
  <div className="container-fluid" style={fullHeightStyle}>
    <DevTools />

    <Navbar collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          HM Land Registry <strong>Property Advisor</strong>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>

    <div style={flexRow}>
      <div style={flexColumnPrimary}>

        <Tab.Container id="main-tabs" defaultActiveKey="traffic">
          <div>
            <Nav bsStyle="pills" style={tabsStyle}>
              <NavItem eventKey="guide">
                Guide
              </NavItem>
              <NavItem eventKey="traffic">
                Traffic
              </NavItem>
            </Nav>
            
            <Tab.Content>
              <Tab.Pane eventKey="guide">
                <Guide />
              </Tab.Pane>
              <Tab.Pane eventKey="traffic">
                <Traffic />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>

      <div style={flexColumnSide}>
        Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />

        <form style={stuckToBottom}>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Type here</ControlLabel>
            <FormControl
              type="text"
              value="hello"
              placeholder="Enter text"
            />
          </FormGroup>
        </form>
        </div>
      </div>

    {/* <TodoList store={store} /> */}
  </div>,
  document.getElementById("root")
);


// store.addTodo("Get Coffee");
// store.addTodo("Write simpler code");
// store.todos[0].finished = true;

// setTimeout(() => {
//   store.addTodo("Get a cookie as well");
// }, 2000);

// playing around in the console
// window.store = store;
