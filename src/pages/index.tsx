import '../stylesheets/index.scss';
import ErrorBoundary from '../Components/ErrorBoundary';
import Technologies from '../Components/Technologies';
import AboutMe from '../Components/AboutMe';
import Header from '../Components/Header';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Experience from '../Components/Experience';
import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Intro from '../Components/Intro';

const isMobileWidth = () => {
  if (window.innerWidth <= 1000) {
      return true;
  }
  return false;
};

function App({
  data: {
    allTechnologiesJson: {
      nodes: technologies
    }
  }
}:{data: {
  allTechnologiesJson: {
    nodes: {
      name: string,
      icon: string,
      description: string,
      experience: string,
      color: string
    }[]
  }
}}) {
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
      <Helmet>
        <title>Dorian Latchague</title>
        <meta name="description" content="I am a web developer with a background in digital marketing, full-stack instruction and music performance. I presently work as a developer enhancing customer experiences while solving real-life marketing challenges." />
      </Helmet>
      <Header isMobile={isMobile} navToggled={navToggled} setNavToggled={setNavToggled} isIndex={__filename === '/index.js'} />
      <main className={navToggled ? 'nav-toggled': ''}>
        <Intro />
        <AboutMe />
        <Experience />
        <Technologies technologies={technologies} />
        <Projects />  
        <Contact />
        <Footer isMobile={isMobile} isIndex={__filename === 'index.tsx'} />
      </main>
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
    }
  }
`

export default App;