import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import GrainOverlay from './components/Layout/GrainOverlay';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import DespairDecay from './pages/DespairDecay';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = (element as HTMLElement).offsetTop - navHeight - 20;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const location = useLocation();
  const isDetailPage = location.pathname !== '/';

  return (
    <>
      <GrainOverlay />
      <Navigation isDetailPage={isDetailPage} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/despair-decay" element={<DespairDecay />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
