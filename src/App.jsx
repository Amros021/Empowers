import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Diensten from './pages/Diensten';
import About from './pages/About';
import Nieuws from './pages/Nieuws';
import BlogPostGeo from './pages/BlogPostGeo';
import BlogPostMetaAds from './pages/BlogPostMetaAds';
import BlogPostTikTokAds from './pages/BlogPostTikTokAds';
import BlogPostTracking from './pages/BlogPostTracking';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/over-ons" element={<About />} />
        <Route path="/nieuws" element={<Nieuws />} />
        <Route path="/blog/wat-is-geo-generative-engine-optimization" element={<BlogPostGeo />} />
        <Route path="/blog/waarom-meta-ads-niet-converteren" element={<BlogPostMetaAds />} />
        <Route path="/blog/tiktok-ads-voor-bedrijven" element={<BlogPostTikTokAds />} />
        <Route path="/blog/marketing-tracking-conversies-meten" element={<BlogPostTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
