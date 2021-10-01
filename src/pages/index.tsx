import '../stylesheets/index.scss';
import ErrorBoundary from '../Components/ErrorBoundary';
import { Helmet } from "react-helmet";
import Header from '../Components/Header';
import Intro from '../Components/Intro';
import AboutMe from '../Components/AboutMe';
import Experience from '../Components/Experience';
import Technologies from '../Components/Technologies';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import React, { useEffect, useState } from 'react';
import { graphql } from "gatsby";
import { isMobileWidth, IsMobileContext } from '../Components/Contexts/isMobile';

function App({
  data: {
    allTechnologiesJson: {
      nodes: technologies,
    },
    allProjectsJson: {
      nodes: projects
    }
  }
} : {
  data: {
    allTechnologiesJson: {
      nodes: {
        name: string,
        icon: string,
        description: string,
        experience: number,
        color: string
      }[]
    },
    allProjectsJson: {
      nodes: {
        name: string,
        img_url: string,
        description: string,
        img_alt: string
      }[]
    }
  }
}) {
  const [navToggled, setNavToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileWidth());
    if (window) {
      window.addEventListener('resize', onResizeIsMobile);
      return () => window.removeEventListener('resize', onResizeIsMobile);
    }
  }, [isMobile]);
  const onResizeIsMobile = () => {
      setIsMobile(isMobileWidth());
  }
  return <ErrorBoundary>
    <IsMobileContext.Provider value={isMobile}>
      <Helmet>
        <title>Dorian Latchague</title>
        <meta name="description" content="I am a web developer with a background in digital marketing, full-stack instruction and music performance. I presently work as a developer enhancing customer experiences while solving real-life marketing challenges." />
      </Helmet>
      <Header navToggled={navToggled} setNavToggled={setNavToggled} />
      <main className={navToggled ? 'nav-toggled': ''}>
        <Intro />
        <AboutMe />
        <Experience />
        <Technologies technologies={technologies} />
        <Projects projects={projects} />  
        <Contact />
      </main>
      <Footer />
      </IsMobileContext.Provider>
    </ErrorBoundary>;
}

export const query = graphql`
  query HomePageQuery {
    allTechnologiesJson {
      nodes {
          name,
          icon,
          description,
          experience,
          color
      }
    },
    allProjectsJson {
      nodes {
        name,
        img_url,
        description,
        img_alt
      }
    }
  }
`

export default App;