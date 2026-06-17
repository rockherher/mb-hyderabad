import { useEffect, useRef } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FloatingWhatsApp from './components/floating-whatsapp';
import ThankYou from './components/thank-you';
import Home from './pages/home';


declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const AnalyticsRouteTracker = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const pagePath = location.pathname + location.search;

    window.fbq?.('track', 'PageView');

    window.gtag?.('event', 'page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });

    window.dataLayer?.push({
      event: 'spa_pageview',
      page_path: pagePath,
    });
  }, [location.pathname, location.search]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <AnalyticsRouteTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
};

export default App;
