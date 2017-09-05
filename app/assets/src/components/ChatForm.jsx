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
        this.guide = props.guide

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
            <form onSubmit={this.handleSubmit} ref="form">
                <label htmlFor="chat" className="visuallyhidden">Start your chat here</label>
                <input autoComplete="off" type="text" name="chat" id="chat" placeholder="Type something&hellip;" onChange={this.handleInputChange} value={this.inputValue} />
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
        this.refs.form.classList.add('loading')

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

            this.refs.form.classList.remove('loading')

            this.su.text = data.output.text[0];
            window.speechSynthesis.speak(this.su);

            if(data.output.tab) {
                this.tabs.setActiveTab(data.output.tab)
            }

            if (data.output.update) {
                this.guide.updateStep(data.output.update.key, data.output.update.value, data.output.update.status)
            }
        }.bind(this))

        this.inputValue = '';
    }
}

export default ChatForm;
