import React, { ChangeEvent, Component, createRef, FocusEvent, FormEvent, KeyboardEvent, RefObject } from "react";
import './Contact.scss';
import { Element } from 'react-scroll';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import submitContactForm from '../../api/form';

declare var grecaptcha: any;

export default class Contact extends Component<{}, {
    subject: string,
    message: string,
    name: string,
    email : string
}> {
    captchaScript: HTMLScriptElement|null = null;
    holdPlaceholder: string = '';
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    textareaField: RefObject<HTMLTextAreaElement> = createRef();
    componentDidMount() {
        this.captchaScript = document.createElement("script")
        this.captchaScript.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_API_KEY}`;
        document.body.appendChild(this.captchaScript);
    }
    componentWillUnmount() {
        this.captchaScript?.remove();
        this.captchaScript = null;
    }
    submitContactForm = (e: FormEvent) => {
        e.preventDefault();
        if (grecaptcha) {
            grecaptcha.ready(() => {
                grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_API_KEY, {action: 'submit'}).then((token:any) => {
                    submitContactForm(token, this.state);
                })
            });
        }
    }
    onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        switch(e.target.name) {
            case 'subject':
                return this.setState({subject: e.target.value});
            case 'message':
                let oldWord = this.state.message;
                this.setState({message: e.target.value});
                return this.textareaGrowthWithText(oldWord, e.target.value);
            case 'name':
                return this.setState({name: e.target.value});
            case 'email':
                return this.setState({email: e.target.value});
            default:
                return;
        }
    }
    textareaGrowthWithText = (oldWord:string, newWord:string) => {
        const {current} = this.textareaField;
            if (current) {
                current.style.height = 'auto';
                current.style.height = current.scrollHeight + 'px';
            }
    }
    onFocusRemovePlaceholder = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.holdPlaceholder = e.target.placeholder;
        e.target.placeholder = '';
    }
    onBlurReaddPlaceholder = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.target.placeholder = this.holdPlaceholder;
        this.holdPlaceholder = '';
    }
    render() {
        return <Element name="contact">
            <section id="contact" className="container portfolio-section">
                <h2>&lt;Contact /&gt;</h2>
                <div className="flex-container">
                    <form className="contact-form" onSubmit={this.submitContactForm}>
                        <h3 className="text-center">Message me here</h3>
                        <input name="name" placeholder="Name*" value={this.state.name} onChange={this.onInputChange} onFocus={this.onFocusRemovePlaceholder} onBlur={this.onBlurReaddPlaceholder} />
                        <input name="email" placeholder="Email*" value={this.state.email} onChange={this.onInputChange} onFocus={this.onFocusRemovePlaceholder} onBlur={this.onBlurReaddPlaceholder} />
                        <input name="subject" placeholder="Subject*" value={this.state.subject} onChange={this.onInputChange} onFocus={this.onFocusRemovePlaceholder} onBlur={this.onBlurReaddPlaceholder} />
                        <textarea ref={this.textareaField} rows={1} name="message" placeholder="Message*" value={this.state.message} onChange={this.onInputChange} onFocus={this.onFocusRemovePlaceholder} onBlur={this.onBlurReaddPlaceholder}></textarea>
                        <div className="last-line">
                            <p>I am committed to your privacy and will not share/sell/divulge personal user information to any third party, under any circumstances.</p>
                            <button><BiMailSend /> Send</button>
                        </div>
                    </form>
                    <div className="contact-info">
                        <h3>Find me here</h3>
                        <p><a href="mailto:dorian.latchague@gmail.com">dorian.latchague@gmail.com <BiMailSend className="contact-icon" /></a></p>
                        <p><a href="https://github.com/DorianLatchague">/DorianLatchague <FaGithub className="contact-icon" /></a></p>
                        <p><a href="mailto:dorian.latchague@gmail.com">/dorian.latchague <FaFacebook className="contact-icon" /></a></p>
                        <p><a href="https://www.linkedin.com/in/dorian-latchague-b0938580/">/in/dorian-latchague-b0938580/ <FaLinkedin className="contact-icon" /></a></p>
                    </div>
                </div>
            </section>
        </Element>
    }
}