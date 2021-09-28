import React, { Component } from "react";
import './Experience.scss';
import { Element } from 'react-scroll';
import ExperienceCard from "../ExperienceCard";
import { Tween, ScrollTrigger } from "react-gsap";

export default class Experience extends Component {
    render() {
        return <Element name="experience">
            <section id="experience" className="container portfolio-section">
                <h2>&lt;Experience /&gt;</h2>
                <div className="chrono-container">
                    <div className="chrono-reflection" />
                    <ScrollTrigger srub={true} pin={true} start="top center" end="+=700 center" toggleActions={"play reset play reset"}>
                        <Tween to={{scale: 5, opacity: 0, duration: 2, repeat: -1, repeatDelay: 1.5}}>
                            <div className="chrono-pulse" />
                        </Tween>
                    </ScrollTrigger>
                    <ScrollTrigger start="top center" end="+=700 center" scrub={true} pin={true} toggleActions={"play pause reverse pause"}>
                        <Tween to={{opacity: 0}} ease="power4.easeIn">
                            <div className="chrono-line" />
                        </Tween>
                        <Tween>
                            <div className="chrono-circle" />
                        </Tween>
                    </ScrollTrigger>
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