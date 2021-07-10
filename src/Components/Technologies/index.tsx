import React, { Component } from "react";
import TechnologyCard from "../TechnologyCard";
import { Element } from 'react-scroll';
import './Technologies.scss';
import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';
import * as Di from 'react-icons/di';
import * as Io from 'react-icons/io5';
import { MdBrokenImage } from 'react-icons/md';
import { IconType } from "react-icons/lib";

const ReactIcons: {
    Fa: {
        [key: string]: IconType
    },
    Si: {
        [key: string]: IconType
    },
    Di: {
        [key: string]: IconType
    },
    Io: {
        [key: string]: IconType
    }
} = {
    Fa,
    Si,
    Di,
    Io
}

export default class Technologies extends Component<{
    technologies: {
        name: string,
        icon: string,
        description: string,
        experience: string,
        color: string
    }[]
}> {
    fetchIcon = (icon: string) => {
        const prefix: "Fa" | "Si" | "Di" | "Io" = icon.slice(0,2) as "Fa" | "Si" | "Di" | "Io";
        if (ReactIcons[prefix][icon]) {
            return ReactIcons[prefix][icon]
        }
        return MdBrokenImage;
    }
    render() {
        return <Element name="technologies">
            <section id="technologies" className="container portfolio-section">
                <h2>&lt;Technologies /&gt;</h2>
                <div className="honeycomb">
                    {this.props.technologies && this.props.technologies.map ? this.props.technologies.map(({name, icon, description, experience, color}, index) => 
                            <TechnologyCard key={index} tech={name} Icon={this.fetchIcon(icon)} description={description} experience={experience} color={color} />
                    ) : null }
                </div>
            </section>
        </Element>
    }
}