import React, { Component } from "react";
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { graphql, StaticQuery } from "gatsby";
import { GiClick } from "react-icons/gi";

export default class RizeStoreCard extends Component {
    getGatbsyImage = (imageData: ImageDataLike) => {
        const image = getImage(imageData);
        if (image) {
            return <GatsbyImage loading="lazy" className="project-img" image={image} alt="Rize Store Preview" />
        }
        return null;
    }
    render() {
        return <div className="project-card">
            <div className="project-overlap">
                <h5 className="project-name text-center">Rize Store</h5>
                <GiClick className="view-icon" />
            </div>
            <StaticQuery query={graphql`{
                image: file(relativePath: {eq: "store_rize3d_com_preview.png"}) {
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