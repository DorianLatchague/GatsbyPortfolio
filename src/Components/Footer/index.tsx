import React, { Component } from 'react';
import './Footer.scss';
import Link from '../Link';

export default class Footer extends Component {
    render() {
        return <footer>
            <div className="container header-container">
                <Link navigateTo="/" scrollTo="intro"><h6>Dorian Latchague</h6></Link>
                <ul className="footer-nav">
                    <Link navigateTo="/" scrollTo="intro"><li className="footer-nav-item">Home</li></Link>
                    <Link navigateTo="/#about" scrollTo="about"><li className="footer-nav-item">About&nbsp;Me</li></Link>
                    <Link navigateTo="/#experience" scrollTo="experience"><li className="footer-nav-item">Experience</li></Link>
                    <Link navigateTo="/#technologies" scrollTo="technologies"><li className="footer-nav-item">Technologies</li></Link>
                    <Link navigateTo="/#projects" scrollTo="projects"><li className="footer-nav-item">Projects</li></Link>
                    <Link navigateTo="/#contact" scrollTo="contact"><li className="footer-nav-item">Experience</li></Link>
                </ul>
                <p className="text-center">Property of Dorian Latchague | Privacy Policy | © 2021 All Rights Reserved</p>
            </div>
        </footer>
    }
}
