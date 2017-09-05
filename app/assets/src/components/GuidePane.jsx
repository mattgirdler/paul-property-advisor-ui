import React, { Component } from "react";
import { observer } from "mobx-react";

import TabPane from './TabPane';
import GuideItem from './GuideItem';

const GuidePane = observer(({ tabs, guide }) => (
    <TabPane id="guide" tabs={tabs}>
        {guide.steps.map(s => (
            <GuideItem step={s} key={Math.random()}/>
        ))}
    </TabPane>
));

export default GuidePane;
