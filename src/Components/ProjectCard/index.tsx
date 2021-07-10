import React, { Component } from "react";

export default class Project extends Component <{
    imgUrl: string,
    name: string,
    description: string
}> {
    render() {
        const { imgUrl, name, description } = this.props;
        return <div className="project-card">
            <h5 className="project-name text-center">{name}</h5>
            <img className="project-img" src={imgUrl} alt={name} />
        </div>
    }
}