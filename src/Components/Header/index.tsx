import React, { Component, Dispatch, SetStateAction } from 'react';
import './Header.scss';
import Link from '../Link';
import { IsMobileContext } from '../Contexts/isMobile';
export default class Header extends Component<{
        navToggled: boolean,
        setNavToggled: Dispatch<SetStateAction<boolean>>
    }> {
    static contextType = IsMobileContext;
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
    escapeKeyHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            this.toggleNav();
        }
    }
    render() {
        return <header>
            <div className="container header-container">
            <Link onClick={this.toggleNav} scrollTo="intro" navigateTo="/" className="title-link"><h6>Dorian&nbsp;Latchague</h6></Link>
                <div className={`nav${this.props.navToggled ? ' active' : ''}`}>
                    <ul className="container nav-container">
                            <>
                                <Link onClick={this.toggleNav} className="scroll-link" navigateTo="/" scrollTo="intro"><li className="nav-item">Home</li></Link>
                                <Link onClick={this.toggleNav} className="scroll-link" navigateTo="/#about" scrollTo="about"><li className="nav-item">About&nbsp;Me</li></Link>
                                <Link onClick={this.toggleNav} className="scroll-link" navigateTo="/#experience" scrollTo="experience"><li className="nav-item">Experience</li></Link>
                                <Link onClick={this.toggleNav} className="scroll-link" navigateTo="/#technologies" scrollTo="technologies"><li className="nav-item">Technologies</li></Link>
                                <Link onClick={this.toggleNav} className="scroll-link" navigateTo="/#projects" scrollTo="projects"><li className="nav-item">Projects</li></Link>
                                <Link onClick={this.toggleNav} className="scroll-link" navigateTo="/#contact" scrollTo="contact"><li className="nav-item">Contact</li></Link>
                            </> 
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
