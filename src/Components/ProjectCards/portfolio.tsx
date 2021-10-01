import React, { Component } from "react";
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { graphql, StaticQuery } from "gatsby";
import { GiClick } from "react-icons/gi";
// import { Tween } from "react-gsap";
// import { FaGithub } from "react-icons/fa";

export default class PortfolioCard extends Component {
    // state: {
    //     isModalActive: boolean
    //     modalClosed: boolean
    // } = {
    //     isModalActive: false,
    //     modalClosed: false
    // }
    // componentWillUnmount() {
    //     document.removeEventListener('keydown', this.escapeKeyHandler);
    // }
    // toggleModal = () => {
    //     if (this.state.isModalActive) {
    //         if (this.state.modalClosed) {
    //             document.addEventListener('keydown', this.escapeKeyHandler);
    //             this.setState({modalClosed: false});
    //         } else {
    //             this.setState({modalClosed: true});
    //             document.removeEventListener('keydown', this.escapeKeyHandler);
    //         }
    //     } else {
    //         this.setState({isModalActive: true});
    //         document.addEventListener('keydown', this.escapeKeyHandler);
    //     }
    // }
    getGatbsyImage = (imageData: ImageDataLike) => {
        const image = getImage(imageData);
        if (image) {
            return <GatsbyImage loading="lazy" className="project-img" image={image} alt="Portfolio Preview" />
        }
        return null;
    }
    // escapeKeyHandler = (e: KeyboardEvent) => {
    //     if (e.key === 'Escape') {
    //         this.toggleModal();
    //     }
    // }
    render() {
        return <>
            <div className="project-card">
                <div className="project-overlap" 
                // onClick={this.toggleModal}
                >
                    <h5 className="project-name text-center">Portfolio</h5>
                    <GiClick className="view-icon" />
                </div>
                <StaticQuery query={graphql`{
                    image: file(relativePath: {eq: "portfolio_preview.png"}) {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }`} render={
                        ({ image: { childImageSharp: { gatsbyImageData: imageData } } }: { image: { childImageSharp: { gatsbyImageData: ImageDataLike } } }) =>
                            this.getGatbsyImage(imageData)
                    } />
            </div>
            {/* { this.state.isModalActive && (this.state.modalClosed ?
            <Tween to={{ x: "100%", duration: .75 }}>
                <div className="project-modal">
                    <div className="vertical-flex">
                        <div className="horizontal-flex">
                            <Tween from={{ opacity: 0, duration: .75, y: "2em", delay: .75 }}>
                                <section className="main-section">
                                    <h3>Portfolio
                                        <a href="https://github.com/Latchague/GatsbyPortfolio" target="_blank" rel="noopener noreferrer"><FaGithub /></a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non volutpat turpis, nec iaculis nisi. Proin sit amet ultrices enim, ut pharetra dolor. Curabitur ultricies gravida leo, a imperdiet risus vestibulum id.</p>
                                </section>
                            </Tween>
                            <Tween from={{ opacity: 0, duration: .75, y: "2em", delay: .75 }}>
                                <section className="technologies-section">
                                    <h4>Technologies</h4>
                                    <div className="json-container">
                                        <ul className="json">
                                            <li><span className="text-variable">"Framework"</span><span className="text-white">:</span> <span className="text-string">"Gatsby"</span><span className="text-white">,</span></li>
                                            <li><span className="text-variable">"Languages"</span><span className="text-white">:</span> <span className="text-string">"Typescript, SASS"</span><span className="text-white">,</span></li>
                                            <li><span className="text-variable">"Animations"</span><span className="text-white">:</span> <span className="text-string">"GSAP"</span><span className="text-white">,</span></li>
                                            <li><span className="text-variable">"Deployment"</span><span className="text-white">:</span> <span className="text-string">"AWS S3, Cloufront &amp; Lambda"</span><span className="text-white">,</span></li>
                                            <li><span className="text-variable">"CI/CD"</span><span className="text-white">:</span> <span className="text-string">"GitHub Actions"</span><span className="text-white"></span></li>
                                        </ul>
                                    </div>
                                </section>
                            </Tween>
                        </div>
                        <div className="horizontal-flex">
                            <Tween from={{ opacity: 0, duration: .75, y: "2em", delay: .75 }}>
                                <section className="other-section">
                                </section>
                            </Tween>
                        </div>
                    </div>
                </div>
            </Tween> : <Tween from={{ x: "100%", duration: .75 }}>
                <div className="project-modal">
                    <div className="vertical-flex">
                        <div className="horizontal-flex">
                            <Tween from={{ opacity: 0, duration: .75, y: "2em", delay: .75 }}>
                                <section className="main-section">
                                    <h3>Portfolio
                                        <a href="https://github.com/Latchague/GatsbyPortfolio" target="_blank" rel="noopener noreferrer"><FaGithub /></a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non volutpat turpis, nec iaculis nisi. Proin sit amet ultrices enim, ut pharetra dolor. Curabitur ultricies gravida leo, a imperdiet risus vestibulum id.</p>
                                </section>
                            </Tween>
                            <Tween from={{ opacity: 0, duration: .75, y: "2em", delay: .75 }}>
                                <section className="technologies-section">
                                    <h4>Technologies</h4>
                                    <div className="json-container">
                                        <ul className="json">
                                            <li><span className="text-variable">"Framework"</span><span className="text-white">:</span> <span className="text-string">"Gatsby"</span><span className="text-white">,</span></li>
                                            <li><span className="text-variable">"Languages"</span><span className="text-white">:</span> <span className="text-string">"Typescript, SASS"</span><span className="text-white">,</span></li>
                                            <li><span className="text-variable">"Animations"</span><span className="text-white">:</span> <span className="text-string">"GSAP"</span><span className="text-white">,</span></li>
                                            <li><span className="text-variable">"Deployment"</span><span className="text-white">:</span> <span className="text-string">"AWS S3, Cloufront &amp; Lambda"</span><span className="text-white">,</span></li>
                                            <li><span className="text-variable">"CI/CD"</span><span className="text-white">:</span> <span className="text-string">"GitHub Actions"</span><span className="text-white"></span></li>
                                        </ul>
                                    </div>
                                </section>
                            </Tween>
                        </div>
                        <div className="horizontal-flex">
                            <Tween from={{ opacity: 0, duration: .75, y: "2em", delay: .75 }}>
                                <section className="other-section">
                                </section>
                            </Tween>
                        </div>
                    </div>
                </div>
            </Tween>)
            } */}
        </>
    }
}