import React, { Component, Dispatch, SetStateAction } from 'react';
import './Header.scss';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';

export default class Header extends Component<{
        navToggled: boolean,
        setNavToggled: Dispatch<SetStateAction<boolean>>,
        isMobile: boolean,
        isIndex: boolean
    }> {
    toggleNav = () => {
        if (this.props.navToggled) {
            document.removeEventListener('keydown', this.escapeKeyHandler);
            this.props.setNavToggled(false);
        } else {
            document.addEventListener('keydown', this.escapeKeyHandler);
            this.props.setNavToggled(true);
        }
    };
    componentWillUnmount() {
        if (window) {
            window.removeEventListener('keydown', this.escapeKeyHandler);
        }
    };
    onResizeIsMobile = () => {
        this.setState({isMobile: this.isMobile()});
    }
    isMobile = () => {
        if (!window) {
            return false;
        } else if (window.innerWidth <= 1000) {
            return true;
        }
        return false;
    };
    escapeKeyHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            this.toggleNav();
        }
    }
    calculateLinkOffset = () => {
        return this.props.isMobile ? 0 : -49.5;
    }
    render() {
        return <header>
            <div className="container header-container">
            <ScrollLink onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="title-link" activeClass="active" to="intro"><h6 onClick={animateScroll.scrollToTop}>Dorian&nbsp;Latchague</h6></ScrollLink>
                <div className={`nav${this.props.navToggled ? ' active' : ''}`}>
                    <ul className="container nav-container">
                        { this.props.isIndex ? 
                            <>
                                <ScrollLink onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="intro" id="intro-link"><li className="nav-item">Home</li></ScrollLink>
                                <ScrollLink onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="about"><li className="nav-item">About&nbsp;Me</li></ScrollLink>
                                <ScrollLink onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="experience"><li className="nav-item">Experience</li></ScrollLink>
                                <ScrollLink onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="technologies"><li className="nav-item">Technologies</li></ScrollLink>
                                <ScrollLink onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="projects"><li className="nav-item">Projects</li></ScrollLink>
                                <ScrollLink onClick={this.toggleNav} smooth={true} spy={true} duration={500} offset={this.calculateLinkOffset()} className="scroll-link" activeClass="active" to="contact"><li className="nav-item">Contact</li></ScrollLink>
                            </> : <>
                                <GatsbyLink to={"/"} className="scroll-link" activeClassName="active" id="gastby-intro-link"><li className="nav-item">Home</li></GatsbyLink>
                                <GatsbyLink to={"/#about"} className="scroll-link" activeClassName="active" ><li className="nav-item">About&nbsp;Me</li></GatsbyLink>
                                <GatsbyLink to={"/#experience"} className="scroll-link" activeClassName="active" ><li className="nav-item">Experience</li></GatsbyLink>
                                <GatsbyLink to={"/#technologies"} className="scroll-link" activeClassName="active" ><li className="nav-item">Technologies</li></GatsbyLink>
                                <GatsbyLink to={"/#projects"} className="scroll-link" activeClassName="active" ><li className="nav-item">Projects</li></GatsbyLink>
                                <GatsbyLink to={"/#contact"} className="scroll-link" activeClassName="active" ><li className="nav-item">Contact</li></GatsbyLink>
                            </>
                        }
                    </ul>
                </div>
                <div onClick={this.toggleNav} className={`nav-toggle${this.props.navToggled ? ' active' : ''}`}>
                    <div className="buns">
                        <div className="bun"></div>
                        <div className="bun"></div>
                    </div>
                </div>
            </div>
        </header>
    }
}
