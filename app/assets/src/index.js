import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Guide from './components/Guide'
import Traffic from './components/Traffic'

import Chat from './components/Chat';
import Conversation from "./models/Conversation";
import ChatForm from './components/ChatForm';

import TabNav from './components/TabNav'
import TabPane from './components/TabPane'

import Tabs from "./models/Tabs";

const store = new Conversation();
const tabs = new Tabs();

render(
  <div className="wrapper">
    <DevTools />

    <div className="header">HM Land Registry <strong>Property Advisor</strong></div>

    <div className="faux-table">
      <div className="faux-table__row">
        <div className="faux-table__cell faux-table__cell--main">

          <TabPane id="traffic" tabs={tabs}>
            <div className="panel panel--guide panel--warning">
              <h2>Ground Hazards</h2>
              <div>
                <p>The property has been identified as being within a coal mining affected area and
                  as such we recommend that a coal mining report is purchased from the Coal Authority
                  to better understand the implications. Further information can be obtained
                  from <a href="https://www.gov.uk/government/organisations/the-coal-authority">here</a>.</p>
                <p>The property is an intermediate probability radon area as between 3 to 5% of homes are
                  estimated to be at or above the action level. This does not necessarily mean that
                  the property has high radon or that there is cause for concern. Public Health England
                  advises that homes in affected areas should be tested. For further information
                  please contact Public Health England or go to <a href="www.ukradon.org">UK Radon</a>.</p>
              </div>
            </div>

            <div className="panel panel--guide panel--warning">
              <h2>Deed</h2>
              <p>The land in this title is subject to a perpetual yearly rentcharge of £12.12.
                Because it is a freehold property the charge can be redeemed on purchase with a single payment of £30.</p>
            </div>

            <div className="panel panel--guide panel--warning">
              <h2>Restricted Covenant (Business)</h2>
              <p>You are unable to trade from your premises.
                Therefore you will not be able to run a business from your home.</p>
            </div>

            <div className="panel panel--guide panel--warning">
              <h2>Restricted Covenant (External)</h2>
              <p>You are prohibited from displaying your washing in a lewd and lascivious manner.</p>
            </div>

            <div className="panel panel--guide panel--incomplete">
              <h2>Flood</h2>
              <h3>Professional Opinion</h3>
              <p>Landmark Information Group have identified the property to be within an area that is at minimal or no risk of flooding.</p>
              <p>The homebuyer may wish to investigate any additional flood risks to the property highlighted on the flood gauges using the online viewer.</p>
              <h3>Flood Defences</h3>
              <p>No river/coastal flood defences have been identified or considered as part of Landmark's overall risk of flooding.</p>
              <h3>Recommendations</h3>
              <ol>
                <li>Ask the seller and other nearby residents if flooding has historically occurred in the area.
                  If it has, why did it occur, what was the impact and what areas were affected.</li>
              </ol>
              <h3>Insurance</h3>
              <p>Buildings and contents insurance should be available and affordable.
                However, we recommend you obtain buildings and contents insurance terms before exchange of contracts to confirm this.</p>
              <h3>Flood Risk</h3>
              <p>Flood risk is based on probability; to understand more about flood and the information reviewed,
                including flood protection measures, please explore the online viewer or visit the
                'Know Your Flood Risk Website <a href="www.knowyourfloodrisk.co.uk/sites/default/files/FloodGuide_ForHomeowners.pdf">here</a>.</p>
            </div>

            <div className="panel panel--guide panel--warning">
              <h2>Contaminated Land</h2>
              <p>Landmark Information Group consider it unlikely that the property would be designated "contaminated land"
                within the meaning of Part 2A of the Environmental Protection Act 1990.
                Therefore, there should be no adverse effect on the security of the property for normal lending purposes.
                Please note that no physical site inspection or survey has been carried out or is proposed.</p>
              <p>To understand more about contaminated land and the various sources they have reviewed,
                please refer to the Contaminated Land section in the viewer. For further information or help,
                please contact your professional advisor or Landmark Customer Services on 0844 844 9966.</p>
            </div>

            <div className="panel panel--guide panel--success">
              <h2>Energy and Infrastructure</h2>
              <p>Landmark Information Group have not identified any Energy & Infrastructure factors at or near to the property.
                The search is limited to the following factors: High Speed 2 (HS2), Crossrail 1, Wind Farms and Turbines,
                Solar Farms, Other Renewable Power Plants, Areas Licensed for Exploration of Oil and Gas, Oil and Gas Drilling Wells.
                There may be other forms of energy developments planned in your area - you should contact your Local Authority
                for further information.</p>
              <p>For additional information or help, please contact your professional adviser or Landmark Customer Services on 0844 844 9966.</p>
            </div>

            <div className="panel panel--guide panel--success">
              <h2>Other Influential Factors</h2>
              <p>No areas designated as having environmental or historical importance have been identified within 250 metres of the property.
                Please note that no physical property inspection or survey has been carried out or is proposed.</p>
              <p>For further information or help, please contact your professional adviser or Landmark Customer Services on 0844 844 9966.</p>
            </div>
          </TabPane>
          <TabPane id="guide" tabs={tabs}>
            <div className="panel panel--complete">
              <h2>Choose your property</h2>
              <p>21 Cotham Lawn Road, Bristol</p>
            </div>

            <div className="panel panel--incomplete">
              <h2>Make an Offer</h2>
              <p>Not complete</p>
            </div>

            <div className="panel panel--incomplete">
              <h2>Insure Property</h2>
              <p>Not complete</p>
            </div>

            <div className="panel panel--incomplete">
              <h2>Instant Mortgage</h2>
              <p>Not complete</p>
            </div>

            <div className="panel panel--incomplete">
              <h2>Offer Acceptance</h2>
              <p>Not complete</p>
            </div>

            <div className="panel panel--incomplete">
              <h2>Move In</h2>
              <p>Not complete</p>
            </div>
          </TabPane>
          <TabPane id="CoalAuthority" tabs={tabs}>
            <div className="panel panel--guide panel--success">
              <h2>Choose your property</h2>
              <p>21 Cotham Lawn Road, Bristol</p>
            </div>
            
          </TabPane>

          <TabPane id="Crime" tabs={tabs}>
            <div className="panel panel--guide panel--success">
              <h2>Choose your property</h2>
              <p>21 Cotham Lawn Road, Bristol</p>
            </div>
            
          </TabPane>

        </div>

        <div className="faux-table__cell faux-table__cell--side">
          <Chat store={store}/>
        </div>
      </div>

      <div className="faux-table__row">
        <div className="faux-table__cell faux-table__cell--main faux-table__cell--shrink-height faux-table__cell--bottom">
          <ul className="tabs">
            <TabNav id="guide" title="Guide" tabs={tabs} />
            <TabNav id="traffic" title="Traffic" tabs={tabs} />
            <TabNav id="CoalAuthority" title="CoalAuthority" tabs={tabs} />
            <TabNav id="Crime" title="Crime" tabs={tabs} />
          </ul>
        </div>
        <div className="faux-table__cell faux-table__cell--side faux-table__cell--shrink-height">
          <ChatForm store={store} />
        </div>
      </div>
    </div>

    {/* <TodoList store={store} /> */}
  </div>,
  document.getElementById("root")
);

window.store = store;
