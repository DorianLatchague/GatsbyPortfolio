import React, { Component, MouseEvent } from "react";

export default class ExperienceCard extends Component <{
    organization: string,
    title: string,
    description: string,
    startTime: Date,
    endTime: Date
}, {
    hovered: boolean
}> {
    state = {
        hovered: false
    }
    formatHoveredDate = (date: Date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }
    formatDisplayedTimeline = () => {
        return <>
            "<span className="text-const">$&#123;</span>
            <span className={this.state.hovered ? '': 'text-number'}>{this.state.hovered ? `"${this.formatHoveredDate(this.props.startTime)}"`: this.props.startTime.getTime()}</span>
            <span className="text-const">&#125;</span> to <span className="text-const">$&#123;</span>
            <span className={this.state.hovered ? '': 'text-number'}>{this.state.hovered ? `"${this.formatHoveredDate(this.props.endTime)}"`: this.props.endTime.getTime()}</span>
            <span className="text-const">&#125;</span>"
        </>
    }
    onMouseEnterEvent = () => this.setState({hovered: true});
    onMouseLeaveEvent = () => this.setState({hovered: false});
    render() {
        const { organization, title, description } = this.props;
        return <div className="experience">
            <div className="connector">
                <div className="timeline" onMouseEnter={this.onMouseEnterEvent} onMouseLeave={this.onMouseLeaveEvent}>{this.formatDisplayedTimeline()}</div>
                <hr />
            </div>
            <article className="experience-card">
                <div>
                    <p className="text-center"><span className="text-variable">"organization"</span><span className="text-white">:</span> <span className="text-string">"{organization}"</span><span className="text-white">,</span></p>
                    <p className="text-center"><span className="text-variable">"title"</span><span className="text-white">:</span> <span className="text-string">"{title}"</span><span className="text-white"></span></p>
                </div>
            </article>
        </div>
    }
}