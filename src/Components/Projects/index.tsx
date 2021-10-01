import React, { Component } from "react";
import './Projects.scss';
import { Element } from 'react-scroll';
import ProjectCard from "../ProjectCards";
import PortfolioCard from "../ProjectCards/portfolio";
import RizeStoreCard from "../ProjectCards/rize-store";

export default class Projects extends Component<{
    projects: {
        name: string,
        img_url: string,
        description: string,
        img_alt: string
    }[]
}> {
    render() {
        return <Element name="projects">
            <section id="projects" className="container portfolio-section">
                <h2>&lt;Projects /&gt;</h2>
                <div className="projects-container">
                    <PortfolioCard />
                    <RizeStoreCard />
                    {this.props.projects && this.props.projects.map ? this.props.projects.map(({name, description, img_url, img_alt }, index) => 
                        <ProjectCard key={index} img_alt={img_alt} img_url={img_url} description={description} name={name} />
                    ) : null }
                </div>
            </section>
        </Element>
    }
}