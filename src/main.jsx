import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const helmetContext = {};

const rootElement = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
  // Verwijder duplicate ld+json script tags na hydration
  // (react-helmet-async voegt server-rendered tags opnieuw toe ondanks data-rh="true")
  setTimeout(() => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    const seen = new Set();
    scripts.forEach(script => {
      const content = script.textContent.trim();
      if (seen.has(content)) {
        script.remove();
      } else {
        seen.add(content);
      }
    });
  }, 0);
} else {
  createRoot(rootElement).render(app);
}

// Trigger prerender engine once the app is mounted and helmet tags are injected
window.setTimeout(() => {
  document.dispatchEvent(new Event('custom-render-trigger'));
}, 1000);
