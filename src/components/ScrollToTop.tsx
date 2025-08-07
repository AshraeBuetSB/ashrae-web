// Used for automatically scrolling to top when the route changes
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top of the document
        window.scrollTo(0, 0);
        // Or for smooth scrolling:
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [pathname]); // Re-run effect when pathname changes

    return null; // This component doesn't render any UI
}

export default ScrollToTop;