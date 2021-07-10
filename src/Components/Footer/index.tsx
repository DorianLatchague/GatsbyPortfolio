import React, { Component } from 'react';
import './Footer.scss';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';

export default class Footer extends Component<{
    isMobile: boolean,
    isIndex: boolean
}> {
    calculateLinkOffset = () => {
        return this.props.isMobile ? 0 : -50;
    }
    render() {
        return <footer>
            <div className="container header-container">
                <h6 onClick={animateScroll.scrollToTop}>Dorian Latchague</h6>
                <ul className="footer-nav">
                        { this.props.isIndex ? 
                            <>
                            <ScrollLink smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="about"><li className="footer-nav-item">About Me</li></ScrollLink>
                            <ScrollLink smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="experience"><li className="footer-nav-item">Experience</li></ScrollLink>
                            <ScrollLink smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="technologies"><li className="footer-nav-item">Technologies</li></ScrollLink>
                            <ScrollLink smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="projects"><li className="footer-nav-item">Projects</li></ScrollLink>
                            <ScrollLink smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} activeClass="active" to="contact"><li className="footer-nav-item">Contact</li></ScrollLink>
                            </> : <>
                                <GatsbyLink to={"/"} className="scroll-link" activeClassName="active" ><li className="footer-nav-item">About&nbsp;Me</li></GatsbyLink>
                                <GatsbyLink to={"/#experience"} className="scroll-link" activeClassName="active" ><li className="footer-nav-item">Experience</li></GatsbyLink>
                                <GatsbyLink to={"/#technologies"} className="scroll-link" activeClassName="active" ><li className="footer-nav-item">Technologies</li></GatsbyLink>
                                <GatsbyLink to={"/#projects"} className="scroll-link" activeClassName="active" ><li className="footer-nav-item">Projects</li></GatsbyLink>
                                <GatsbyLink to={"/#contact"} className="scroll-link" activeClassName="active" ><li className="footer-nav-item">Contact</li></GatsbyLink>
                            </>
                        }
                </ul>
                <p className="text-center">Property of Dorian Latchague | Privacy Policy | © 2021 All Rights Reserved</p>
            </div>
        </footer>
    }
}
