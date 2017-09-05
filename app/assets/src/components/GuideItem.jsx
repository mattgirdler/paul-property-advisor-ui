import React, { Component } from "react";
import { observer } from "mobx-react";

const GuideItem = observer(({step}) => (

    <div className={"panel panel--"+step.status}>
        <h2>{step.title}</h2>
        <p>{step.text}</p>
    </div>
));

export default GuideItem;
