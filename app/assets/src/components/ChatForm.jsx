import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class ChatForm extends React.Component {
    @observable inputValue = '';

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.store = props.store
        this.tabs = props.tabs

        window.speechSynthesis.onvoiceschanged = () => {
            var synth = window.speechSynthesis;
            this.voices = synth.getVoices();
            this.su = new SpeechSynthesisUtterance()
            this.su.lang = "en";
            this.su.voice = this.voices[0];
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="chat" className="visuallyhidden">Start your chat here</label>
                <input type="text" name="chat" id="chat" placeholder="Type something&hellip;" onChange={this.handleInputChange} value={this.inputValue} />
                <button type="submit">Send</button>
            </form>
        )
    }

    @action
    handleInputChange = e => {
        this.inputValue = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault()

        this.store.addMessage(this.inputValue, false)

        fetch('/api/question', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                question: this.inputValue
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            this.store.addMessage(data.output.text[0], true)

            this.su.text = data.output.text[0];
            window.speechSynthesis.speak(this.su);

            if(data.output.tab) {
                this.tabs.setActiveTab(data.output.tab)
            }
        }.bind(this))

        this.inputValue = '';
    }
}

export default ChatForm;
