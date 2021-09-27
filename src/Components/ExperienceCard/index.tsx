import React, { Component, MouseEvent } from "react";

export default class ExperienceCard extends Component <{
    organization: string,
    title: string,
    description: string,
    startTime: Date,
    endTime: Date
}, {
    translated: boolean
}> {
    interval: any = null;
    timeout: any = null;
    state = {
        translated: false
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({translated: false});
            this.timeout = setTimeout(() => {
                this.setState({translated: true});
                this.timeout = setTimeout(() => {
                    this.setState({translated: false});
                    this.timeout = setTimeout(() => {
                        this.setState({translated: true});
                        this.timeout = setTimeout(() => {
                            this.setState({translated: false});
                            this.timeout = setTimeout(() => {
                                this.setState({translated: true});
                            }, 1000)
                        }, 100)
                    }, 100)
                }, 100)
            }, 1000)
        }, 10000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
    }
    formatTranslatedDate = (date: Date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }
    formatDisplayedTimeline = () => {
        return <>
            "<span className="text-const">$&#123;</span>
            <span className={this.state.translated ? '': 'text-number'}>{this.state.translated ? `"${this.formatTranslatedDate(this.props.startTime)}"`: this.props.startTime.getTime()}</span>
            <span className="text-const">&#125;</span> to <span className="text-const">$&#123;</span>
            <span className={this.state.translated ? '': 'text-number'}>{this.state.translated ? `"${this.formatTranslatedDate(this.props.endTime)}"`: this.props.endTime.getTime()}</span>
            <span className="text-const">&#125;</span>"
        </>
    }
    onMouseEnterEvent = () => this.setState({translated: true});
    onMouseLeaveEvent = () => this.setState({translated: false});
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