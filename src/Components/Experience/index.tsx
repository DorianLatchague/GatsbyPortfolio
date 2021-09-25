import React, { Component } from "react";
import './Experience.scss';
import { Element } from 'react-scroll';
import ExperienceCard from "../ExperienceCard";

export default class Experience extends Component {
    render() {
        return <Element name="experience">
            <section id="experience" className="container portfolio-section">
                <h2>&lt;Experience /&gt;</h2>
                <div className="chrono-flex">
                    <div className="chrono-line">
                    </div>
                    <div className="content">
                        <ExperienceCard organization="Coding Dojo" startTime={new Date('2018-10-02')} endTime={new Date('2019-02-02')} title="Graduated" description="Test description..." />
                        <ExperienceCard organization="Harvard Extension School" startTime={new Date('2019-05-02')} endTime={new Date('2019-12-02')} title="Teaching Assistant" description="Test description..." />
                        <ExperienceCard organization="Rize" startTime={new Date('2019-05-02')} endTime={new Date('2021-07-02')} title="Digital Marketing Coordinator" description="Test description..." />
                    </div>
                </div>
            </section>
        </Element>
    }
}