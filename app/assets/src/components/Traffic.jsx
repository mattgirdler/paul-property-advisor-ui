import React, { Component } from "react";
import { observer } from "mobx-react";
import { Alert } from 'react-bootstrap';

const Traffic = observer(({ traffic }) => (
<div className="container">
    <Alert bsStyle="warning">
        <h3>Mineshaft in garden</h3>
        <p>Description here</p>
        <a href="#">Show more details</a>
    </Alert>
    <Alert bsStyle="danger">
        <h3>Mineshaft in garden</h3>
        <p>Description here</p>
        <a href="#">Show more details</a>
    </Alert>
    <Alert bsStyle="success">
        <h3>Mineshaft in garden</h3>
        <p>Description here</p>
        <a href="#">Show more details</a>
    </Alert>
</div>
));

export default Traffic;
