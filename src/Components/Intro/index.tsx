import React, { useContext } from "react";
import { Element } from "react-scroll";
import "./Intro.scss";
import packageInfo from '../../../package.json'
import Link from "../Link";
import Typist from 'react-typist';
import { IsMobileContext } from "../Contexts/isMobile";


const Intro = () => {
    const delayGeneratorFunction = (mean: number, std: number, {lineIdx} : Typist.CurrentTextProps) => {
        if (lineIdx >= 15&& lineIdx <= 70) {
            return 1;
        }
        return 20;
    }
    const formatTranslatedDate = (date: Date) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const day = date.getDate();
        const day_suffixes = ["th", "st", "nd", "rd"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return `${days[date.getDay()]}, ${day}${day_suffixes[(day % 10)] || "th"} ${months[date.getMonth()]}, ${date.getFullYear()}`;
    }
    const isMobile = useContext(IsMobileContext);
    return <Element name="intro">
        <section id="intro" className="container">
            <h1 className="sr-only">Dorian Latchague</h1>
            <h2 className="sr-only">Software Engineer</h2>
            <Typist delayGenerator={delayGeneratorFunction} stdTypingDelay={0} cursor={{show: false}}>
                <p>script: Compiling.<Typist.Delay ms={500} />.<Typist.Delay ms={500} />.<Typist.Backspace count={6} delay={500} />ed successfully.</p>
                <p>hash: {Math.floor(Math.random() * (2**32)).toString()}</p>
                <p>package: <span className="text-regex">portfolio</span></p>
                <p>version: {packageInfo.version}</p>
                <p>time: {Math.floor(Math.random() * 500 + 500).toString()}ms</p>
                <br />
                <br />
                <br />
                <p aria-hidden className="name-crunched">██████   █████  ██████  ██  █████  ███   ██     ██       █████  ████████  █████  ██   ██  █████   ██████  ██    ██ ███████</p>
                <p aria-hidden className="name-crunched">██   ██ ██   ██ ██   ██ ██ ██   ██ ████  ██     ██      ██   ██    ██    ██   ██ ██   ██ ██   ██ ██       ██    ██ ██     </p>
                <p aria-hidden className="name-crunched">██   ██ ██   ██ ██████  ██ ███████ ██ ██ ██     ██      ███████    ██    ██      ███████ ███████ ██   ██  ██    ██ █████  </p>
                <p aria-hidden className="name-crunched">██   ██ ██   ██ ██   ██ ██ ██   ██ ██  ████     ██      ██   ██    ██    ██   ██ ██   ██ ██   ██ ██    ██ ██    ██ ██     </p>
                <p aria-hidden className="name-crunched">██████   █████  ██   ██ ██ ██   ██ ██   ███     ███████ ██   ██    ██     █████  ██   ██ ██   ██  ██████   ██████  ███████</p> 
                <br />
                <br />
                <br />
                <p aria-hidden className="title-crunched"> ██████  █████  ███████ ████████  ██        ██  █████  ██████  ███████     ███████ ███   ██  ██████  ██ ███   ██ ███████ ███████ ██████</p>
                <p aria-hidden className="title-crunched">██      ██   ██ ██         ██     ██   ██   ██ ██   ██ ██   ██ ██          ██      ████  ██ ██       ██ ████  ██ ██      ██      ██   ██</p>
                <p aria-hidden className="title-crunched"> █████  ██   ██ █████      ██      ██ ████ ██  ███████ ██████  █████       █████   ██ ██ ██ ██   ██  ██ ██ ██ ██ █████   █████   ██████</p>
                <p aria-hidden className="title-crunched">     ██ ██   ██ ██         ██      ████  ████  ██   ██ ██   ██ ██          ██      ██  ████ ██    ██ ██ ██  ████ ██      ██      ██   ██</p>
                <p aria-hidden className="title-crunched">██████   █████  ██         ██       ██    ██   ██   ██ ██   ██ ███████     ███████ ██   ███  ██████  ██ ██   ███ ███████ ███████ ██   ██</p>                                             
                <br />
                <br />
                <br />
                <p className="loading-assets">           Asset       Size  Chunks                    Chunk Names</p>
                <p className="loading-assets">       <span className="text-grey">intro.tsx</span>    12.3 MB       0  <span className="text-regex">[emitted]</span>         <span className="text-regex">Intro</span></p>
                <p className="loading-assets">    <span className="text-grey">about-me.tsx</span>    25.1 MB       0  <span className="text-regex">[emitted]</span>         <Link scrollTo="about" navigateTo="/#about">About Me</Link></p>
                <p className="loading-assets">  <span className="text-grey">experience.tsx</span>    37.6 MB       3  <span className="text-regex">[emitted]</span>  <span className="text-regex">[big]</span>  <Link scrollTo="experience" navigateTo="/#experience">Experience</Link></p>
                <p className="loading-assets"><span className="text-grey">technologies.tsx</span>    87.4 MB      32  <span className="text-regex">[emitted]</span>  <span className="text-regex">[big]</span>  <Link scrollTo="technologies" navigateTo="/#technologies">Technologies</Link></p>
                <p className="loading-assets">    <span className="text-grey">projects.tsx</span>    63.3 MB       9  <span className="text-regex">[emitted]</span>  <span className="text-regex">[big]</span>  <Link scrollTo="projects" navigateTo="/#projects">Projects</Link></p>
                <p className="loading-assets">     <span className="text-grey">contact.tsx</span>    11.0 MB       1  <span className="text-regex">[emitted]</span>         <Link scrollTo="contact" navigateTo="/#contact">Contact</Link></p>
                <p className="loading-assets">   <span className="text-grey">manifest.json</span>  272 bytes          <span className="text-regex">[emitted]</span></p>
                <br />
                <br />
                <br />
                <p>Welcome To My Portfolio! v{packageInfo.version}</p>
                <p>{formatTranslatedDate(new Date())}</p>
                <p>Scroll Down...</p>
            </Typist>
        </section>
    </Element>
}

export default Intro;