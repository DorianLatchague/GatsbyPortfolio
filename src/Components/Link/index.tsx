import React, { Component, ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';
import { IsMobileContext } from '../Contexts/isMobile';
import { useSSR } from 'use-ssr'

export default class Link extends Component<{
    onClick?: () => void,
    scrollTo: string,
    navigateTo: string,
    children: ReactNode,
    className?: string
}> {
    static contextType = IsMobileContext;
    isIndex = useSSR().isBrowser && window.location.pathname === "/";
render() {

    return this.isIndex ? <ScrollLink className={this.props.className} onClick={this.props.onClick} smooth={true} spy={true} duration={500} offset={this.context ? 0 : -49.5} activeClass="active" to={this.props.scrollTo}>{this.props.children}</ScrollLink> :
        <GatsbyLink className={this.props.className} to={this.props.navigateTo} activeClassName="active" >{this.props.children}</GatsbyLink> 
    }
}