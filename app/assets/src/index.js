import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { Tabs, Tab, Grid, Row, Col, Navbar, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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
  flexGrow: 3
}

const flexColumnSide = {
  flexGrow: 1,
  position: 'relative'
}

const stuckToBottom = {
  position: 'absolute',
  bottom: 0,
  left: 0
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

        <Tabs defaultActiveKey={2} id="main-tabs">
          <Tab eventKey={1} title="Guide">Tab 1 content</Tab>
          <Tab eventKey={2} title="Traffic">Tab 2 content</Tab>
          <Tab eventKey={3} title="Other">Tab 3 content</Tab>
          <Tab eventKey={4} title="Other">Tab 4 content</Tab>
        </Tabs>

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
