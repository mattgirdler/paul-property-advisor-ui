import React, { Component } from "react";
import { observer } from "mobx-react";

const Message = observer(({ message }) => (
    <div>{todo.title}</div>
));

export default Message;
