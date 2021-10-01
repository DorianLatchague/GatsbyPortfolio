import React, { Component } from "react";
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { graphql, StaticQuery } from "gatsby";
import { GiClick } from "react-icons/gi";

export default class Project extends Component <{
    img_url: string,
    name: string,
    description: string,
    img_alt: string
}> {
    getGatbsyImage = (imageData: ImageDataLike) => {
        const image = getImage(imageData);
        if (image) {
            return <GatsbyImage loading="lazy" className="project-img" image={image} alt={this.props.img_alt} />
        }
        return null;
    }
    render() {
        const { name } = this.props;
        return <div className="project-card">
            <div className="project-overlap">
                <h5 className="project-name text-center">{name}</h5>
                <GiClick className="view-icon" />
            </div>
            <StaticQuery query={graphql`{
                image: file(relativePath: {eq: "portfolio_preview.png"}) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }`} render={
                ({image: {childImageSharp: {gatsbyImageData: imageData}}}: {image: {childImageSharp: {gatsbyImageData: ImageDataLike}}}) =>
                this.getGatbsyImage(imageData)
            }/>
        </div>
    }
}