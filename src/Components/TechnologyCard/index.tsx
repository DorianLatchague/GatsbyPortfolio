import React, { Component, createRef, RefObject } from "react";
import { IconType } from "react-icons/lib";
import { CSSTransition } from 'react-transition-group';

export default class TechnologyCard extends Component <{
    tech: string;
    description: string;
    experience: string;
    Icon: IconType;
    color?: string;
}, {
    isModalActive: boolean;
    isHovered: boolean;
    closeHovered: boolean;
}> {
    articleRef: RefObject<HTMLElement> = createRef<HTMLElement>();
    modalRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    state: {
        isModalActive: boolean;
        isHovered: boolean;
        closeHovered: boolean;
    };
    constructor(props: {
        tech: string;
        description: string;
        experience: string;
        Icon: IconType;
        color?: string;
    }) {
        super(props);
        this.state = {
            isModalActive: false,
            isHovered: false,
            closeHovered: false
        };
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.escapeKeyHandler);
    }
    toggleModal = () => {
        if (this.state.isModalActive) {
            document.removeEventListener('keydown', this.escapeKeyHandler);
        } else {
            document.addEventListener('keydown', this.escapeKeyHandler);
        }
        this.setState({isModalActive:!this.state.isModalActive, isHovered: false});
    }
    hoverCloseEnter = () => {
        this.setState({closeHovered: true});
    }
    hoverCloseLeave= () => {
        this.setState({closeHovered: false});
    }
    hoverEnter = () => {
        this.setState({isHovered: true});
    }
    hoverLeave = () => {
        this.setState({isHovered: false});
    }
    escapeKeyHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            this.toggleModal();
        }
    }
    render() {
        const {tech, description, experience, Icon, color} = this.props;
        return <>
            <summary style={{backgroundColor: this.state.isHovered ? '#e8ebf7' : color }} className={`hexagon-tile${this.state.isModalActive ? ' active': ''}`} onClick={this.state.isModalActive ? () => {} : this.toggleModal} onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave}>
                <Icon className="tech-icon" style={{color: this.state.isHovered ? color : '#e8ebf7' }} />
                <CSSTransition nodeRef={this.articleRef} timeout={500} in={this.state.isModalActive} className="tech-modal" unmountOnExit>
                    <article ref={this.articleRef}>
                        <div className="modal-content">
                            <h3 style={{color}}><Icon /> {tech}</h3>
                            <p>{description}</p>
                            <p>{experience}</p> 
                            { this.state.closeHovered ?
                            <button style={{backgroundColor: color}} className="close-btn" onClick={this.toggleModal} onMouseLeave={this.hoverCloseLeave} >&times;</button>
                            : <button style={{color}} className="close-btn" onClick={this.toggleModal} onMouseEnter={this.hoverCloseEnter} >&times;</button>}
                        </div>
                    </article>
                </CSSTransition>
                <CSSTransition nodeRef={this.modalRef} timeout={500} in={this.state.isModalActive} className="modal-bg" unmountOnExit>
                    <div style={{backgroundColor: color}} ref={this.modalRef} onClick={this.toggleModal}></div>
                </CSSTransition>
            </summary>
        </>
    }
}