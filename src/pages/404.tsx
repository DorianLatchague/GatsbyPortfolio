import React, { useState, useEffect } from "react"
import ErrorBoundary from "../Components/ErrorBoundary";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Link from "../Components/Link";
import Footer from "../Components/Footer";
import { IsMobileContext } from "../Components/Contexts/isMobile";
import '../stylesheets/404.scss';
import useSSR from "use-ssr";

const isMobileWidth = () => {
  if (useSSR().isBrowser && window.innerWidth <= 1000) {
      return true;
  }
  return false;
};

// markup
const NotFoundPage = () => {
  const [navToggled, setNavToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(isMobileWidth());
  useEffect(() => {
    window.addEventListener('resize', onResizeIsMobile);
    return () => window.removeEventListener('resize', onResizeIsMobile);
  }, [isMobile]);
  const onResizeIsMobile = () => {
      setIsMobile(isMobileWidth());
  }
  return <ErrorBoundary>
    <IsMobileContext.Provider value={isMobile}>
      <Header navToggled={navToggled} setNavToggled={setNavToggled} />
      <main id="not-found" className={navToggled ? 'nav-toggled': ''}>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="The page you were looking for could not be found" />
      </Helmet>
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
        </p>
        <Link scrollTo="/" navigateTo="/"><button>Go home</button></Link>.
      </main>
      <Footer />
    </ IsMobileContext.Provider>
  </ErrorBoundary>
}

export default NotFoundPage
