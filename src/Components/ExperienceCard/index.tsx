import React, { Component } from "react";
import { Tween, ScrollTrigger } from "react-gsap";

export default class ExperienceCard extends Component <{
    organization: string,
    title: string,
    description: string,
    startTime: Date,
    endTime: Date
}, {
    translated: boolean
}> {
    state = {
        translated: false
    }
    formatTranslatedDate = (date: Date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }
    onMouseEnterEvent = () => this.setState({translated: true});
    onMouseLeaveEvent = () => this.setState({translated: false});
    render() {
        const { organization, title, description } = this.props;
        return <ScrollTrigger start="top 75%" end="bottom 75%">
            <Tween from={{x: "20%", opacity: 0}}>
                <div className="experience">
                    <article className="experience-card">
                        <div>
                            <p className="text-center"><span className="text-variable">"start_date"</span><span className="text-white">:</span> <span className="text-string">"{this.formatTranslatedDate(this.props.startTime)}"</span><span className="text-white">,</span></p>
                            <p className="text-center"><span className="text-variable">"end_date"</span><span className="text-white">:</span> <span className="text-string">"{this.formatTranslatedDate(this.props.endTime)}"</span><span className="text-white">,</span></p>
                            <p className="text-center"><span className="text-variable">"organization"</span><span className="text-white">:</span> <span className="text-string">"{organization}"</span><span className="text-white">,</span></p>
                            <p className="text-center"><span className="text-variable">"title"</span><span className="text-white">:</span> <span className="text-string">"{title}"</span><span className="text-white"></span></p>
                        </div>
                    </article>
                </div>
            </Tween>
        </ScrollTrigger>
    }
}