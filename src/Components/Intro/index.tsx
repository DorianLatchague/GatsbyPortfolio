import React, { useContext } from "react";
import { Element } from "react-scroll";
import "./Intro.scss";
import packageInfo from '../../../package.json'
import Link from "../Link";
import Typist from 'react-typist';
import { IsMobileContext } from "../Contexts/isMobile";


const Intro = () => {
    const delayGeneratorFunction = (mean: number, std: number, {lineIdx} : Typist.CurrentTextProps) => {
        if (lineIdx >= 15&& lineIdx <= 24) {
            return 1;
        }
        return 30;
    }
    const formatTranslatedDate = (date: Date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const day = date.getDate();
        const day_suffixes = ["th", "st", "nd", "rd"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return `${days[date.getDay()]}, ${day}${day_suffixes[(day % 10)] || "th"} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    }
    const isMobile = useContext(IsMobileContext);
    return <Element name="intro" id="intro-element">
        <section id="intro" className="container">
            <Typist delayGenerator={delayGeneratorFunction} cursor={{show: false}}>
                <p>script: Compiling.<Typist.Delay ms={500} />.<Typist.Delay ms={500} />.<Typist.Backspace count={6} delay={500} />ed successfully.</p>
                <p>hash: {Math.floor(Math.random() * (2**32)).toString()}</p>
                <p>package: <span className="text-regex">portfolio</span></p>
                <p>version: {packageInfo.version}</p>
                <p>time: {Math.floor(Math.random() * 500 + 500).toString()}ms</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="crunched">██████&nbsp;&nbsp;&nbsp;█████&nbsp;&nbsp;██████&nbsp;&nbsp;██&nbsp;&nbsp;█████&nbsp;&nbsp;███&nbsp;&nbsp;&nbsp;██&nbsp;  ██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████&nbsp;&nbsp;████████&nbsp;&nbsp;█████&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;█████&nbsp;&nbsp;&nbsp;██████&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;███████&nbsp;</p>
                <p className="crunched">██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;████&nbsp;&nbsp;██&nbsp;  ██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className="crunched">██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██████&nbsp;&nbsp;██&nbsp;███████&nbsp;██&nbsp;██&nbsp;██&nbsp;  ██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███████&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███████&nbsp;███████&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;█████&nbsp;&nbsp;&nbsp;</p>
                <p className="crunched">██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;████&nbsp;  ██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className="crunched">██████&nbsp;&nbsp;&nbsp;█████&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;███&nbsp;  ███████&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████&nbsp;&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;██&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;██████&nbsp;&nbsp;&nbsp;██████&nbsp;&nbsp;███████&nbsp;</p> 
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Asset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Size&nbsp;&nbsp;Chunks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chunk&nbsp;Names</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-grey">intro.tsx</span>&nbsp;&nbsp;&nbsp;&nbsp;12.3&nbsp;MB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;<span className="text-regex">[emitted]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-regex">Intro</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-grey">about-me.tsx</span>&nbsp;&nbsp;&nbsp;&nbsp;25.1&nbsp;MB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;<span className="text-regex">[emitted]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link scrollTo="about" navigateTo="/#about">About Me</Link></p>
                <p>&nbsp;&nbsp;<span className="text-grey">experience.tsx</span>&nbsp;&nbsp;&nbsp;&nbsp;37.6&nbsp;MB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;<span className="text-regex">[emitted]</span>&nbsp;&nbsp;<span className="text-regex">[big]</span>&nbsp;&nbsp;<Link scrollTo="experience" navigateTo="/#experience">Experience</Link></p>
                <p><span className="text-grey">technologies.tsx</span>&nbsp;&nbsp;&nbsp;&nbsp;87.4&nbsp;MB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32&nbsp;&nbsp;<span className="text-regex">[emitted]</span>&nbsp;&nbsp;<span className="text-regex">[big]</span>&nbsp;&nbsp;<Link scrollTo="technologies" navigateTo="/#technologies">Technologies</Link></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-grey">projects.tsx</span>&nbsp;&nbsp;&nbsp;&nbsp;63.3&nbsp;MB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;<span className="text-regex">[emitted]</span>&nbsp;&nbsp;<span className="text-regex">[big]</span>&nbsp;&nbsp;<Link scrollTo="projects" navigateTo="/#projects">Projects</Link></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-grey">contact.tsx</span>&nbsp;&nbsp;&nbsp;&nbsp;11.0&nbsp;MB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;<span className="text-regex">[emitted]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link scrollTo="contact" navigateTo="/#contact">Contact</Link></p>
                <p>&nbsp;&nbsp;&nbsp;<span className="text-grey">manifest.json</span>&nbsp;&nbsp;272&nbsp;bytes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-regex">[emitted]</span></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>Welcome To My Portfolio! (v{packageInfo.version})</p>
                <p>{formatTranslatedDate(new Date())}</p>
            </Typist>
        </section>
    </Element>
}

export default Intro;