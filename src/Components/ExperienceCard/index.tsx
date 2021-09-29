import React, { Component } from "react";
import { Tween, ScrollTrigger } from "react-gsap";
import GlitchyDate from "../GlitchyDate";

export default class ExperienceCard extends Component <{
    organization: string,
    title: string,
    description: string,
    startTime: Date,
    endTime: Date
}> {
    formatTranslatedDate = (date: Date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }
    render() {
        const { organization, title, description } = this.props;
        return <ScrollTrigger start="top 75%" end="bottom 75%">
            <Tween from={{x: "20%", opacity: 0}}>
                <div className="experience">
                    <article className="experience-card">
                        <div className="card-content">
                            <GlitchyDate endDate={this.props.endTime} startDate={this.props.startTime} />
                            <p className="text-center"><span className="text-variable">"organization"</span><span className="text-white">:</span> <span className="text-string">"{organization}"</span><span className="text-white">,</span></p>
                            <p className="text-center"><span className="text-variable">"title"</span><span className="text-white">:</span> <span className="text-string">"{title}"</span><span className="text-white"></span></p>
                        </div>
                    </article>
                </div>
            </Tween>
        </ScrollTrigger>
    }
}