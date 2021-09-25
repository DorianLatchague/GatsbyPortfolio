import React, { ChangeEvent, Component, createRef, FocusEvent, FormEvent, RefObject } from "react";
import { BiMailSend } from 'react-icons/bi';
import { VscLoading } from 'react-icons/vsc';
import submitContactForm from '../../api/form';
import Recaptcha from 'react-recaptcha';
import useSSR from 'use-ssr';

type ContactFormState = {
    formCompleted: boolean,
    name: string,
    email: string,
    subject: string,
    message: string,
    loading: boolean,
    validations: {
        name?: any,
        email?: any,
        subject?: any,
        message?: any
    } | null,
    error: string | null
}

export default class ContactForm extends Component {
    captchaElement: RefObject<Recaptcha> = createRef();
    holdPlaceholder: string = '';
    state: ContactFormState = {
        formCompleted: false,
        name: '',
        email: '',
        subject: '',
        message: '',
        loading: false,
        validations: null,
        error: null
    }
    textareaField: RefObject<HTMLTextAreaElement> = createRef();
    captchaCallback = (response: string) => {
        const {name, email, subject, message} = this.state;
        submitContactForm(response, {
            name,
            email,
            subject,
            message
        }).then((data => {
            this.setState({
                loading: false, 
                formCompleted: true, 
                name: '', 
                email: '', 
                subject: '', 
                message: ''});
        })).catch(err => {
            if (err.response) {
                if (err.response.status === 422) {
                    this.setState({validations: err.response.data, error: "Please double check the fields above."});
                } else {
                    this.setState({error: err.response.data});
                }
            } else if (err.request) {
                this.setState({error: err.request});
            } else {
                this.setState({error: err.message});
            }
            this.setState({loading: false});
        });
    }
    submitContactForm = async (e: FormEvent) => {
        e.preventDefault();
        if (!this.state.loading && this.captchaElement?.current) {
            this.setState({formCompleted: false, loading: true, validations: null, error: null});
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
        return <form className="contact-form" onSubmit={this.submitContactForm}>
            
            <h3 className="text-center">MESSAGE ME HERE</h3>
            <input name="name" placeholder="Name*" value={this.state.name} onChange={this.onInputChange} onFocus={this.onFocusRemovePlaceholder} onBlur={this.onBlurReaddPlaceholder} />
            {this.state.validations?.name ? <p className="error-text">{this.state.validations.name}</p> : null }
            <input name="email" placeholder="Email*" value={this.state.email} onChange={this.onInputChange} onFocus={this.onFocusRemovePlaceholder} onBlur={this.onBlurReaddPlaceholder} />
            {this.state.validations?.email ? <p className="error-text">{this.state.validations.email}</p> : null }
            <input name="subject" placeholder="Subject*" value={this.state.subject} onChange={this.onInputChange} onFocus={this.onFocusRemovePlaceholder} onBlur={this.onBlurReaddPlaceholder} />
            {this.state.validations?.subject ? <p className="error-text">{this.state.validations.subject}</p> : null }
            <textarea ref={this.textareaField} rows={1} name="message" placeholder="Message*" value={this.state.message} onChange={this.onInputChange} onFocus={this.onFocusRemovePlaceholder} onBlur={this.onBlurReaddPlaceholder}></textarea>
            {this.state.validations?.message ? <p className="error-text">{this.state.validations.message}</p> : null }
            <div className="last-line">
                
                <div className="text">
                    {this.state.error ? <><p className="error-text">{this.state.error}</p><br /></> : null }
                    { this.state.formCompleted ? <>
                        <p className="text-const">Thank you for reaching out!</p>
                        <br />
                        <p className="text-const">You should soon receive a confirmation email. I will get back to you as soon as possible!</p>
                    </> : <>
                        <p>By filling out this form, you agree to be contacted.</p>
                        <br />
                        <p>I am committed to your privacy and will not keep a record of your personal user information nor share/sell/divulge it to any third party, under any circumstances.</p>
                    </> }
                </div>
                {this.state.loading ?
                <button disabled><VscLoading className="loading" /></button> :
                <button className={this.state.formCompleted ? 'completed' : this.state.error ? 'error' : ''}><BiMailSend />&nbsp;Send</button> }
            </div>
            { useSSR().isBrowser && <Recaptcha ref={this.captchaElement} size="invisible" theme="dark" sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY} verifyCallback={this.captchaCallback} /> }
        </form>
    }
}