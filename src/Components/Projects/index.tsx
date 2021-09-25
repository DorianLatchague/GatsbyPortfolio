import React, { Component } from "react";
import './Projects.scss';
import { Element } from 'react-scroll';
import ProjectCard from "../ProjectCard";

export default class Projects extends Component {
    render() {
        return <Element name="projects">
            <section id="projects" className="container portfolio-section">
                <h2>&lt;Projects /&gt;</h2>
                <div className="projects-container">
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="Gray" description="Gray is a " />
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="MightyVet Website" description="Test description..." />
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="Rize Website V1" description="Test description..." />
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="SW xDesign to Rize Slicer Export Tool" description="Test description..." />
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="The Village" description="Test description..." />
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="Rize Website V2" description="Test description..." />
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="Rize Zone" description="Test description..." />
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="Various Rize IOT Platforms" description="Test description..." />
                    <ProjectCard imgUrl="https://via.placeholder.com/150" name="Portfolio" description="Test description..." />
                </div>
            </section>
        </Element>
    }
}