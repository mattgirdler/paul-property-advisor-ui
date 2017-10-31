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
//         window.speechSynthesis.onvoiceschanged = () => {
//            var synth = window.speechSynthesis;
//            this.voices = synth.getVoices();
//            console.log("voices");
//            this.su = new SpeechSynthesisUtterance()
//            console.log("speech");
//            this.su.lang = "en";
//            console.log("language");
//            this.su.voice = this.voices[0];
//        };
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
            //this.su.text = data.output.text[0];
            //window.speechSynthesis.speak(this.su);

            if(data.output.tab) {
                this.tabs.setActiveTab(data.output.tab)
                if(data.output.tab === 'CoalAuthority') {
                    this.guide.addStep(1, 'CoalAuthority', 'Coal Authority', 'Within, or within 2 metres of, the boundry of the property there is 1 mine entry. You should request a Mine Entry Interpretive Report from the Coal Authority before you proceed.', 'warning')
                } else if(data.output.tab === 'KnotweedInfo') {//this references the ID
                  //  this.guide.addStep(2, 'KnotweedInfo', 'Knotweed', 'random text', 'warning')
                } else if(data.output.tab === 'Trees') {//this references the ID
                  //  this.guide.addStep(3, 'Trees', 'Trees', 'random text', 'warning')
                }else if(data.output.tab === 'View') {//this references the ID
                  //  this.guide.addStep(4, 'View', 'View', 'random text', 'warning')
                }else if(data.output.tab === 'Garden') {//this references the ID
                  //  this.guide.addStep(5, 'Garden', 'Garden', 'random text', 'warning')
                }else if(data.output.tab === 'Development') {//this references the ID
                  //  this.guide.addStep(6, 'Development', 'Development', 'random text', 'warning')
                } else {
                }
            }

            if (data.output.update) {
                this.guide.updateStep(data.output.update.key, data.output.update.value, data.output.update.status)
            }
        }.bind(this))

        this.inputValue = '';
    }
}

export default ChatForm;
