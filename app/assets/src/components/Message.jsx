import React, { Component } from "react";
import { observer } from "mobx-react";

const Message = ({message}) => (
    <li className={message.bot ? "chat__item chat__item--bot" : "chat__item"}>{message.message}</li>
);

export default Message;
