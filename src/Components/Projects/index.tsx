import React, { Component } from "react";
import './Projects.scss';
import { Element } from 'react-scroll';
import ProjectCard from "../ProjectCard";

export default class Projects extends Component<{
    projects: {
        name: string,
        imgUrl: string,
        description: string
    }[]
}> {
    render() {
        return <Element name="projects">
            <section id="projects" className="container portfolio-section">
                <h2>&lt;Projects /&gt;</h2>
                <div className="projects-container">
                    {this.props.projects && this.props.projects.map ? this.props.projects.map(({name, description, imgUrl }, index) => 
                            <ProjectCard key={index} imgUrl={imgUrl} description={description} name={name} />
                    ) : null }
                </div>
            </section>
        </Element>
    }
}