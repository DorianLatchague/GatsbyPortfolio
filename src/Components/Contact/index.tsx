import React, { ChangeEvent, Component, createRef, FocusEvent, FormEvent, RefObject } from "react";
import './Contact.scss';
import { Element } from 'react-scroll';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import submitContactForm from '../../api/form';
import Recaptcha from 'react-recaptcha';
import useSSR from 'use-ssr';

export default class Contact extends Component<{}, {
    subject: string,
    message: string,
    name: string,
    email : string
}> {
    captchaElement: RefObject<Recaptcha> = createRef();
    holdPlaceholder: string = '';
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    textareaField: RefObject<HTMLTextAreaElement> = createRef();
    captchaCallback = (response: string) => {
        console.log(response);
        submitContactForm(response, this.state).then((data => {
            console.log(data);
        })).catch(err => console.log(err));
    }
    submitContactForm = async (e: FormEvent) => {
        e.preventDefault();
        if (this.captchaElement?.current) {
            this.captchaElement.current.execute();
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
                            <div className="text">
                                <p>By filling out this form, you agree to be contacted.</p>
                                <br />
                                <p>I am committed to your privacy and will not share/sell/divulge personal user information to any third party, under any circumstances.</p>
                            </div>
                            <button><BiMailSend />&nbsp;Send</button>
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
            { useSSR().isBrowser && <Recaptcha ref={this.captchaElement} size="invisible" theme="dark" sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} verifyCallback={this.captchaCallback} /> }
        </Element>
    }
}