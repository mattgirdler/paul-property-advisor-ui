import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { Grid, Row, Col, Navbar, Tabs, Tab, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// import TodoList from "./components/TodoList";
// import TodoListModel from "./models/TodoListModel";
// import TodoModel from "./models/TodoModel";

// const store = new TodoListModel();

render(
  <div>
    <DevTools />

    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          PAUL
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>

    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <Tabs defaultActiveKey={2} id="main-panel-tabs">
            <Tab eventKey={1} title="Guide">Guide</Tab>
            <Tab eventKey={2} title="Traffic lights">Traffic lights</Tab>
          </Tabs>
        </Col>
        <Col xs={6} md={4}>
        Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />Chat log<br />

        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Type here</ControlLabel>
            <FormControl
              type="text"
              value="hello"
              placeholder="Enter text"
            />
          </FormGroup>
        </form>
        </Col>
      </Row>
    </Grid>

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
