import React, { Component } from "react";
import { Timeline, Tween, ScrollTrigger} from "react-gsap";

export default class GlitchyDate extends Component <{
    endDate: Date,
    startDate: Date
}> {
    formatTranslatedDate = (date: Date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    }
    render() {
        return <>
            <ScrollTrigger toggleActions="play reset play reset" start="top bottom" end="bottom top">
                <Timeline repeat={-1} target={<>
                    <p className="text-center duplicate top" aria-hidden><span className="text-variable">"start_date"</span><span className="text-white">:</span> <span className="text-string">"{this.formatTranslatedDate(this.props.startDate)}"</span><span className="text-white">,</span></p>
                    <p className="text-center duplicate bottom"><span className="text-variable">"start_date"</span><span className="text-white">:</span> <span className="text-string">"{this.formatTranslatedDate(this.props.startDate)}"</span><span className="text-white">,</span></p>
                    <p className="text-center hidden-time" aria-hidden><span className="text-variable">"start_date"</span><span className="text-white">:</span> <span className="text-string">`</span><span className="text-const">${"{"}</span><span className="text-number">{this.props.startDate.getTime()}</span><span className="text-const">{"}"}</span><span className="text-string">`</span><span className="text-white">,</span></p>    
                </>}>
                    <Tween target={0} to={{skewX: 0, ease: "Power4.easeInOut", duration: 0.16}} />
                    <Tween target={1} to={{skewX: 0, ease: "Power4.easeInOut", duration: 0.16}} position={"-=0.16"} />
                    <Tween target={0} to={{opacity: 0, duration: 0.04}} />
                    <Tween target={1} to={{opacity: 0, duration: 0.04}} position={"-=0.04"} />
                    <Tween target={0} to={{opacity: 1, duration: 0.04}} />
                    <Tween target={1} to={{opacity: 1, duration: 0.04}} position={"-=0.04"} />
                    <Tween target={0} to={{x: -30, duration: .08}} />
                    <Tween target={1} to={{x: -30, duration: .08}} position={"-=.08"} />
                    <Tween target={0} to={{x: 0, duration: 0.04}} />
                    <Tween target={1} to={{x: 0, duration: 0.04}} position={"-=0.04"} />
                    <Tween target={0} to={{x: -60, ease: "Power4.easeInOut", duration: 0.04}} />
                    <Tween target={1} to={{x: 60, ease: "Power4.easeInOut", duration: 0.04}} position={"-=0.16"} />
                    <Tween target={0} to={{x: 0, ease: "Power4.easeInOut", duration: 0.16}} />
                    <Tween target={1} to={{x: 0, ease: "Power4.easeInOut", duration: 0.16}} />
                    <Tween target={0} to={{x: 40, duration: .08}} />
                    <Tween target={1} to={{x: 40, duration: .08}} position={"-=.08"} />
                    <Tween target={0} to={{x: 0, duration: 0.04}} />
                    <Tween target={1} to={{x: 0, duration: 0.04}} position={"-=0.04"} />
                    <Tween target={2} to={{className: 'text-center', duration: 0.08}} />
                    <Tween target={0} to={{className: 'text-center duplicate top hidden-time', duration: 0.08}} position="-=0.08" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom hidden-time', duration: 0.08}} position="-=0.08" />
                    <Tween target={2} to={{className: 'text-center hidden-time', duration: 0.08}} />
                    <Tween target={0} to={{className: 'text-center duplicate top', duration: 0.08}} position="-=0.08" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom', duration: 0.08}} position="-=0.08" />
                    <Tween target={2} to={{className: 'text-center', duration: 0.08}} />
                    <Tween target={0} to={{className: 'text-center duplicate top hidden-time', duration: 0.08}} position="-=0.08" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom hidden-time', duration: 0.08}} position="-=0.08" />
                    <Tween target={2} to={{className: 'text-center hidden-time', duration: 0.08}} />
                    <Tween target={0} to={{className: 'text-center duplicate top', duration: 0.08}} position="-=0.08" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom', duration: 0.08}} position="-=0.08" />
                    <Tween target={2} to={{className: 'text-center', duration: 0.2}} />
                    <Tween target={0} to={{className: 'text-center duplicate top hidden-time', duration: 0.2}} position="-=0.2" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom hidden-time', duration: 0.2}} position="-=0.2" />
                    <Tween target={2} to={{className: 'text-center hidden-time', duration: 0.5}} />
                    <Tween target={0} to={{className: 'text-center duplicate top', duration: 0.5}} position="-=0.5" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom', duration: 0.5}} position="-=0.5" />
                    <Tween target={2} to={{className: 'text-center', duration: 1}} />
                    <Tween target={0} to={{className: 'text-center duplicate top hidden-time', duration: 1}} position="-=1" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom hidden-time', duration: 1}} position="-=1" />
                    <Tween target={2} to={{className: 'text-center hidden-time', duration: 3}} />
                    <Tween target={0} to={{className: 'text-center duplicate top', duration: 3}} position="-=3" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom', duration: 3}} position="-=3" />
                </Timeline>
            </ScrollTrigger>
            <ScrollTrigger toggleActions="play reset play reset" start="top bottom" end="bottom top">
                <Timeline repeat={-1} target={<>
                    <p className="text-center duplicate top" aria-hidden><span className="text-variable">"end_date"</span><span className="text-white">:</span> <span className="text-string">"{this.formatTranslatedDate(this.props.endDate)}"</span><span className="text-white">,</span></p>
                    <p className="text-center duplicate bottom"><span className="text-variable">"end_date"</span><span className="text-white">:</span> <span className="text-string">"{this.formatTranslatedDate(this.props.endDate)}"</span><span className="text-white">,</span></p>
                    <p className="text-center hidden-time" aria-hidden><span className="text-variable">"end_date"</span><span className="text-white">:</span> <span className="text-string">`</span><span className="text-const">${"{"}</span><span className="text-number">{this.props.endDate.getTime()}</span><span className="text-const">{"}"}</span><span className="text-string">`</span><span className="text-white">,</span></p>    
                </>}>
                    <Tween target={0} to={{skewX: 0, ease: "Power4.easeInOut", duration: 0.16}} />
                    <Tween target={1} to={{skewX: 0, ease: "Power4.easeInOut", duration: 0.16}} position={"-=0.16"} />
                    <Tween target={0} to={{opacity: 0, duration: 0.16}} />
                    <Tween target={1} to={{opacity: 0, duration: 0.16}} position={"-=0.16"} />
                    <Tween target={0} to={{opacity: 1, duration: 0.16}} />
                    <Tween target={1} to={{opacity: 1, duration: 0.16}} position={"-=0.16"} />
                    <Tween target={0} to={{x: -30, duration: .08}} />
                    <Tween target={1} to={{x: -30, duration: .08}} position={"-=.08"} />
                    <Tween target={0} to={{x: 0, duration: 0.04}} />
                    <Tween target={1} to={{x: 0, duration: 0.04}} position={"-=0.04"} />
                    <Tween target={0} to={{x: -60, ease: "Power4.easeInOut", duration: 0.04}} />
                    <Tween target={1} to={{x: 60, ease: "Power4.easeInOut", duration: 0.04}} position={"-=0.16"} />
                    <Tween target={0} to={{x: 0, ease: "Power4.easeInOut", duration: 0.16}} />
                    <Tween target={1} to={{x: 0, ease: "Power4.easeInOut", duration: 0.16}} />
                    <Tween target={0} to={{x: 40, duration: .08}} />
                    <Tween target={1} to={{x: 40, duration: .08}} position={"-=.08"} />
                    <Tween target={0} to={{x: 0, duration: 0.04}} />
                    <Tween target={1} to={{x: 0, duration: 0.04}} position={"-=0.04"} />
                    <Tween target={2} to={{className: 'text-center', duration: 0.08}} />
                    <Tween target={0} to={{className: 'text-center duplicate top hidden-time', duration: 0.08}} position="-=0.08" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom hidden-time', duration: 0.08}} position="-=0.08" />
                    <Tween target={2} to={{className: 'text-center hidden-time', duration: 0.08}} />
                    <Tween target={0} to={{className: 'text-center duplicate top', duration: 0.08}} position="-=0.08" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom', duration: 0.08}} position="-=0.08" />
                    <Tween target={2} to={{className: 'text-center', duration: 0.08}} />
                    <Tween target={0} to={{className: 'text-center duplicate top hidden-time', duration: 0.08}} position="-=0.08" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom hidden-time', duration: 0.08}} position="-=0.08" />
                    <Tween target={2} to={{className: 'text-center hidden-time', duration: 0.08}} />
                    <Tween target={0} to={{className: 'text-center duplicate top', duration: 0.08}} position="-=0.08" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom', duration: 0.08}} position="-=0.08" />
                    <Tween target={2} to={{className: 'text-center', duration: 0.2}} />
                    <Tween target={0} to={{className: 'text-center duplicate top hidden-time', duration: 0.2}} position="-=0.2" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom hidden-time', duration: 0.2}} position="-=0.2" />
                    <Tween target={2} to={{className: 'text-center hidden-time', duration: 0.5}} />
                    <Tween target={0} to={{className: 'text-center duplicate top', duration: 0.5}} position="-=0.5" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom', duration: 0.5}} position="-=0.5" />
                    <Tween target={2} to={{className: 'text-center', duration: 1}} />
                    <Tween target={0} to={{className: 'text-center duplicate top hidden-time', duration: 1}} position="-=1" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom hidden-time', duration: 1}} position="-=1" />
                    <Tween target={2} to={{className: 'text-center hidden-time', duration: 3}} />
                    <Tween target={0} to={{className: 'text-center duplicate top', duration: 3}} position="-=3" />
                    <Tween target={1} to={{className: 'text-center duplicate bottom', duration: 3}} position="-=3" />
                </Timeline>
            </ScrollTrigger>
        </>
    }
}