import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import GuidePane from './components/GuidePane'
import Traffic from './components/Traffic'
import Panel from './components/Panel'

import Chat from './components/Chat';
import Conversation from "./models/Conversation";
import ChatForm from './components/ChatForm';

import TabNav from './components/TabNav'
import TabPane from './components/TabPane'

import Tabs from "./models/Tabs";
import Guide from './models/Guide';

const store = new Conversation();
const tabs = new Tabs();
const guide = new Guide();

render(
  <div className="wrapper">
    <DevTools />

    <div className="header">HM Land Registry <strong>Property Advisor</strong></div>

    <div className="faux-table">
      <div className="faux-table__row">
        <div className="faux-table__cell faux-table__cell--main">
          <div className="panel__empty">
            <h1>Welcome</h1>

            <p>Try saying "Hello" to Paul in the chat window.</p>
          </div>

          <TabPane id="traffic" tabs={tabs}>
            <Panel title="Ground Hazards" level="warning">
              <p>The property has been identified as being within a coal mining affected area and
                  as such we recommend that a coal mining report is purchased from the Coal Authority
                  to better understand the implications. Further information can be obtained
                  from <a href="https://www.gov.uk/government/organisations/the-coal-authority">here</a>.</p>
              <p>The property is an intermediate probability radon area as between 3 to 5% of homes are
                  estimated to be at or above the action level. This does not necessarily mean that
                  the property has high radon or that there is cause for concern. Public Health England
                  advises that homes in affected areas should be tested. For further information
                  please contact Public Health England or go to <a href="www.ukradon.org">UK Radon</a>.</p>
            </Panel>


            <Panel title="Deed" level="warning">
              <p>The land in this title is subject to a perpetual yearly rentcharge of £12.12.
                Because it is a freehold property the charge can be redeemed on purchase with a single payment of £30.</p>
            </Panel>

            <Panel title="Restricted Covenant (Business)" level="warning">
              <p>You are unable to trade from your premises.
                Therefore you will not be able to run a business from your home.</p>
            </Panel>

            <Panel title="Restricted Covenant (External)" level="warning">
              <p>You are prohibited from displaying your washing in a lewd and lascivious manner.</p>
            </Panel>

            <Panel title="Flood" level="incomplete">
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
            </Panel>

            <Panel title="Contaminated Land" level="incomplete">
              <p>Landmark Information Group consider it unlikely that the property would be designated "contaminated land"
                within the meaning of Part 2A of the Environmental Protection Act 1990.
                Therefore, there should be no adverse effect on the security of the property for normal lending purposes.
                Please note that no physical site inspection or survey has been carried out or is proposed.</p>
              <p>To understand more about contaminated land and the various sources they have reviewed,
                please refer to the Contaminated Land section in the viewer. For further information or help,
                please contact your professional advisor or Landmark Customer Services on 0844 844 9966.</p>
            </Panel>

            <Panel title="Energy and Infrastructure" level="success">
              <p>Landmark Information Group have not identified any Energy & Infrastructure factors at or near to the property.
                The search is limited to the following factors: High Speed 2 (HS2), Crossrail 1, Wind Farms and Turbines,
                Solar Farms, Other Renewable Power Plants, Areas Licensed for Exploration of Oil and Gas, Oil and Gas Drilling Wells.
                There may be other forms of energy developments planned in your area - you should contact your Local Authority
                for further information.</p>
              <p>For additional information or help, please contact your professional adviser or Landmark Customer Services on 0844 844 9966.</p>
            </Panel>

            <Panel title="Other Influential Factors" level="success">
              <p>No areas designated as having environmental or historical importance have been identified within 250 metres of the property.
                Please note that no physical property inspection or survey has been carried out or is proposed.</p>
              <p>For further information or help, please contact your professional adviser or Landmark Customer Services on 0844 844 9966.</p>
            </Panel>
          </TabPane>

          <GuidePane tabs={tabs} guide={guide}/>

          {/* <TabPane id="guide" tabs={tabs}>
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
          </TabPane> */}

          <TabPane id="CoalAuthority" tabs={tabs}>
          <div className="coal-container">
          <img src="./images/Coal.png" alt="Coal Mining Map" className="coal-image"/>
          <p>Within, or within 2 metres of, the boundry of the property there is 1 mine entry, the approximate position of which is shown on the enquiry boundry plot.</p>
          <p>There is no record of what steps, if any, have taken to treat the mine entry.</p>
          <p>For an additional fee, the Coal Authority can provide a Mine Entry Interpretive Report.</p>
          </div>
          </TabPane>

        <TabPane id="KnotweedInfo" tabs={tabs}>
          <div className="coal-container">
          <img src="./images/Knotweed.jpg" alt="Knotweed Image" className="coal-image"/>
          <p>Contact Natural England. Information available here:
            <a href= 'https://www.gov.uk/guidance/prevent-the-spread-of-harmful-invasive-and-non-native-plants'> https://www.gov.uk/guidance/prevent-the-spread-of-harmful-invasive-and-non-native-plants</a>
            </p>
          </div>
        </TabPane>
          <TabPane id="Title" tabs={tabs}>
            <div className="coal-container">
            <img src="./images/Title.jpg" alt="Title Image" className="coal-image"/>


            <p>The boundary of the property can be found on the image above. If you want to order a high quality image
            request <a href='#'> here </a>
            </p>
            </div>
          </TabPane>
          <TabPane id="Trees" tabs={tabs}>
            <div className="coal-container">
            <img src="./images/Trees.jpg" alt="Tree Image" className="coal-image"/>
            <p>Try viewing the property with Google Maps, there is a marker on the map directing you to the property. If there are overhanging trees you can contact a tree surgeon to
find out about the roots. There maybe a cost associated with tree surgeon only.
              </p>
            </div>
            </TabPane>


              <TabPane id="View" tabs={tabs}>
                <div className="coal-container">
                <img src="./images/View.jpg" alt="View Image" className="coal-image"/>
                <p>Here is the front of the property, according to Google maps streetview
                  </p>
                </div>
                </TabPane>

                <TabPane id="Garden" tabs={tabs}>
                  <div className="coal-container">
                  <img src="./images/Garden.jpg" alt="Garden Image" className="coal-image"/>
                  <p>Here is an image of the garden associated to the property.  </p>
                  </div>
                  </TabPane>
                  <TabPane id="Development" tabs={tabs}>
                    <div className="coal-container">
                    <img src="./images/Development.png" alt="Development Image" className="coal-image"/>
                    <p>Here is a map of the local development in the area
                      </p>
                    </div>
                    </TabPane>
          <TabPane id="Crime" tabs={tabs}>
            <div className="crime-table">
              <h2>June 2017 crime and ASB breakdowns and trends for Cotham</h2>

              <div className="crime-tables">
                <table>
                  <tbody>
                    <tr>
                      <th>ASB</th>
                      <th>Burglary</th>
                      <th>Robbery</th>
                      <th>Vehicle</th>
                      <th>Violent</th>
                      <th>Shoplifting</th>
                      <th>CD&A</th>
                      <th>Other Theft</th>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>6</td>
                      <td>0</td>
                      <td>15</td>
                      <td>13</td>
                      <td>9</td>
                      <td>7</td>
                      <td>18</td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <tbody>
                    <tr>
                      <th>Drugs</th>
                      <th>Bike Theft</th>
                      <th>Theft From Person</th>
                      <th>Weapons</th>
                      <th>Public Order</th>
                      <th>Other</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>3</td>
                      <td>0</td>
                      <td>1</td>
                      <td>5</td>
                      <td>0</td>
                      <td>102</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="crime-map">
              <img src="/images/crime-stats.png" />
            </div>
          </TabPane>
        </div>

        <div className="faux-table__cell faux-table__cell--side chat__cell">
          <Chat store={store} />
        </div>
      </div>

      <div className="faux-table__row">
        <div className="faux-table__cell faux-table__cell--main faux-table__cell--shrink-height faux-table__cell--bottom">
          <ul className="tabs">
            <TabNav id="guide" title="Guide" tabs={tabs} />
            <TabNav id="traffic" title="Risk" tabs={tabs} />
            <TabNav id="CoalAuthority" title="Coal" tabs={tabs} />
            <TabNav id="KnotweedInfo" title="Knotweed" tabs={tabs} />
            <TabNav id="Trees" title="Trees" tabs={tabs} />
            <TabNav id="Title" title="Boundary" tabs={tabs} />
            <TabNav id="View" title="View" tabs={tabs} />
            <TabNav id="Garden" title="Garden" tabs={tabs} />
            <TabNav id="Development" title="Development" tabs={tabs} />
            <TabNav id="Crime" title="Crime" tabs={tabs} />
          </ul>
        </div>
        <div className="faux-table__cell faux-table__cell--side faux-table__cell--shrink-height send-message__cell">
          <ChatForm store={store} tabs={tabs} guide={guide} />
        </div>
      </div>
    </div>

    {/* <TodoList store={store} /> */}
  </div>,
  document.getElementById("root")
);

window.store = store;
