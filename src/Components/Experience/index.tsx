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
                        <ExperienceCard organization="Harvard Extension School" startTime={new Date('2019-05-02')} endTime={new Date('2019-12-02')} title="Teaching Assistant" description="Test description..." />
                        <ExperienceCard organization="Rize" startTime={new Date('2019-05-24')} endTime={new Date('2021-07-31')} title="Digital Marketing Coordinator" description="Test description..." />
                        <ExperienceCard organization="Microsoft - Azure Sentinel" startTime={new Date('2021-10-04')} endTime={new Date()} title="Software Engineer" description="Test description..." />
                    </div>
                </div>
            </section>
        </Element>
    }
}