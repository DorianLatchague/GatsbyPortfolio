import React, { Component } from "react";
import './Projects.scss';
import ProjectCard from "../ProjectCard";
import { Element } from 'react-scroll';

export default class Projects extends Component {
    render() {
        return <Element name="projects">
            <section id="projects" className="container portfolio-section">
                <h2>&lt;Projects /&gt;</h2>
                <div className="projects-container">
                    <ProjectCard imgUrl="/mightyvet-project.png" name="MightyVet Website" description="Test description..." />
                    <ProjectCard imgUrl="" name="Rize Website V1" description="Test description..." />
                    <ProjectCard imgUrl="" name="SW xDesign to Rize Slicer Export Tool" description="Test description..." />
                    <ProjectCard imgUrl="" name="The Village" description="Test description..." />
                    <ProjectCard imgUrl="" name="Rize Website V2" description="Test description..." />
                    <ProjectCard imgUrl="" name="Rize Zone" description="Test description..." />
                    <ProjectCard imgUrl="" name="Various Rize IOT Platforms" description="Test description..." />
                    <ProjectCard imgUrl="" name="Portfolio" description="Test description..." />
                </div>
            </section>
        </Element>
    }
}