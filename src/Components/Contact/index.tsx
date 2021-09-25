import React, { Component } from "react";
import './Contact.scss';
import { Element } from 'react-scroll';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from '../ContactForm';

export default class Contact extends Component {
    render() {
        return <Element name="contact">
            <section id="contact" className="container portfolio-section">
                <h2>&lt;Contact /&gt;</h2>
                <div className="flex-container">
                    <ContactForm />
                    <div className="contact-info">
                        <h3>FIND ME HERE</h3>
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