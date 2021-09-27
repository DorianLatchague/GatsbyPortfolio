import { createContext} from 'react';
import useSSR from 'use-ssr';

export const isMobileWidth = () => {
    if (useSSR().isBrowser && window.innerWidth <= 1000) {
        return true;
    }
    return false;
  };
export const IsMobileContext = createContext(isMobileWidth());