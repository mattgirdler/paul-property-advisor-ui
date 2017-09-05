import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Guide from './components/Guide'
import Traffic from './components/Traffic'
import TabNav from './components/TabNav'
import TabPane from './components/TabPane'

import ChatMessages from "./models/ChatMessages";
import Tabs from "./models/Tabs";

const store = new ChatMessages();
const tabs = new Tabs();

render(
  <div className="wrapper">
    <DevTools />

    <div className="header">HM Land Registry <strong>Property Advisor</strong></div>

    <div className="faux-table">
      <div className="faux-table__row">
        <div className="faux-table__cell faux-table__cell--main">

          <TabPane id="traffic" tabs={tabs}>
          RAWRAWR
          </TabPane>
          <TabPane id="guide" tabs={tabs}>
            <div className="scroll-pane">
              <div className="panel panel--complete">
                <h2>Choose your property</h2>
                <p>Flag 5, Little Mountains Road, Bristol</p>
              </div>

              <div className="panel panel--complete">
                <h2>Choose your property</h2>
                <p>Flag 5, Little Mountains Road, Bristol</p>
              </div>

              <div className="panel panel--complete">
                <h2>Choose your property</h2>
                <p>Flag 5, Little Mountains Road, Bristol</p>
              </div>

              <div className="panel panel--incomplete">
                <h2>Choose your property</h2>
                <p>Flag 5, Little Mountains Road, Bristol</p>
              </div>

              <div className="panel panel--warning">
                <h2>Choose your property</h2>
                <p>Flag 5, Little Mountains Road, Bristol</p>
              </div>
            </div>
          </TabPane>
        </div>

        <div className="faux-table__cell faux-table__cell--side">
          <div className="scroll-pane">
            <p><small><center>Conversation started 4 Sept, 13:03</center></small></p>
            <ul className="chat">
              <li className="chat__item chat__item--bot">Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit.</li>
              <li className="chat__item">Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit.</li>
              <li className="chat__item chat__item--bot">Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit.</li>
              <li className="chat__item">Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit.</li>
              <li className="chat__item chat__item--bot">Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit.</li>
              <li className="chat__item">Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit.</li>
              <li className="chat__item chat__item--bot">Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit.</li>
              <li className="chat__item">Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit. Lorem ipsum dolor sit amet consectetur adipsicing elit.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="faux-table__row">
        <div className="faux-table__cell faux-table__cell--main faux-table__cell--shrink-height faux-table__cell--bottom">
          <ul className="tabs">
            <TabNav id="guide" title="Guide" tabs={tabs} />
            <TabNav id="traffic" title="Traffic" tabs={tabs} />
          </ul>
        </div>
        <div className="faux-table__cell faux-table__cell--side faux-table__cell--shrink-height">
          <form>
            <label htmlFor="chat" className="visuallyhidden">Start your chat here</label>
            <input type="text" name="chat" id="chat" placeholder="Type something&hellip;" />
            <button>Send</button>
          </form>
        </div>
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
